import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ApplicationsStore, CitizensStore, PermitsStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-citizen-detail',
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <a routerLink=".." style="color: #0066cc; text-decoration: none;">&larr; Back to citizens</a>

      <header style="margin-top: 8px;">
        <app-page-header title="Citizen Detail (Modern)" [source]="source()" (sourceChange)="onSourceChange($event)" />
        <p style="margin:4px 0 0 0; color:#555;">Id: {{ citizenId() }}</p>
        @if (citizen(); as currentCitizen) {
          <p style="margin:4px 0 0 0; color:#555; font-weight: bold;">
            {{ currentCitizen.fullName }} - {{ currentCitizen.documentNumber }}
          </p>
        }
      </header>

      @if (citizensStore.isLoading()) {
        <p>Loading citizen...</p>
      }

      @if (!citizensStore.isLoading() && !citizen()) {
        <p style="color:#b00020;">Citizen not found.</p>
      }

      <h3 style="margin-top: 16px; margin-bottom: 0;">Related permits</h3>
      @if (permitsStore.isLoading()) {
        <p>Loading permits...</p>
      }
      @if (!permitsStore.isLoading() && relatedPermits().length === 0) {
        <p>No permits.</p>
      }

      @if (!permitsStore.isLoading() && relatedPermits().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Id</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Type</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
            </tr>
          </thead>
          <tbody>
            @for (permit of relatedPermits(); track permit.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  <a [routerLink]="['/modern/permits']" [queryParams]="{ q: permit.id }" style="color: #0066cc; text-decoration: underline;">{{ permit.id }}</a>
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.type }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.status }}</td>
              </tr>
            }
          </tbody>
        </table>
      }

      <h3 style="margin-top: 16px; margin-bottom: 0;">Related applications</h3>
      @if (applicationsStore.isLoading()) {
        <p>Loading applications...</p>
      }
      @if (!applicationsStore.isLoading() && relatedApplications().length === 0) {
        <p>No applications.</p>
      }

      @if (!applicationsStore.isLoading() && relatedApplications().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Id</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Region</th>
            </tr>
          </thead>
          <tbody>
            @for (application of relatedApplications(); track application.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  <a [routerLink]="['/modern/applications']" [queryParams]="{ q: application.id }" style="color: #0066cc; text-decoration: underline;">{{ application.id }}</a>
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ application.status }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ application.region }}</td>
              </tr>
            }
          </tbody>
        </table>
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