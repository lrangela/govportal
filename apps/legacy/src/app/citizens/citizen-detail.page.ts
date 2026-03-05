import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CitizensFacade, PermitsFacade, ApplicationsFacade } from '@gov/data-access/legacy';

@Component({
    selector: 'app-citizen-detail-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <a routerLink="..">Back to citizens</a>

      <header>
        <h2 style="margin:0;">Citizen detail</h2>
        <p style="margin:4px 0 0 0; color:#555;">Id: {{ citizenId() }}</p>
      </header>

      <h3 style="margin:0;">Permits relacionados</h3>
      @if (permitsFacade.isLoading()) { <p>Loading permits...</p> }
      @if (!permitsFacade.isLoading() && relatedPermits().length === 0) { <p>No permits.</p> }

      @if (!permitsFacade.isLoading() && relatedPermits().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Id</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Type</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
            </tr>
          </thead>
          <tbody>
            @for (p of relatedPermits(); track p.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ p.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ p.type }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ p.status }}</td>
              </tr>
            }
          </tbody>
        </table>
      }

      <h3 style="margin:0;">Applications relacionadas</h3>
      @if (appsFacade.isLoading()) { <p>Loading applications...</p> }
      @if (!appsFacade.isLoading() && relatedApplications().length === 0) { <p>No applications.</p> }

      @if (!appsFacade.isLoading() && relatedApplications().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Id</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Type</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
            </tr>
          </thead>
          <tbody>
            @for (a of relatedApplications(); track a.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ a.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ a.status }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ a.region }}</td>
              </tr>
            }
          </tbody>
        </table>
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
