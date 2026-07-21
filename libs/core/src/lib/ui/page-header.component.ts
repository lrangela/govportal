import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-page-header',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
    <header class="gov-page-header">
      <h2 class="gov-page-header__title">{{ title }}</h2>

      <label class="gov-page-header__selector">
        <span>Arquitectura:</span>
        <select [value]="source" (change)="onSourceChange($event)" aria-label="Seleccionar arquitectura de fuente de datos">
          <option value="legacy">Legacy (RxJS / Facade)</option>
          <option value="modern">Modern (NgRx Signals)</option>
        </select>
      </label>
    </header>
  `,
})
export class PageHeaderComponent {
    @Input() title = '';
    @Input() source: 'legacy' | 'modern' = 'legacy';
    @Output() sourceChange = new EventEmitter<'legacy' | 'modern'>();

    onSourceChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        if (target) {
            this.sourceChange.emit(target.value as 'legacy' | 'modern');
        }
    }
}
