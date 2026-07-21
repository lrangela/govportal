import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <header class="gov-header">
      <div class="gov-header__brand">
        <h1 class="gov-header__title">GovPortal</h1>
        <span class="gov-header__subtitle">Arquitectura Micro-Frontends & Anti-Corruption Layer</span>
      </div>

      <nav class="gov-header__nav" aria-label="Navegación Principal">
        <div class="gov-header__group">
          <span class="gov-badge gov-badge--legacy" title="Demuestra integración con APIs legacy REST tradicionales via Mappers/DTOs">
            Legacy Remote
          </span>
          <a routerLink="/legacy/citizens" routerLinkActive="active" class="gov-header__link">Ciudadanos</a>
          <a routerLink="/legacy/permits" routerLinkActive="active" class="gov-header__link">Permisos</a>
          <a routerLink="/legacy/applications" routerLinkActive="active" class="gov-header__link">Solicitudes</a>
        </div>

        <div class="gov-header__divider" role="separator" aria-orientation="vertical"></div>

        <div class="gov-header__group">
          <span class="gov-badge gov-badge--modern" title="Demuestra NgRx SignalStore con zoneless change detection">
            Modern Remote
          </span>
          <a routerLink="/modern/citizens" routerLinkActive="active" class="gov-header__link">Ciudadanos</a>
          <a routerLink="/modern/permits" routerLinkActive="active" class="gov-header__link">Permisos</a>
          <a routerLink="/modern/applications" routerLinkActive="active" class="gov-header__link">Solicitudes</a>
        </div>
      </nav>
    </header>

    <main class="gov-main" id="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .gov-header {
      background-color: var(--gov-primary, #003366);
      color: #ffffff;
      padding: 16px 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      &__brand {
        display: flex;
        flex-direction: column;
      }

      &__title {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing: -0.5px;
      }

      &__subtitle {
        font-size: 0.75rem;
        color: #cfd8dc;
      }

      &__nav {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        align-items: center;
      }

      &__group {
        display: flex;
        gap: 12px;
        align-items: center;
      }

      &__divider {
        width: 1px;
        height: 24px;
        background-color: rgba(255,255,255,0.3);
      }

      &__link {
        color: #e2e8f0;
        text-decoration: none;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.9rem;
        transition: background-color 0.2s;

        &:hover {
          background-color: rgba(255,255,255,0.1);
          color: #ffffff;
        }

        &.active {
          font-weight: 600;
          color: #ffffff;
          background-color: rgba(255,255,255,0.2);
          border-bottom: 2px solid #38bdf8;
        }
      }
    }

    .gov-main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 16px;
    }
  `]
})
export class App {
  title = 'shell';
}