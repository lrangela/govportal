import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ApplicationsStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';


@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <app-page-header title="Applications (Modern - NgRx Signals)" [source]="source()" (sourceChange)="onSourceChange($event)" />


      <div style="display:flex; gap: 8px; align-items:center;">
        <input
          type="search"
          placeholder="Search by ID, citizen, permit, region..."
          [value]="store.q()"
          (input)="onSearch($event)"
          style="flex:1; padding: 8px;"
        />
        <button type="button" (click)="store.loadAll()" style="padding: 8px 12px;">
          Refresh
        </button>
      </div>

      @if (store.isLoading()) {
        <p>Loading applications...</p>
      }

      @if (store.error()) {
        <p style="color:#b00020;">{{ store.error() }}</p>
      }

      @if (!store.isLoading() && !store.error()) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">ID</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Citizen</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Permit</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Region</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Created</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Updated</th>
            </tr>
          </thead>
          <tbody>
            @for (app of store.filteredItems(); track app.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ app.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  <a [routerLink]="['/modern/citizens', app.citizenId]" style="color: #0066cc; text-decoration: underline;">{{ app.citizenId }}</a>
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  @if (app.permitId) {
                    <a [routerLink]="['/modern/permits']" [queryParams]="{ q: app.permitId }" style="color: #0066cc; text-decoration: underline;">{{ app.permitId }}</a>
                  } @else {
                    -
                  }
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ app.region }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ app.status }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ app.createdAt }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ app.updatedAt }}</td>
              </tr>
            } @empty {
              <tr><td colspan="7" style="padding: 16px; text-align:center;">No results found.</td></tr>
            }
          </tbody>
        </table>

        <footer style="display:flex; align-items:center; justify-content:space-between; margin-top: 12px;">
          <div style="display:flex; gap: 8px;">
            <button (click)="store.setPage(store.page() - 1)" [disabled]="store.page() === 1">Prev</button>
            <span>Page {{ store.page() }}</span>
            <button (click)="store.setPage(store.page() + 1)" [disabled]="(store.page() * store.limit()) >= store.totalFiltered()">Next</button>
          </div>
          <div>Total: {{ store.totalFiltered() }}</div>
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
