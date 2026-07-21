import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ApplicationsStore, CitizensStore, PermitsStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-citizen-detail',
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <section class="gov-detail">
      <a routerLink=".." class="gov-link">← Volver a ciudadanos</a>

      <header class="gov-detail__header">
        <app-page-header title="Detalle de Ciudadano (Modern)" [source]="source()" (sourceChange)="onSourceChange($event)" />
        <p class="gov-detail__subtitle">Id: {{ citizenId() }}</p>
        @if (citizen(); as currentCitizen) {
          <p class="gov-detail__subtitle gov-detail__subtitle--strong">
            {{ currentCitizen.fullName }} - {{ currentCitizen.documentNumber }}
          </p>
        }
      </header>

      @if (citizensStore.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando ciudadano...</p>
      }

      @if (!citizensStore.isLoading() && !citizen()) {
        <p role="alert" class="gov-status gov-status--error">Ciudadano no encontrado.</p>
      }

      <h3 class="gov-detail__section-title">Permisos Relacionados</h3>
      @if (permitsStore.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando permisos...</p>
      }
      @if (!permitsStore.isLoading() && relatedPermits().length === 0) {
        <p role="status" class="gov-status gov-status--empty">No posee permisos registrados.</p>
      }

      @if (!permitsStore.isLoading() && relatedPermits().length) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Permisos relacionados del ciudadano">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Tipo</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              @for (permit of relatedPermits(); track permit.id) {
                <tr>
                  <td>
                    <a [routerLink]="['/modern/permits']" [queryParams]="{ q: permit.id }" class="gov-link">{{ permit.id }}</a>
                  </td>
                  <td>{{ permit.type }}</td>
                  <td><span class="gov-badge">{{ permit.status }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

      <h3 class="gov-detail__section-title">Solicitudes Relacionadas</h3>
      @if (applicationsStore.isLoading()) {
        <p role="status" class="gov-status gov-status--loading">Cargando solicitudes...</p>
      }
      @if (!applicationsStore.isLoading() && relatedApplications().length === 0) {
        <p role="status" class="gov-status gov-status--empty">No posee solicitudes registradas.</p>
      }

      @if (!applicationsStore.isLoading() && relatedApplications().length) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Solicitudes relacionadas del ciudadano">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Estado</th>
                <th scope="col">Región</th>
              </tr>
            </thead>
            <tbody>
              @for (application of relatedApplications(); track application.id) {
                <tr>
                  <td>
                    <a [routerLink]="['/modern/applications']" [queryParams]="{ q: application.id }" class="gov-link">{{ application.id }}</a>
                  </td>
                  <td><span class="gov-badge">{{ application.status }}</span></td>
                  <td>{{ application.region }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly citizensStore = inject(CitizensStore);
  readonly permitsStore = inject(PermitsStore);
  readonly applicationsStore = inject(ApplicationsStore);

  readonly source = signal<'legacy' | 'modern'>('modern');
  readonly citizenId = computed(() => this.route.snapshot.paramMap.get('id') ?? '');

  readonly citizen = computed(() =>
    this.citizensStore.items().find((item) => item.id === this.citizenId())
  );

  readonly relatedPermits = computed(() =>
    this.permitsStore.items().filter((permit) => permit.citizenId === this.citizenId())
  );

  readonly relatedApplications = computed(() =>
    this.applicationsStore.items().filter(
      (application) => application.citizenId === this.citizenId()
    )
  );

  ngOnInit(): void {
    this.citizensStore.loadAll();
    this.permitsStore.loadAll();
    this.applicationsStore.loadAll();
  }

  onSourceChange(value: 'legacy' | 'modern'): void {
    if (value !== this.source()) {
      const currentUrl = this.router.url;
      const newUrl = currentUrl.replace(/^\/(legacy|modern)/, `/${value}`);
      this.router.navigateByUrl(newUrl);
    }
  }
}