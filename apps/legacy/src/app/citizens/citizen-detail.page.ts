import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CitizensFacade, PermitsFacade, ApplicationsFacade } from '@gov/data-access/legacy';

@Component({
    selector: 'app-citizen-detail-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    template: `
    <section class="gov-detail">
      <a routerLink=".." class="gov-link">← Volver al listado de ciudadanos</a>

      <header class="gov-detail__header">
        <h2 class="gov-detail__title">Detalle del Ciudadano</h2>
        <p class="gov-detail__subtitle">ID: {{ citizenId() }}</p>
      </header>

      <h3 class="gov-detail__section-title">Permisos Relacionados</h3>
      @if (permitsFacade.isLoading()) { <p role="status" class="gov-status gov-status--loading">Cargando permisos...</p> }
      @if (!permitsFacade.isLoading() && relatedPermits().length === 0) { <p role="status" class="gov-status gov-status--empty">No posee permisos registrados.</p> }

      @if (!permitsFacade.isLoading() && relatedPermits().length) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Permisos relacionados del ciudadano">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tipo</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              @for (p of relatedPermits(); track p.id) {
                <tr>
                  <td>{{ p.id }}</td>
                  <td>{{ p.type }}</td>
                  <td><span class="gov-badge">{{ p.status }}</span></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }

      <h3 class="gov-detail__section-title">Solicitudes Relacionadas</h3>
      @if (appsFacade.isLoading()) { <p role="status" class="gov-status gov-status--loading">Cargando solicitudes...</p> }
      @if (!appsFacade.isLoading() && relatedApplications().length === 0) { <p role="status" class="gov-status gov-status--empty">No posee solicitudes registradas.</p> }

      @if (!appsFacade.isLoading() && relatedApplications().length) {
        <div class="table-responsive">
          <table class="gov-table" aria-label="Solicitudes relacionadas del ciudadano">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Estado</th>
                <th scope="col">Región</th>
              </tr>
            </thead>
            <tbody>
              @for (a of relatedApplications(); track a.id) {
                <tr>
                  <td>{{ a.id }}</td>
                  <td><span class="gov-badge">{{ a.status }}</span></td>
                  <td>{{ a.region }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>
  `,
})
export class CitizenDetailPage {
    private readonly route = inject(ActivatedRoute);

    // Cargamos todo con el patrón legacy (MVP)
    readonly citizensFacade = inject(CitizensFacade);
    readonly permitsFacade = inject(PermitsFacade);
    readonly appsFacade = inject(ApplicationsFacade);

    readonly citizenId = computed(() => this.route.snapshot.paramMap.get('id') ?? '');

    readonly relatedPermits = computed(() =>
        this.permitsFacade.permits().filter((p) => p.citizenId === this.citizenId())
    );

    readonly relatedApplications = computed(() =>
        this.appsFacade.applications().filter((a) => a.citizenId === this.citizenId())
    );
}
