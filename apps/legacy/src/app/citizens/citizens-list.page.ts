import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CitizensFacade } from '@gov/data-access/legacy';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-citizens-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <section class="gov-page">
      <app-page-header title="Ciudadanos (Legacy API)" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div class="gov-form-row">
        <label for="citizen-search">Buscar:</label>
        <input
          id="citizen-search"
          type="search"
          class="gov-input"
          placeholder="Filtrar por nombre o documento..."
          [value]="search()"
          (input)="onSearchInput($event)"
          aria-label="Buscar ciudadano por nombre o número de documento"
        />
        <button type="button" class="gov-button" (click)="facade.refresh()">
          Actualizar
        </button>
      </div>

      <!-- estados -->
      @if (facade.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando registro de ciudadanos...</p>
      }

      @if (facade.error()) {
        <p role="alert" class="gov-status gov-status--error">
          Error al cargar los datos del servicio legacy.
          <button type="button" class="gov-button gov-button--small" (click)="facade.refresh()">Reintentar</button>
        </p>
      }

      @if (facade.isEmpty()) {
        <p role="status" class="gov-status gov-status--empty">No se encontraron ciudadanos que coincidan con la búsqueda.</p>
      }

      <!-- tabla -->
      @if (!facade.isLoading() && !facade.error() && facade.citizens().length) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Listado de Ciudadanos">
            <thead>
              <tr>
                <th scope="col">Nombre Completo</th>
                <th scope="col">Documento</th>
                <th scope="col">Estado</th>
                <th scope="col">Fecha Registro</th>
              </tr>
            </thead>
            <tbody>
              @for (c of facade.citizens(); track c.id) {
                <tr>
                  <td>
                    <a [routerLink]="[c.id]" class="gov-link">{{ c.fullName }}</a>
                  </td>
                  <td>{{ c.documentNumber }}</td>
                  <td><span class="gov-badge">{{ c.status }}</span></td>
                  <td>{{ c.createdAt }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

      <!-- paginación simple -->
      <footer class="gov-pagination">
        <div class="gov-pagination__controls">
          <button type="button" class="gov-button" (click)="prevPage()" [disabled]="facade.page() <= 1" aria-label="Página anterior">
            Anterior
          </button>
          <button type="button" class="gov-button" (click)="nextPage()" [disabled]="!canNext()" aria-label="Página siguiente">
            Siguiente
          </button>
        </div>

        <div class="gov-pagination__info">
          <span>Página {{ facade.page() }}</span>
          <span>•</span>
          <span>Total {{ facade.total() }}</span>
          <span>•</span>
          <label class="gov-pagination__limit">
            <span>Tamaño:</span>
            <select [value]="facade.limit()" (change)="onLimitChange($event)" aria-label="Seleccionar cantidad de elementos por página">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </label>
        </div>
      </footer>
    </section>
  `,
})
export class CitizensListPage {
  readonly facade = inject(CitizensFacade);
  private readonly router = inject(Router);

  // Toggle preparado para legacy vs modern
  readonly source = signal<'legacy' | 'modern'>('legacy');

  // input local para evitar spamear requests por tecla
  readonly search = signal(this.facade.q());

  readonly canNext = computed(() => this.facade.page() < this.totalPages());


  private readonly totalPages = computed<number>(() => {
    const total = this.facade.total();
    const limit = this.facade.limit();
    return limit > 0 ? Math.max(1, Math.ceil(total / limit)) : 1;
  });

  onSourceChange(value: 'legacy' | 'modern'): void {
    if (value !== this.source()) {
      const currentUrl = this.router.url;
      const newUrl = currentUrl.replace(/^\/(legacy|modern)/, `/${value}`);
      this.router.navigateByUrl(newUrl);
    }
  }

  onSearchInput(event: Event): void {
    const value = this.getInputValue(event);
    this.search.set(value);
    // MVP: aplicamos inmediato. (Luego: debounce con rxResource si quieres)
    this.facade.setSearch(value);
  }

  onLimitChange(event: Event): void {
    const parsed = Number(this.getSelectValue(event));
    if (Number.isFinite(parsed) && parsed > 0) {
      this.facade.setLimit(parsed);
    }
  }

  prevPage(): void {
    this.facade.setPage(Math.max(1, this.facade.page() - 1));
  }

  nextPage(): void {
    if (this.canNext()) {
      this.facade.setPage(this.facade.page() + 1);
    }
  }

  private getInputValue(event: Event): string {
    const target = event.target;
    return target instanceof HTMLInputElement ? target.value : '';
  }

  private getSelectValue(event: Event): string {
    const target = event.target;
    return target instanceof HTMLSelectElement ? target.value : '';
  }
}
