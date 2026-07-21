import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PermitsStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';


@Component({
  selector: 'app-permits-list',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section class="gov-page">
      <app-page-header title="Permisos (Modern - NgRx Signals)" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div class="gov-form-row">
        <label for="modern-permits-search">Buscar:</label>
        <input
          id="modern-permits-search"
          type="search"
          class="gov-input"
          placeholder="Buscar por ID, ciudadano, tipo, región..."
          [value]="store.q()"
          (input)="onSearch($event)"
          aria-label="Buscar permisos por ID, ciudadano, tipo, o región"
        />
        <button type="button" class="gov-button" (click)="store.loadAll()">
          Actualizar
        </button>
      </div>

      @if (store.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando permisos...</p>
      }

      @if (store.error()) {
        <p role="alert" class="gov-status gov-status--error">{{ store.error() }}</p>
      }

      @if (!store.isLoading() && !store.error()) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Listado Moderno de Permisos">
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
              @for (permit of store.filteredItems(); track permit.id) {
                <tr>
                  <td>{{ permit.id }}</td>
                  <td>
                    <a [routerLink]="['/modern/citizens', permit.citizenId]" class="gov-link">{{ permit.citizenId }}</a>
                  </td>
                  <td>{{ permit.type }}</td>
                  <td><span class="gov-badge">{{ permit.status }}</span></td>
                  <td>{{ permit.region }}</td>
                  <td>{{ permit.createdAt }}</td>
                </tr>
              } @empty {
                <tr><td colspan="6" class="gov-table__empty">No se encontraron permisos.</td></tr>
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
export class PermitsList implements OnInit {
  readonly store = inject(PermitsStore);
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