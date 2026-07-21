import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CitizensStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';


@Component({
  selector: 'app-citizens-list',
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <section class="gov-page">
      <app-page-header title="Ciudadanos (Modern - NgRx Signals)" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div class="gov-form-row">
        <label for="modern-citizen-search">Buscar:</label>
        <input
          id="modern-citizen-search"
          type="search"
          class="gov-input"
          placeholder="Buscar por nombre o documento..."
          [value]="store.q()"
          (input)="onSearch($event)"
          aria-label="Buscar ciudadano por nombre o número de documento"
        />
        <button type="button" class="gov-button" (click)="store.loadAll()">
          Actualizar
        </button>
      </div>

      @if (store.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando registro de ciudadanos...</p>
      }

      @if (store.error()) {
        <p role="alert" class="gov-status gov-status--error">{{ store.error() }}</p>
      }

      @if (!store.isLoading() && !store.error()) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Listado Moderno de Ciudadanos">
            <thead>
              <tr>
                <th scope="col">Nombre Completo</th>
                <th scope="col">Documento</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              @for (c of store.filteredItems(); track c.id) {
                <tr>
                  <td>
                    <a [routerLink]="[c.id]" class="gov-link">{{ c.fullName }}</a>
                  </td>
                  <td>{{ c.documentNumber }}</td>
                  <td>
                    <span class="gov-badge" [class.gov-badge--modern]="c.status === 'active'">{{ c.status }}</span>
                  </td>
                </tr>
              } @empty {
                <tr><td colspan="3" class="gov-table__empty">No se encontraron ciudadanos.</td></tr>
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
export class CitizensList implements OnInit {
  readonly store = inject(CitizensStore);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute)

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
