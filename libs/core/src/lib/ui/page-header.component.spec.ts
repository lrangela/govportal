import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent (a11y)', () => {
    let fixture: ComponentFixture<PageHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PageHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PageHeaderComponent);
    });

    it('should render the title and an accessible architecture selector', () => {
        fixture.componentInstance.title = 'Ciudadanos';
        fixture.componentInstance.source = 'legacy';
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h2')?.textContent).toContain('Ciudadanos');

        const select = compiled.querySelector('select');
        expect(select).toBeTruthy();
        expect(select?.getAttribute('aria-label')).toBeTruthy();
        expect(select?.value).toBe('legacy');
    });

    it('should emit sourceChange when the user selects a different architecture', () => {
        fixture.componentInstance.title = 'Ciudadanos';
        fixture.componentInstance.source = 'legacy';
        fixture.detectChanges();

        const emitted: Array<'legacy' | 'modern'> = [];
        fixture.componentInstance.sourceChange.subscribe((value) => emitted.push(value));

        const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
        select.value = 'modern';
        select.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        expect(emitted).toEqual(['modern']);
    });
});
