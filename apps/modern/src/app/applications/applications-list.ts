import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ApplicationsStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';


@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section class="gov-page">
      <app-page-header title="Solicitudes (Modern - NgRx Signals)" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div class="gov-form-row">
        <label for="modern-app-search">Buscar:</label>
        <input
          id="modern-app-search"
          type="search"
          class="gov-input"
          placeholder="Buscar por ID, ciudadano, permiso, región..."
          [value]="store.q()"
          (input)="onSearch($event)"
          aria-label="Buscar solicitudes por ID, ciudadano, permiso o región"
        />
        <button type="button" class="gov-button" (click)="store.loadAll()">
          Actualizar
        </button>
      </div>

      @if (store.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando solicitudes...</p>
      }

      @if (store.error()) {
        <p role="alert" class="gov-status gov-status--error">{{ store.error() }}</p>
      }

      @if (!store.isLoading() && !store.error()) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Listado Moderno de Solicitudes">
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
              @for (app of store.filteredItems(); track app.id) {
                <tr>
                  <td>{{ app.id }}</td>
                  <td>
                    <a [routerLink]="['/modern/citizens', app.citizenId]" class="gov-link">{{ app.citizenId }}</a>
                  </td>
                  <td>
                    @if (app.permitId) {
                      <a [routerLink]="['/modern/permits']" [queryParams]="{ q: app.permitId }" class="gov-link">{{ app.permitId }}</a>
                    } @else {
                      -
                    }
                  </td>
                  <td>{{ app.region }}</td>
                  <td><span class="gov-badge">{{ app.status }}</span></td>
                  <td>{{ app.createdAt }}</td>
                  <td>{{ app.updatedAt }}</td>
                </tr>
              } @empty {
                <tr><td colspan="7" class="gov-table__empty">No se encontraron solicitudes.</td></tr>
              }
            </tbody>
          </table>
        </div>

        <footer class="gov-pagination">
          <div class="gov-pagination__controls">
            <button type="button" class="gov-button" (click)="store.setPage(store.page() - 1)" [disabled]="store.page() === 1" aria-label="Página anterior">Anterior</button>
            <span>Página {{ store.page() }}</span>
            <button type="button" class="gov-button" (click)="store.setPage(store.page() + 1)" [disabled]="(store.page() * store.limit()) >= store.totalFiltered()" aria-label="Página siguiente">Siguiente</button>
          </div>
          <div>Total filtrado: {{ store.totalFiltered() }}</div>
        </footer>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsList implements OnInit {
  readonly store = inject(ApplicationsStore);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly source = signal<'legacy' | 'modern'>('modern');

  ngOnInit() {
    const initialQ = this.route.snapshot.queryParamMap.get('q');
    if (initialQ) {
      this.store.setSearch(initialQ);
    }
    this.store.loadAll(); // Carga inicial
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.store.setSearch(value);
  }

  onSourceChange(value: 'legacy' | 'modern'): void {
    if (value !== this.source()) {
      const currentUrl = this.router.url;
      const newUrl = currentUrl.replace(/^\/(legacy|modern)/, `/${value}`);
      this.router.navigateByUrl(newUrl);
    }
  }
}
