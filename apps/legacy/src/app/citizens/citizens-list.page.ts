import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CitizensFacade } from '@gov/data-access/legacy';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-citizens-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <app-page-header title="Citizens" [source]="source()" (sourceChange)="onSourceChange($event)" />

      <div style="display:flex; gap: 8px; align-items:center;">
        <input
          type="search"
          placeholder="Search (q)..."
          [value]="search()"
          (input)="onSearchInput($event)"
          style="flex:1; padding: 8px;"
        />
        <button type="button" (click)="facade.refresh()" style="padding: 8px 12px;">
          Refresh
        </button>
      </div>

      <!-- estados -->
      @if (facade.isLoading()) {
        <p>Loading...</p>
      }

      @if (facade.error()) {
        <p style="color:#b00020;">
          Error loading citizens.
          <button type="button" (click)="facade.refresh()" style="margin-left:8px;">Retry</button>
        </p>
      }

      @if (facade.isEmpty()) {
        <p>No results.</p>
      }

      <!-- tabla -->
      @if (!facade.isLoading() && !facade.error() && facade.citizens().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Name</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Document</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Created</th>
            </tr>
          </thead>
          <tbody>
            @for (c of facade.citizens(); track c.id) {
                <tr>
                  <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                    <a [routerLink]="[c.id]">{{ c.fullName }}</a>
                  </td>
                  <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ c.documentNumber }}</td>
                  <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ c.status }}</td>
                  <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ c.createdAt }}</td>
                </tr>
            }
          </tbody>
        </table>
      }

      <!-- paginación simple -->
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
export class CitizensListPage {
  readonly facade = inject(CitizensFacade);
  private readonly router = inject(Router);

  // Toggle preparado para legacy vs modern
  readonly source = signal<'legacy' | 'modern'>('legacy');

  // input local para evitar spamear requests por tecla
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
    // MVP: aplicamos inmediato. (Luego: debounce con rxResource si quieres)
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
