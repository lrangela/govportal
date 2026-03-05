import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <div style="font-family: sans-serif;">
      <nav style="background: #333; color: white; padding: 12px 24px; display: flex; gap: 24px; align-items: center;">
        <h1 style="margin: 0; font-size: 1.2rem; margin-right: 24px;">GovPortal</h1>
        
        <div style="display: flex; gap: 16px;">
          <span style="color: #aaa;">Legacy:</span>
          <a routerLink="/legacy/citizens" routerLinkActive="active" style="color: white; text-decoration: none;">Citizens</a>
          <a routerLink="/legacy/permits" routerLinkActive="active" style="color: white; text-decoration: none;">Permits</a>
          <a routerLink="/legacy/applications" routerLinkActive="active" style="color: white; text-decoration: none;">Applications</a>
        </div>

        <div style="width: 2px; height: 24px; background: #555;"></div>

        <div style="display: flex; gap: 16px;">
          <span style="color: #aaa;">Modern:</span>
          <a routerLink="/modern/citizens" routerLinkActive="active" style="color: white; text-decoration: none;">Citizens</a>
          <a routerLink="/modern/permits" routerLinkActive="active" style="color: white; text-decoration: none;">Permits</a>
          <a routerLink="/modern/applications" routerLinkActive="active" style="color: white; text-decoration: none;">Applications</a>
        </div>
      </nav>

      <main style="padding: 16px;">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .active {
      font-weight: bold;
      border-bottom: 2px solid white;
    }
  `]
})
export class App {
  protected title = 'shell';
}