import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
    selector: 'app-page-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
    <header style="display:flex; align-items:center; justify-content:space-between; gap: 12px;">
      <h2 style="margin:0;">{{ title() }}</h2>

      <!-- preparado para Legacy vs Modern -->
      <label style="display:flex; align-items:center; gap: 8px;">
        <span>Source</span>
        <select [value]="source()" (change)="onSourceChange($event)" style="padding: 6px;">
          <option value="legacy">Legacy</option>
          <option value="modern">Modern</option>
        </select>
      </label>
    </header>
  `,
})
export class PageHeaderComponent {
    readonly title = input.required<string>();
    readonly source = input.required<'legacy' | 'modern'>();
    readonly sourceChange = output<'legacy' | 'modern'>();

    onSourceChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        if (target) {
            this.sourceChange.emit(target.value as 'legacy' | 'modern');
        }
    }
}
