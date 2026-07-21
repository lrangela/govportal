import '@angular/compiler';
import '../test-setup';
import { describe, it, expect, beforeEach } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App Component', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('should render the main brand heading and navigation groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('GovPortal');
    expect(compiled.querySelector('nav[aria-label="Navegación Principal"]')).toBeTruthy();
  });

  it('should expose accessible navigation links with clear labels', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a.gov-header__link'));

    expect(links.length).toBe(6);
    expect(links.map((a) => a.textContent?.trim())).toEqual([
      'Ciudadanos',
      'Permisos',
      'Solicitudes',
      'Ciudadanos',
      'Permisos',
      'Solicitudes',
    ]);

    links.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/\/(legacy|modern)\/(citizens|permits|applications)/);
    });
  });

  it('should route legacy and modern links to the correct MFE paths', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a.gov-header__link'));

    const legacyCitizens = links.find((a) => a.textContent?.trim() === 'Ciudadanos' && a.getAttribute('href')?.startsWith('/legacy'));
    const modernCitizens = links.find((a) => a.textContent?.trim() === 'Ciudadanos' && a.getAttribute('href')?.startsWith('/modern'));

    expect(legacyCitizens?.getAttribute('href')).toBe('/legacy/citizens');
    expect(modernCitizens?.getAttribute('href')).toBe('/modern/citizens');
  });
});
