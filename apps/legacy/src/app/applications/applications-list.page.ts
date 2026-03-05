import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApplicationsFacade } from '@gov/data-access/legacy';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-applications-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <app-page-header title="Applications" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div style="display:flex; gap: 8px; align-items:center;">
        <input
          type="search"
          placeholder="Search applications..."
          [value]="search()"
          (input)="onSearchInput($event)"
          style="flex:1; padding: 8px;"
        />
        <button type="button" (click)="facade.refresh()" style="padding: 8px 12px;">
          Refresh
        </button>
      </div>

      @if (facade.isLoading()) {
        <p>Loading...</p>
      }

      @if (facade.error()) {
        <p style="color:#b00020;">
          Error loading applications.
          <button type="button" (click)="facade.refresh()" style="margin-left:8px;">Retry</button>
        </p>
      }

      @if (facade.isEmpty()) {
        <p>No results.</p>
      }

      @if (!facade.isLoading() && !facade.error() && facade.applications().length) {
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
            @for (application of facade.applications(); track application.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ application.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  <a [routerLink]="['/legacy/citizens', application.citizenId]" style="color: #0066cc; text-decoration: underline;">{{ application.citizenId }}</a>
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  @if (application.permitId) {
                    <a [routerLink]="['/legacy/permits']" [queryParams]="{ q: application.permitId }" style="color: #0066cc; text-decoration: underline;">{{ application.permitId }}</a>
                  } @else {
                    -
                  }
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ application.region }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ application.status }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ application.createdAt }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ application.updatedAt }}</td>
              </tr>
            }
          </tbody>
        </table>
      }

      <footer style="display:flex; align-items:center; justify-content:space-between; gap: 12px;">
        <div>
          <button type="button" (click)="prevPage()" [disabled]="facade.page() <= 1" style="padding: 6px 10px;">
            Prev
          </button>
          <button type="button" (click)="nextPage()" [disabled]="!canNext()" style="padding: 6px 10px; margin-left:8px;">
            Next
          </button>
        </div>

        <div style="display:flex; align-items:center; gap: 8px;">
          <span>Page {{ facade.page() }}</span>
          <span>•</span>
          <span>Total {{ facade.total() }}</span>
          <span>•</span>
          <label style="display:flex; align-items:center; gap: 6px;">
            <span>Page size</span>
            <select [value]="facade.limit()" (change)="onLimitChange($event)" style="padding: 6px;">
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
