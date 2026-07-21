import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PermitsFacade } from '@gov/data-access/legacy';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-permits-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section class="gov-page">
      <app-page-header title="Permisos (Legacy API)" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div class="gov-form-row">
        <label for="permits-search">Buscar:</label>
        <input
          id="permits-search"
          type="search"
          class="gov-input"
          placeholder="Buscar permisos..."
          [value]="search()"
          (input)="onSearchInput($event)"
          aria-label="Buscar permisos"
        />
        <button type="button" class="gov-button" (click)="facade.refresh()">
          Actualizar
        </button>
      </div>

      @if (facade.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando permisos...</p>
      }

      @if (facade.error()) {
        <p role="alert" class="gov-status gov-status--error">
          Error al cargar los permisos.
          <button type="button" class="gov-button gov-button--small" (click)="facade.refresh()">Reintentar</button>
        </p>
      }

      @if (facade.isEmpty()) {
        <p role="status" class="gov-status gov-status--empty">No se encontraron resultados.</p>
      }

      @if (!facade.isLoading() && !facade.error() && facade.permits().length) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Listado de Permisos">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ciudadano</th>
                <th scope="col">Tipo</th>
                <th scope="col">Estado</th>
                <th scope="col">Región</th>
                <th scope="col">Fecha Registro</th>
              </tr>
            </thead>
            <tbody>
              @for (permit of facade.permits(); track permit.id) {
                <tr>
                  <td>{{ permit.id }}</td>
                  <td>
                    <a [routerLink]="['/legacy/citizens', permit.citizenId]" class="gov-link">{{ permit.citizenId }}</a>
                  </td>
                  <td>{{ permit.type }}</td>
                  <td><span class="gov-badge">{{ permit.status }}</span></td>
                  <td>{{ permit.region }}</td>
                  <td>{{ permit.createdAt }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

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
export class PermitsPage {
  readonly facade = inject(PermitsFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly source = signal<'legacy' | 'modern'>('legacy');
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
