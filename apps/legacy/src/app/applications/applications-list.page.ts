import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApplicationsFacade } from '@gov/data-access/legacy';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-applications-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section class="gov-page">
      <app-page-header title="Solicitudes (Legacy API)" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div class="gov-form-row">
        <label for="app-search">Buscar:</label>
        <input
          id="app-search"
          type="search"
          class="gov-input"
          placeholder="Buscar solicitudes..."
          [value]="search()"
          (input)="onSearchInput($event)"
          aria-label="Buscar solicitudes"
        />
        <button type="button" class="gov-button" (click)="facade.refresh()">
          Actualizar
        </button>
      </div>

      @if (facade.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando solicitudes...</p>
      }

      @if (facade.error()) {
        <p role="alert" class="gov-status gov-status--error">
          Error al cargar las solicitudes.
          <button type="button" class="gov-button gov-button--small" (click)="facade.refresh()">Reintentar</button>
        </p>
      }

      @if (facade.isEmpty()) {
        <p role="status" class="gov-status gov-status--empty">No se encontraron resultados.</p>
      }

      @if (!facade.isLoading() && !facade.error() && facade.applications().length) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Listado de Solicitudes">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ciudadano</th>
                <th scope="col">Permiso</th>
                <th scope="col">Región</th>
                <th scope="col">Estado</th>
                <th scope="col">Creado</th>
                <th scope="col">Actualizado</th>
              </tr>
            </thead>
            <tbody>
              @for (application of facade.applications(); track application.id) {
                <tr>
                  <td>{{ application.id }}</td>
                  <td>
                    <a [routerLink]="['/legacy/citizens', application.citizenId]" class="gov-link">{{ application.citizenId }}</a>
                  </td>
                  <td>
                    @if (application.permitId) {
                      <a [routerLink]="['/legacy/permits']" [queryParams]="{ q: application.permitId }" class="gov-link">{{ application.permitId }}</a>
                    } @else {
                      -
                    }
                  </td>
                  <td>{{ application.region }}</td>
                  <td><span class="gov-badge">{{ application.status }}</span></td>
                  <td>{{ application.createdAt }}</td>
                  <td>{{ application.updatedAt }}</td>
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
export class ApplicationsListPage {
  readonly facade = inject(ApplicationsFacade);
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
