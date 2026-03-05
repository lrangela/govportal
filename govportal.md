This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.editorconfig
.github/workflows/ci.yml
.github/workflows/deploy.yml
.gitignore
.prettierignore
.prettierrc
apps/legacy/eslint.config.mjs
apps/legacy/federation.config.js
apps/legacy/project.json
apps/legacy/public/favicon.ico
apps/legacy/src/app/app.config.ts
apps/legacy/src/app/app.html
apps/legacy/src/app/app.routes.ts
apps/legacy/src/app/app.scss
apps/legacy/src/app/app.spec.ts
apps/legacy/src/app/app.ts
apps/legacy/src/app/applications/applications-list.page.ts
apps/legacy/src/app/citizens/citizen-detail.page.ts
apps/legacy/src/app/citizens/citizens-list.page.ts
apps/legacy/src/app/permits/permits-list.page.ts
apps/legacy/src/bootstrap.ts
apps/legacy/src/index.html
apps/legacy/src/main.ts
apps/legacy/src/styles.scss
apps/legacy/src/test-setup.ts
apps/legacy/tsconfig.app.json
apps/legacy/tsconfig.json
apps/legacy/tsconfig.spec.json
apps/legacy/vite.config.mts
apps/modern-e2e/eslint.config.mjs
apps/modern-e2e/playwright.config.ts
apps/modern-e2e/project.json
apps/modern-e2e/src/example.spec.ts
apps/modern-e2e/tsconfig.json
apps/modern/eslint.config.mjs
apps/modern/federation.config.js
apps/modern/project.json
apps/modern/public/favicon.ico
apps/modern/src/app/app.config.ts
apps/modern/src/app/app.html
apps/modern/src/app/app.routes.ts
apps/modern/src/app/app.scss
apps/modern/src/app/app.spec.ts
apps/modern/src/app/app.ts
apps/modern/src/app/applications/applications-list.ts
apps/modern/src/app/citizens/citizen-detail.ts
apps/modern/src/app/citizens/citizens-list.ts
apps/modern/src/app/permits/permits-list.ts
apps/modern/src/bootstrap.ts
apps/modern/src/index.html
apps/modern/src/main.ts
apps/modern/src/styles.scss
apps/modern/src/test-setup.ts
apps/modern/tsconfig.app.json
apps/modern/tsconfig.json
apps/modern/tsconfig.spec.json
apps/modern/vite.config.mts
apps/shell-e2e/eslint.config.mjs
apps/shell-e2e/playwright.config.ts
apps/shell-e2e/project.json
apps/shell-e2e/src/mfes-navigation.spec.ts
apps/shell-e2e/tsconfig.json
apps/shell/eslint.config.mjs
apps/shell/federation.config.js
apps/shell/project.json
apps/shell/public/favicon.ico
apps/shell/public/federation.manifest.json
apps/shell/src/app/app.config.ts
apps/shell/src/app/app.routes.ts
apps/shell/src/app/app.spec.ts
apps/shell/src/app/app.ts
apps/shell/src/bootstrap.ts
apps/shell/src/index.html
apps/shell/src/main.ts
apps/shell/src/styles.scss
apps/shell/src/test-setup.ts
apps/shell/tsconfig.app.json
apps/shell/tsconfig.json
apps/shell/tsconfig.spec.json
apps/shell/vite.config.mts
docs/adr/0001-data-access-anti-corruption-layer.md
docs/adr/0002-project-evolution-and-architectural-decisions.md
eslint.config.mjs
libs/core/eslint.config.mjs
libs/core/http/eslint.config.mjs
libs/core/http/project.json
libs/core/http/README.md
libs/core/http/src/index.ts
libs/core/http/src/lib/api-base-url.interceptor.ts
libs/core/http/src/lib/api-base-url.token.ts
libs/core/http/src/lib/http.ts
libs/core/http/tsconfig.json
libs/core/http/tsconfig.lib.json
libs/core/project.json
libs/core/README.md
libs/core/src/index.ts
libs/core/src/lib/core.ts
libs/core/src/lib/ui/page-header.component.ts
libs/core/tsconfig.json
libs/core/tsconfig.lib.json
libs/data-access/eslint.config.mjs
libs/data-access/gov/eslint.config.mjs
libs/data-access/gov/project.json
libs/data-access/gov/README.md
libs/data-access/gov/src/index.ts
libs/data-access/gov/src/lib/applications.store.ts
libs/data-access/gov/src/lib/citizens.store.ts
libs/data-access/gov/src/lib/gov.ts
libs/data-access/gov/src/lib/permits.store.ts
libs/data-access/gov/tsconfig.json
libs/data-access/gov/tsconfig.lib.json
libs/data-access/legacy/eslint.config.mjs
libs/data-access/legacy/project.json
libs/data-access/legacy/README.md
libs/data-access/legacy/src/index.ts
libs/data-access/legacy/src/lib/applications.facade.ts
libs/data-access/legacy/src/lib/citizens.facade.ts
libs/data-access/legacy/src/lib/legacy-application.dto.ts
libs/data-access/legacy/src/lib/legacy-application.mapper.spec.ts
libs/data-access/legacy/src/lib/legacy-application.mapper.ts
libs/data-access/legacy/src/lib/legacy-applications-api.client.ts
libs/data-access/legacy/src/lib/legacy-citizen.dto.ts
libs/data-access/legacy/src/lib/legacy-citizen.mapper.spec.ts
libs/data-access/legacy/src/lib/legacy-citizen.mapper.ts
libs/data-access/legacy/src/lib/legacy-citizens-api.client.ts
libs/data-access/legacy/src/lib/legacy-permit.dto.ts
libs/data-access/legacy/src/lib/legacy-permit.mapper.spec.ts
libs/data-access/legacy/src/lib/legacy-permit.mapper.ts
libs/data-access/legacy/src/lib/legacy-permits-api.client.ts
libs/data-access/legacy/src/lib/legacy.ts
libs/data-access/legacy/src/lib/permits.facade.ts
libs/data-access/legacy/tsconfig.json
libs/data-access/legacy/tsconfig.lib.json
libs/data-access/legacy/tsconfig.spec.json
libs/data-access/legacy/vitest.config.mts
libs/data-access/project.container.json
libs/data-access/README.md
libs/data-access/src/index.ts
libs/data-access/src/lib/data-access.ts
libs/data-access/tsconfig.json
libs/data-access/tsconfig.lib.json
libs/eslint.config.mjs
libs/project.json
libs/README.md
libs/src/index.ts
libs/src/lib/application.model.ts
libs/src/lib/citizen.model.ts
libs/src/lib/libs.ts
libs/src/lib/permit.model.ts
libs/tsconfig.json
libs/tsconfig.lib.json
nx.json
package.json
proxy.conf.json
README.md
tools/mock-api/db.json
tools/mock-api/generate-db.ts
tsconfig.base.json
vitest.workspace.ts
```

# Files

## File: .github/workflows/deploy.yml
````yaml
name: Deploy Pages

on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]
    branches: [main]

concurrency:
  group: pages
  cancel-in-progress: true

permissions:
  contents: read
  pages: write
  id-token: write

env:
  CI: true
  NX_DAEMON: false
  FORCE_COLOR: 1

jobs:
  deploy:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Checkout workflow SHA
        uses: actions/checkout@v4
        with:
          ref: ${{ github.event.workflow_run.head_sha }}
          fetch-depth: 0

      - name: Setup Node LTS
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Restore Nx cache
        uses: actions/cache@v4
        with:
          path: .nx/cache
          key: nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-pages
          restore-keys: |
            nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-
            nx-${{ runner.os }}-

      - name: Install dependencies
        run: npm ci --prefer-offline --no-audit

      - name: Build shell and remotes for Pages
        run: npx nx run-many -t build --projects=shell,legacy-remote,modern-remote --configuration=production --parallel=3

      - name: Stage Pages artifact
        shell: bash
        env:
          REPO_NAME: ${{ github.event.repository.name }}
        run: |
          set -euxo pipefail

          rm -rf out
          mkdir -p out/legacy out/modern

          cp -R dist/apps/shell/browser/. out/
          cp -R dist/apps/legacy/browser/. out/legacy/
          cp -R dist/apps/modern/browser/. out/modern/

          node <<'NODE'
          const fs = require('fs');

          const repoName = process.env.REPO_NAME;

          function patchBaseHref(filePath, baseHref) {
            if (!fs.existsSync(filePath)) return;
            let html = fs.readFileSync(filePath, 'utf8');

            if (html.includes('<base href="/">')) {
              html = html.replace('<base href="/">', `<base href="${baseHref}">`);
            } else if (!html.includes('<base href=')) {
              html = html.replace('<head>', `<head>\n  <base href="${baseHref}">`);
            }

            fs.writeFileSync(filePath, html);
          }

          const manifestPath = 'out/federation.manifest.json';
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          manifest['legacy-remote'] = './legacy/remoteEntry.json';
          manifest['modern-remote'] = './modern/remoteEntry.json';
          fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

          patchBaseHref('out/index.html', `/${repoName}/`);
          patchBaseHref('out/legacy/index.html', `/${repoName}/legacy/`);
          patchBaseHref('out/modern/index.html', `/${repoName}/modern/`);
          NODE

      - name: Debug staged output
        shell: bash
        run: |
          set +e
          echo "Staged files:"
          find out -maxdepth 3 -type f | sort || true
          echo
          echo "Manifest:"
          cat out/federation.manifest.json || true
          echo
          echo "Shell index head:"
          sed -n '1,40p' out/index.html || true

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
````

## File: apps/legacy/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: apps/legacy/federation.config.js
````javascript
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'legacy-remote',



  exposes: {
    './Component': './apps/legacy/src/app/app.ts',
    './Routes': './apps/legacy/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // Forzar el secondary entry point como singleton para evitar el Token Mismatch de rxResource
    '@angular/core/rxjs-interop': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: true,
    }
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});
````

## File: apps/legacy/project.json
````json
{
  "name": "legacy-remote",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "prefix": "app",
  "sourceRoot": "apps/legacy/src",
  "tags": [],
  "targets": {
    "build": {
      "executor": "@angular-architects/native-federation:build",
      "options": {},
      "configurations": {
        "production": {
          "target": "legacy-remote:esbuild:production"
        },
        "development": {
          "target": "legacy-remote:esbuild:development",
          "dev": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "executor": "@angular-architects/native-federation:build",
      "options": {
        "target": "legacy-remote:serve-original:development",
        "rebuildDelay": 500,
        "dev": true,
        "cacheExternalArtifacts": false,
        "port": 4201
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    },
    "test": {
      "executor": "@nx/vitest:test",
      "outputs": [
        "{options.reportsDirectory}"
      ],
      "options": {
        "reportsDirectory": "../../coverage/apps/legacy"
      }
    },
    "serve-static": {
      "continuous": true,
      "executor": "@nx/web:file-server",
      "options": {
        "buildTarget": "legacy-remote:build",
        "port": 4200,
        "staticFilePath": "dist/apps/legacy/browser",
        "spa": true
      }
    },
    "esbuild": {
      "executor": "@angular/build:application",
      "outputs": [
        "{options.outputPath}"
      ],
      "options": {
        "outputPath": "dist/apps/legacy",
        "browser": "apps/legacy/src/main.ts",
        "tsConfig": "apps/legacy/tsconfig.app.json",
        "inlineStyleLanguage": "scss",
        "assets": [
          {
            "glob": "**/*",
            "input": "apps/legacy/public"
          }
        ],
        "styles": [
          "apps/legacy/src/styles.scss"
        ],
        "polyfills": [
          "es-module-shims"
        ]
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "4kb",
              "maximumError": "8kb"
            }
          ],
          "outputHashing": "all"
        },
        "development": {
          "optimization": false,
          "extractLicenses": false,
          "sourceMap": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve-original": {
      "continuous": true,
      "executor": "@angular/build:dev-server",
      "configurations": {
        "production": {
          "buildTarget": "legacy-remote:esbuild:production"
        },
        "development": {
          "buildTarget": "legacy-remote:esbuild:development"
        }
      },
      "defaultConfiguration": "development",
      "options": {
        "port": 4201,
        "proxyConfig": "proxy.conf.json"
      }
    }
  }
}
````

## File: apps/legacy/src/app/app.config.ts
````typescript
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_BASE_URL, apiBaseUrlInterceptor } from '@gov/core/http';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    provideRouter(appRoutes),
    { provide: API_BASE_URL, useValue: '' },
    provideHttpClient(withInterceptors([apiBaseUrlInterceptor])),
  ],
};
````

## File: apps/legacy/src/app/app.html
````html
<router-outlet></router-outlet>
````

## File: apps/legacy/src/app/app.routes.ts
````typescript
import { Route } from '@angular/router';
import { CitizensListPage } from './citizens/citizens-list.page';

export const legacyRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'citizens' },
    { path: 'citizens', component: CitizensListPage },
    {
        path: 'citizens/:id',
        loadComponent: () =>
            import('./citizens/citizen-detail.page').then((m) => m.CitizenDetailPage),
    },
    {
        path: 'permits',
        loadComponent: () =>
            import('./permits/permits-list.page').then((m) => m.PermitsPage),
    },
    {
        path: 'applications',
        loadComponent: () =>
            import('./applications/applications-list.page').then(
                (m) => m.ApplicationsListPage
            ),
    },
];

export const appRoutes: Route[] = [
    {
        path: '',
        children: legacyRoutes
    }
];
````

## File: apps/legacy/src/app/app.scss
````scss

````

## File: apps/legacy/src/app/app.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NxWelcome } from './nx-welcome';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, NxWelcome],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome legacy-remote',
    );
  });
});
````

## File: apps/legacy/src/app/app.ts
````typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'legacy-remote';
}
````

## File: apps/legacy/src/app/applications/applications-list.page.ts
````typescript
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
````

## File: apps/legacy/src/app/citizens/citizen-detail.page.ts
````typescript
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CitizensFacade, PermitsFacade, ApplicationsFacade } from '@gov/data-access/legacy';

@Component({
    selector: 'app-citizen-detail-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink],
    template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <a routerLink="..">Back to citizens</a>

      <header>
        <h2 style="margin:0;">Citizen detail</h2>
        <p style="margin:4px 0 0 0; color:#555;">Id: {{ citizenId() }}</p>
      </header>

      <h3 style="margin:0;">Permits relacionados</h3>
      @if (permitsFacade.isLoading()) { <p>Loading permits...</p> }
      @if (!permitsFacade.isLoading() && relatedPermits().length === 0) { <p>No permits.</p> }

      @if (!permitsFacade.isLoading() && relatedPermits().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Id</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Type</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
            </tr>
          </thead>
          <tbody>
            @for (p of relatedPermits(); track p.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ p.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ p.type }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ p.status }}</td>
              </tr>
            }
          </tbody>
        </table>
      }

      <h3 style="margin:0;">Applications relacionadas</h3>
      @if (appsFacade.isLoading()) { <p>Loading applications...</p> }
      @if (!appsFacade.isLoading() && relatedApplications().length === 0) { <p>No applications.</p> }

      @if (!appsFacade.isLoading() && relatedApplications().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Id</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Type</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
            </tr>
          </thead>
          <tbody>
            @for (a of relatedApplications(); track a.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ a.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ a.status }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ a.region }}</td>
              </tr>
            }
          </tbody>
        </table>
      }
    </section>
  `,
})
export class CitizenDetailPage {
    private readonly route = inject(ActivatedRoute);

    // Cargamos todo con el patrón legacy (MVP)
    readonly citizensFacade = inject(CitizensFacade);
    readonly permitsFacade = inject(PermitsFacade);
    readonly appsFacade = inject(ApplicationsFacade);

    readonly citizenId = computed(() => this.route.snapshot.paramMap.get('id') ?? '');

    readonly relatedPermits = computed(() =>
        this.permitsFacade.permits().filter((p) => p.citizenId === this.citizenId())
    );

    readonly relatedApplications = computed(() =>
        this.appsFacade.applications().filter((a) => a.citizenId === this.citizenId())
    );
}
````

## File: apps/legacy/src/app/citizens/citizens-list.page.ts
````typescript
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
````

## File: apps/legacy/src/app/permits/permits-list.page.ts
````typescript
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PermitsFacade } from '@gov/data-access/legacy';
import { PageHeaderComponent } from '@gov/core';

@Component({
  selector: 'app-permits-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <app-page-header title="Permits" [source]="source()" (sourceChange)="onSourceChange($event)" />

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

      @if (facade.isLoading()) {
        <p>Loading...</p>
      }

      @if (facade.error()) {
        <p style="color:#b00020;">
          Error loading permits.
          <button type="button" (click)="facade.refresh()" style="margin-left:8px;">Retry</button>
        </p>
      }

      @if (facade.isEmpty()) {
        <p>No results.</p>
      }

      @if (!facade.isLoading() && !facade.error() && facade.permits().length) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">ID</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Citizen</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Type</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Region</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Created</th>
            </tr>
          </thead>
          <tbody>
            @for (permit of facade.permits(); track permit.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  <a [routerLink]="['/legacy/citizens', permit.citizenId]" style="color: #0066cc; text-decoration: underline;">{{ permit.citizenId }}</a>
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.type }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.status }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.region }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.createdAt }}</td>
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
export class PermitsPage {
  readonly facade = inject(PermitsFacade);
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
````

## File: apps/legacy/src/bootstrap.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
````

## File: apps/legacy/src/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>legacy-remote</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
````

## File: apps/legacy/src/main.ts
````typescript
import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
````

## File: apps/legacy/src/styles.scss
````scss
/* You can add global styles to this file, and also import other style files */
````

## File: apps/legacy/src/test-setup.ts
````typescript
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed();
````

## File: apps/legacy/tsconfig.app.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts",
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/test-setup.ts"
  ]
}
````

## File: apps/legacy/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: apps/legacy/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ]
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "files": ["src/test-setup.ts"]
}
````

## File: apps/legacy/vite.config.mts
````typescript
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/legacy',
  plugins: [angular(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  // Uncomment this if you are using workers.
  // worker: {
  //   plugins: () => [ nxViteTsPaths() ],
  // },
  test: {
    name: 'legacy-remote',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/legacy',
      provider: 'v8' as const,
    },
  },
}));
````

## File: apps/modern-e2e/eslint.config.mjs
````javascript
import playwright from 'eslint-plugin-playwright';
import baseConfig from '../../eslint.config.mjs';

export default [
  playwright.configs['flat/recommended'],
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: apps/modern-e2e/playwright.config.ts
````typescript
import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npx nx run modern-remote:serve',
    url: 'http://localhost:4200',
    reuseExistingServer: true,
    cwd: workspaceRoot,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Uncomment for mobile browsers support
    /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */

    // Uncomment for branded browsers
    /* {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    } */
  ],
});
````

## File: apps/modern-e2e/project.json
````json
{
  "name": "modern-remote-e2e",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "sourceRoot": "apps/modern-e2e/src",
  "implicitDependencies": ["modern-remote"],
  "// targets": "to see all targets run: nx show project modern-remote-e2e --web",
  "targets": {}
}
````

## File: apps/modern-e2e/src/example.spec.ts
````typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
````

## File: apps/modern-e2e/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "allowJs": true,
    "outDir": "../../dist/out-tsc",
    "sourceMap": false,
    "module": "commonjs",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "**/*.ts",
    "**/*.js",
    "playwright.config.ts",
    "src/**/*.spec.ts",
    "src/**/*.spec.js",
    "src/**/*.test.ts",
    "src/**/*.test.js",
    "src/**/*.d.ts"
  ]
}
````

## File: apps/modern/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: apps/modern/federation.config.js
````javascript
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'modern-remote',



  exposes: {
    './Component': './apps/modern/src/app/app.ts',
    './Routes': './apps/modern/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // Forzar el secondary entry point como singleton para evitar el Token Mismatch de rxResource
    '@angular/core/rxjs-interop': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: true,
    }
  },

  skip: [
    '@ngrx/signals',
    '@ngrx/signals/rxjs-interop',
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});
````

## File: apps/modern/project.json
````json
{
  "name": "modern-remote",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "prefix": "app",
  "sourceRoot": "apps/modern/src",
  "tags": [],
  "targets": {
    "build": {
      "executor": "@angular-architects/native-federation:build",
      "options": {},
      "configurations": {
        "production": {
          "target": "modern-remote:esbuild:production"
        },
        "development": {
          "target": "modern-remote:esbuild:development",
          "dev": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "executor": "@angular-architects/native-federation:build",
      "options": {
        "target": "modern-remote:serve-original:development",
        "rebuildDelay": 500,
        "dev": true,
        "cacheExternalArtifacts": false,
        "port": 0
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    },
    "test": {
      "executor": "@nx/vitest:test",
      "outputs": [
        "{options.reportsDirectory}"
      ],
      "options": {
        "reportsDirectory": "../../coverage/apps/modern"
      }
    },
    "serve-static": {
      "continuous": true,
      "executor": "@nx/web:file-server",
      "options": {
        "buildTarget": "modern-remote:build",
        "port": 4200,
        "staticFilePath": "dist/apps/modern/browser",
        "spa": true
      }
    },
    "esbuild": {
      "executor": "@angular/build:application",
      "outputs": [
        "{options.outputPath}"
      ],
      "options": {
        "outputPath": "dist/apps/modern",
        "browser": "apps/modern/src/main.ts",
        "tsConfig": "apps/modern/tsconfig.app.json",
        "inlineStyleLanguage": "scss",
        "assets": [
          {
            "glob": "**/*",
            "input": "apps/modern/public"
          }
        ],
        "styles": [
          "apps/modern/src/styles.scss"
        ],
        "polyfills": [
          "es-module-shims"
        ]
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "4kb",
              "maximumError": "8kb"
            }
          ],
          "outputHashing": "all"
        },
        "development": {
          "optimization": false,
          "extractLicenses": false,
          "sourceMap": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve-original": {
      "continuous": true,
      "executor": "@angular/build:dev-server",
      "configurations": {
        "production": {
          "buildTarget": "modern-remote:esbuild:production"
        },
        "development": {
          "buildTarget": "modern-remote:esbuild:development"
        }
      },
      "defaultConfiguration": "development",
      "options": {
        "port": 4202
      }
    }
  }
}
````

## File: apps/modern/src/app/app.config.ts
````typescript
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { API_BASE_URL } from '@gov/core/http';
import { apiBaseUrlInterceptor } from '@gov/core/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // DX: Consistencia con el resto del monorepo
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),

    // Configuración para el consumo de la API mock
    { provide: API_BASE_URL, useValue: '' },
    provideHttpClient(withInterceptors([apiBaseUrlInterceptor])),
  ],
};
````

## File: apps/modern/src/app/app.html
````html
<router-outlet></router-outlet>
````

## File: apps/modern/src/app/app.routes.ts
````typescript
import { Route } from '@angular/router';

export const modernRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'citizens' },
    {
        path: 'citizens',
        loadComponent: () =>
            import('./citizens/citizens-list').then((m) => m.CitizensList),
    },
    {
        path: 'citizens/:id',
        loadComponent: () =>
            import('./citizens/citizen-detail').then((m) => m.CitizenDetail),
    },
    {
        path: 'permits',
        loadComponent: () =>
            import('./permits/permits-list').then((m) => m.PermitsList),
    },
    {
        path: 'applications',
        loadComponent: () =>
            import('./applications/applications-list').then((m) => m.ApplicationsList),
    },
];

export const appRoutes: Route[] = [
    {
        path: '',
        children: modernRoutes
    }
];
````

## File: apps/modern/src/app/app.scss
````scss

````

## File: apps/modern/src/app/app.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NxWelcome } from './nx-welcome';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, NxWelcome],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome modern-remote',
    );
  });
});
````

## File: apps/modern/src/app/app.ts
````typescript
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'modern-remote';
}
````

## File: apps/modern/src/app/applications/applications-list.ts
````typescript
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
````

## File: apps/modern/src/app/citizens/citizen-detail.ts
````typescript
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
````

## File: apps/modern/src/app/citizens/citizens-list.ts
````typescript
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CitizensStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';


@Component({
  selector: 'app-citizens-list',
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <app-page-header title="Citizens (Modern - NgRx Signals)" [source]="source()" (sourceChange)="onSourceChange($event)" />


      <div style="display:flex; gap: 8px; align-items:center;">
        <input
          type="search"
          placeholder="Search by name or document..."
          [value]="store.q()"
          (input)="onSearch($event)"
          style="flex:1; padding: 8px;"
        />
        <button type="button" (click)="store.loadAll()" style="padding: 8px 12px;">
          Refresh
        </button>
      </div>

      @if (store.isLoading()) {
        <p>Loading citizens...</p>
      }

      @if (store.error()) {
        <p style="color:#b00020;">{{ store.error() }}</p>
      }

      @if (!store.isLoading() && !store.error()) {
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Name</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Document</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
            </tr>
          </thead>
          <tbody>
            @for (c of store.filteredItems(); track c.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  <a [routerLink]="[c.id]">{{ c.fullName }}</a>
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ c.documentNumber }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                   <span [style.color]="c.status === 'active' ? 'green' : 'red'">{{ c.status }}</span>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="3" style="padding: 16px; text-align:center;">No results found.</td></tr>
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
export class CitizensList implements OnInit {
  readonly store = inject(CitizensStore);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute)

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
````

## File: apps/modern/src/app/permits/permits-list.ts
````typescript
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PermitsStore } from '@gov/data-access/gov';
import { PageHeaderComponent } from '@gov/core';


@Component({
  selector: 'app-permits-list',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <section style="padding: 16px; display: grid; gap: 12px; max-width: 960px;">
      <app-page-header title="Permits (Modern - NgRx Signals)" [source]="source()" (sourceChange)="onSourceChange($event)" />


      <div style="display:flex; gap: 8px; align-items:center;">
        <input
          type="search"
          placeholder="Search by ID, citizen, type, region..."
          [value]="store.q()"
          (input)="onSearch($event)"
          style="flex:1; padding: 8px;"
        />
        <button type="button" (click)="store.loadAll()" style="padding: 8px 12px;">
          Refresh
        </button>
      </div>

      @if (store.isLoading()) {
        <p>Loading permits...</p>
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
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Type</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Status</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Region</th>
              <th style="text-align:left; border-bottom: 1px solid #ddd; padding: 8px;">Created</th>
            </tr>
          </thead>
          <tbody>
            @for (permit of store.filteredItems(); track permit.id) {
              <tr>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.id }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">
                  <a [routerLink]="['/modern/citizens', permit.citizenId]" style="color: #0066cc; text-decoration: underline;">{{ permit.citizenId }}</a>
                </td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.type }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.status }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.region }}</td>
                <td style="border-bottom: 1px solid #f0f0f0; padding: 8px;">{{ permit.createdAt }}</td>
              </tr>
            } @empty {
              <tr><td colspan="6" style="padding: 16px; text-align:center;">No results found.</td></tr>
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
export class PermitsList implements OnInit {
  readonly store = inject(PermitsStore);
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
````

## File: apps/modern/src/bootstrap.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
````

## File: apps/modern/src/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>modern-remote</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
````

## File: apps/modern/src/main.ts
````typescript
import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
````

## File: apps/modern/src/styles.scss
````scss
/* You can add global styles to this file, and also import other style files */
````

## File: apps/modern/src/test-setup.ts
````typescript
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed();
````

## File: apps/modern/tsconfig.app.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts",
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/test-setup.ts"
  ]
}
````

## File: apps/modern/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: apps/modern/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ]
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "files": ["src/test-setup.ts"]
}
````

## File: apps/modern/vite.config.mts
````typescript
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/modern',
  plugins: [angular(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  // Uncomment this if you are using workers.
  // worker: {
  //   plugins: () => [ nxViteTsPaths() ],
  // },
  test: {
    name: 'modern-remote',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/modern',
      provider: 'v8' as const,
    },
  },
}));
````

## File: apps/shell-e2e/eslint.config.mjs
````javascript
import playwright from 'eslint-plugin-playwright';
import baseConfig from '../../eslint.config.mjs';

export default [
  playwright.configs['flat/recommended'],
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: apps/shell-e2e/playwright.config.ts
````typescript
import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npx nx run shell:serve',
  //   url: 'http://localhost:4200',
  //   reuseExistingServer: true,
  //   cwd: workspaceRoot,
  // },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Uncomment for mobile browsers support
    /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */

    // Uncomment for branded browsers
    /* {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    } */
  ],
});
````

## File: apps/shell-e2e/project.json
````json
{
  "name": "shell-e2e",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "sourceRoot": "apps/shell-e2e/src",
  "implicitDependencies": ["shell"],
  "// targets": "to see all targets run: nx show project shell-e2e --web",
  "targets": {}
}
````

## File: apps/shell-e2e/src/mfes-navigation.spec.ts
````typescript
import { test, expect } from '@playwright/test';

test.describe('MFE Navigation and Source Toggle', () => {

    test('Shell routes correctly to Legacy and Modern MFEs', async ({ page }) => {
        // Validar carga de Legacy
        await page.goto('/legacy/citizens');
        await expect(page.getByRole('heading', { name: 'Citizens', exact: true })).toBeVisible();

        // Validar carga de Modern
        await page.goto('/modern/citizens');
        await expect(page.getByRole('heading', { name: 'Citizens (Modern - NgRx Signals)' })).toBeVisible();
    });

    test('Toggle Source changes architecture maintaining sub-path and query params', async ({ page }) => {
        // 1. Navegar a Legacy con un deep-link (query param 'q')
        await page.goto('/legacy/citizens?q=Mario');
        await expect(page.getByRole('heading', { name: 'Citizens', exact: true })).toBeVisible();

        // 2. Cambiar el dropdown "Source" a "Modern"
        await page.getByLabel('Source').selectOption('modern'); // <-- CAMBIO AQUÍ

        // 3. Validar que la URL cambió a la arquitectura moderna pero mantuvo la ruta y el parámetro
        await page.waitForURL('**/modern/citizens?q=Mario');

        // 4. Validar que la vista de NgRx Signals se renderizó
        await expect(page.getByRole('heading', { name: 'Citizens (Modern - NgRx Signals)' })).toBeVisible();
    });
});
````

## File: apps/shell-e2e/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "allowJs": true,
    "outDir": "../../dist/out-tsc",
    "sourceMap": false,
    "module": "commonjs",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "**/*.ts",
    "**/*.js",
    "playwright.config.ts",
    "src/**/*.spec.ts",
    "src/**/*.spec.js",
    "src/**/*.test.ts",
    "src/**/*.test.js",
    "src/**/*.d.ts"
  ]
}
````

## File: apps/shell/eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
````

## File: apps/shell/federation.config.js
````javascript
const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'shell',


  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // Forzar el secondary entry point como singleton para evitar el Token Mismatch de rxResource
    '@angular/core/rxjs-interop': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: true,
    }
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});
````

## File: apps/shell/project.json
````json
{
  "name": "shell",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "application",
  "prefix": "app",
  "sourceRoot": "apps/shell/src",
  "tags": [],
  "targets": {
    "build": {
      "executor": "@angular-architects/native-federation:build",
      "options": {},
      "configurations": {
        "production": {
          "target": "shell:esbuild:production"
        },
        "development": {
          "target": "shell:esbuild:development",
          "dev": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve": {
      "executor": "@angular-architects/native-federation:build",
      "options": {
        "target": "shell:serve-original:development",
        "rebuildDelay": 500,
        "dev": true,
        "cacheExternalArtifacts": false,
        "port": 0,
        "proxyConfig": "proxy.conf.json"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint"
    },
    "test": {
      "executor": "@nx/vitest:test",
      "outputs": [
        "{options.reportsDirectory}"
      ],
      "options": {
        "reportsDirectory": "../../coverage/apps/shell"
      }
    },
    "serve-static": {
      "continuous": true,
      "executor": "@nx/web:file-server",
      "options": {
        "buildTarget": "shell:build",
        "port": 4200,
        "staticFilePath": "dist/apps/shell/browser",
        "spa": true
      }
    },
    "esbuild": {
      "executor": "@angular/build:application",
      "outputs": [
        "{options.outputPath}"
      ],
      "options": {
        "outputPath": "dist/apps/shell",
        "browser": "apps/shell/src/main.ts",
        "tsConfig": "apps/shell/tsconfig.app.json",
        "inlineStyleLanguage": "scss",
        "assets": [
          {
            "glob": "**/*",
            "input": "apps/shell/public"
          }
        ],
        "styles": [
          "apps/shell/src/styles.scss"
        ],
        "polyfills": [
          "es-module-shims"
        ]
      },
      "configurations": {
        "production": {
          "budgets": [
            {
              "type": "initial",
              "maximumWarning": "500kb",
              "maximumError": "1mb"
            },
            {
              "type": "anyComponentStyle",
              "maximumWarning": "4kb",
              "maximumError": "8kb"
            }
          ],
          "outputHashing": "all"
        },
        "development": {
          "optimization": false,
          "extractLicenses": false,
          "sourceMap": true
        }
      },
      "defaultConfiguration": "production"
    },
    "serve-original": {
      "continuous": true,
      "executor": "@angular/build:dev-server",
      "configurations": {
        "production": {
          "buildTarget": "shell:esbuild:production"
        },
        "development": {
          "buildTarget": "shell:esbuild:development"
        }
      },
      "defaultConfiguration": "development",
      "options": {
        "port": 4200,
        "proxyConfig": "proxy.conf.json"
      }
    }
  }
}
````

## File: apps/shell/public/federation.manifest.json
````json
{
	"legacy-remote": "http://localhost:4201/remoteEntry.json",
	"modern-remote": "http://localhost:4202/remoteEntry.json"
}
````

## File: apps/shell/src/app/app.config.ts
````typescript
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_BASE_URL } from '@gov/core/http';
import { apiBaseUrlInterceptor } from '@gov/core/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Zoneless (sin ZoneJS). Luego ajustamos polyfills/test si aplica.
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),

    // HttpClient moderno (interceptors funcionales los agregamos en el PASO 4)
    { provide: API_BASE_URL, useValue: '' },
    provideHttpClient(withInterceptors([apiBaseUrlInterceptor])),
  ],
};
````

## File: apps/shell/src/app/app.routes.ts
````typescript
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'legacy',
        loadChildren: () =>
            loadRemoteModule('legacy-remote', './Routes').then((m) => m.appRoutes),
    },
    {
        path: 'modern',
        loadChildren: () =>
            loadRemoteModule('modern-remote', './Routes').then((m) => m.appRoutes),
    },
    // Redirección por defecto: si entran a la raíz, los mandamos a legacy
    {
        path: '',
        redirectTo: 'legacy',
        pathMatch: 'full'
    }
];
````

## File: apps/shell/src/app/app.spec.ts
````typescript
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NxWelcome } from './nx-welcome';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, NxWelcome],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome shell',
    );
  });
});
````

## File: apps/shell/src/app/app.ts
````typescript
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
````

## File: apps/shell/src/bootstrap.ts
````typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
````

## File: apps/shell/src/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>shell</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
````

## File: apps/shell/src/main.ts
````typescript
import { initFederation } from '@angular-architects/native-federation';

initFederation('federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
````

## File: apps/shell/src/styles.scss
````scss
/* You can add global styles to this file, and also import other style files */
````

## File: apps/shell/src/test-setup.ts
````typescript
import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';

setupTestBed();
````

## File: apps/shell/tsconfig.app.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": []
  },
  "include": ["src/**/*.ts"],
  "exclude": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts",
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/test-setup.ts"
  ]
}
````

## File: apps/shell/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "isolatedModules": true,
    "target": "es2022",
    "moduleResolution": "bundler",
    "emitDecoratorMetadata": false,
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: apps/shell/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ]
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ],
  "files": ["src/test-setup.ts"]
}
````

## File: apps/shell/vite.config.mts
````typescript
/// <reference types='vitest' />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/shell',
  plugins: [angular(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  // Uncomment this if you are using workers.
  // worker: {
  //   plugins: () => [ nxViteTsPaths() ],
  // },
  test: {
    name: 'shell',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/shell',
      provider: 'v8' as const,
    },
  },
}));
````

## File: docs/adr/0001-data-access-anti-corruption-layer.md
````markdown
# ADR 0001: Data-access + Anti-corruption layer

## Status

Accepted

## Context

El monorepo migra un portal legacy hacia una arquitectura moderna. La API/mocks legacy expone shapes y contratos inestables.
Necesitamos evitar que esos contratos “contaminen” el dominio y la UI, y permitir una migración gradual (legacy → modern) sin reescribir toda la app.

## Decision

Se adopta una arquitectura por capas con separación explícita:

- `@gov/domain`
  - Modelos de dominio (ej. `Citizen`) y tipos compartidos.
  - No depende de Angular ni de HTTP.

- `@gov/data-access/legacy`
  - DTOs legacy (ej. `LegacyCitizenDto`)
  - Clients HTTP (ej. `LegacyCitizensApiClient`)
  - Mappers/anti-corruption layer (ej. `mapLegacyCitizen(dto): Citizen`)
  - Facades orientadas a UI con estado moderno (signals + `rxResource`), incluyendo loading/error/retry.

- `@gov/data-access/gov`
  - DTOs y clients del backend moderno (futuro).
  - Debe exponer el mismo dominio hacia arriba para permitir toggles/flags.

- `@gov/core/http`
  - Cross-cutting concerns de HTTP: `API_BASE_URL` token e interceptors funcionales.

La UI solo consume `Citizen` (dominio) a través de facades; nunca DTOs legacy.

## Consequences

- La UI queda estable aunque cambien los DTOs del backend legacy.
- Migración incremental: se puede alternar entre `legacy` y `modern` con un flag/toggle sin reescribir pantallas.
- Testing más simple:
  - mappers/contratos se testean con unit tests rápidos (Vitest).
  - E2E valida el flujo real con la mock API determinista.

## Notes

Actualmente el backend legacy no soporta `_page/_limit/q`; por lo tanto la paginación/búsqueda se realiza en frontend para el MVP.
Cuando exista endpoint paginado real, el cambio se limita al `ApiClient` sin tocar UI.
````

## File: docs/adr/0002-project-evolution-and-architectural-decisions.md
````markdown
# ADR 0002: Evolucion del proyecto y decisiones arquitectonicas

## Status

Accepted

## Context

El repositorio solo expone un commit (`Initial commit`), por lo que no existe historial suficiente para reconstruir una cronologia exacta de cambios.

Por eso esta ADR no intenta narrar una historia Git inexistente. En cambio, documenta la arquitectura vigente confirmada en el workspace Nx actual.

Proyectos activos verificados:

- aplicaciones: `shell`, `legacy-remote`, `modern-remote`;
- end-to-end: `shell-e2e`, `modern-remote-e2e`;
- librerias: `domain`, `core`, `http`, `legacy`, `gov`.

El estado actual del monorepo muestra decisiones tecnicas claras:

- el punto de entrada es `shell`;
- la experiencia de negocio se divide entre `legacy-remote` y `modern-remote`;
- el dominio esta aislado en librerias compartidas;
- el acceso a datos legacy esta encapsulado en facades, clients y mappers;
- la variante moderna usa `@ngrx/signals`;
- el entorno local y las pruebas se apoyan en un mock server determinista.

Esta ADR documenta esas decisiones como fotografia oficial del proyecto actual.

## Decision

Se formalizan las siguientes decisiones del proyecto.

### 1. Monorepo Nx como base organizacional

El proyecto se organiza como un workspace Nx para separar aplicaciones, librerias compartidas, pruebas end-to-end y tooling.

Cambios visibles:

- `apps/shell`, `apps/legacy` y `apps/modern` son las aplicaciones registradas en Nx.
- `apps/shell-e2e` y `apps/modern-e2e` cubren la capa E2E.
- `libs/core`, `libs/core/http`, `libs/data-access/legacy`, `libs/data-access/gov` y `libs/src` centralizan piezas reutilizables.
- `nx.json` y `.github/workflows/ci.yml` estandarizan lint, test y build sobre el workspace.

Decision:

- mantener una estructura por apps y libs para permitir migracion incremental, aislamiento de responsabilidades y ejecucion selectiva con Nx;
- ejecutar CI con `npx nx run-many -t lint test build` para validar el workspace completo en cada cambio relevante.

### 2. Shell como punto de entrada y microfrontends como unidad de composicion

El proyecto actual organiza la experiencia mediante un host y dos remotos funcionales.

Cambios visibles:

- `apps/shell/src/app/app.routes.ts` delega navegacion a `legacy-remote` y `modern-remote`.
- `apps/shell/public/federation.manifest.json` registra ambos remotos.
- `package.json` incluye `start:mfes` para levantar shell y remotos juntos.
- cada remote mantiene sus propias rutas de `citizens`, `permits` y `applications`.

Decision:

- adoptar `@angular-architects/native-federation` para ejecutar legacy y modern lado a lado;
- usar `shell` como punto de entrada unico para navegacion y orquestacion;
- separar la implementacion por remotos para permitir evolucion independiente.

### 3. Coexistencia explicita de experiencia legacy y moderna

La migracion no solo ocurre a nivel interno; tambien se hace visible en la UI para validar que ambos enfoques mantengan el mismo flujo.

Cambios visibles:

- `apps/legacy/src/app/citizens/citizens-list.page.ts` expone un selector `Source`.
- `apps/modern/src/app/citizens/citizens-list.ts` mantiene el mismo selector y cambia entre `/legacy/...` y `/modern/...`.
- `apps/shell-e2e/src/mfes-navigation.spec.ts` valida deep links y preservacion de query params durante el cambio de fuente.

Decision:

- permitir el cambio de origen desde la interfaz para comparar implementaciones sin perder ruta ni contexto;
- usar la URL como contrato de navegacion para mantener deep links estables entre arquitecturas.

### 4. Dominio aislado del backend legacy

El proyecto evita que la UI dependa directamente de DTOs del backend legacy.

Cambios visibles:

- `docs/adr/0001-data-access-anti-corruption-layer.md` formaliza el anti-corruption layer;
- `libs/src` define modelos de dominio (`Citizen`, `Permit`, `Application`);
- `libs/data-access/legacy` encapsula DTOs, API clients, mappers y facades;
- la UI consume `@gov/domain` y servicios de acceso, no shapes HTTP crudos.

Decision:

- preservar el dominio como contrato estable entre UI y fuentes de datos;
- encapsular variaciones del backend en `data-access/legacy`;
- mantener abierta la posibilidad de cambiar la fuente de datos sin reescribir pantallas.

### 5. Dos estrategias de estado para comparar presente y futuro

La base actual mantiene dos estilos de manejo de estado porque la migracion tambien evalua el enfoque tecnico.

Cambios visibles:

- `libs/data-access/legacy/src/lib/citizens.facade.ts` implementa estado con `signal`, `effect` y suscripcion directa al API client legacy;
- `libs/data-access/gov/src/lib/citizens.store.ts` implementa estado con `signalStore`, `withState`, `withComputed` y `rxMethod`;
- la vista legacy consume facades; la moderna consume stores.

Decision:

- conservar facades para la ruta legacy por simplicidad y estabilidad;
- usar `@ngrx/signals` en la ruta moderna como objetivo de modernizacion;
- permitir comparacion funcional entre ambos enfoques antes de consolidar uno solo.

Nota:

- hoy la implementacion "modern" todavia reutiliza `LegacyCitizensApiClient` y `mapLegacyCitizen`, asi que la modernizacion actual es de manejo de estado y composicion de UI, no aun de backend.

### 6. Angular moderno como estandar de implementacion

La base del proyecto adopta APIs modernas de Angular para las nuevas pantallas y para la arquitectura federada.

Cambios visibles:

- `provideZonelessChangeDetection()` en configuraciones de app;
- componentes standalone y lazy loading por `loadComponent` / `loadChildren`;
- `ChangeDetectionStrategy.OnPush` en pantallas clave;
- control flow moderno con `@if` y `@for`.

Decision:

- estandarizar Angular moderno para reducir costo de cambio futuro;
- favorecer rendering predecible y menor acoplamiento a Zone.js;
- usar lazy loading y federacion para aislar despliegue y carga por dominio.

### 7. Infraestructura local con backend falso determinista

El proyecto necesita una fuente de datos reproducible para desarrollo y pruebas mientras el backend real evoluciona.

Cambios visibles:

- `tools/mock-api/generate-db.ts` genera datos con seed fija;
- `package.json` define `dev:db`, `dev:api` y `dev:mock`;
- `proxy.conf.json` traduce `/api` hacia `http://localhost:3001`.

Decision:

- usar `json-server` y una base generada deterministicamente para desacoplar frontend y backend;
- mantener el contrato HTTP accesible mediante `/api` para no propagar detalles del entorno local a la UI;
- facilitar debugging y ejecucion de pruebas con datos consistentes.

### 8. Estrategia de testing por capas

Las pruebas no se concentran en un unico nivel.

Cambios visibles:

- `legacy` expone target `test` y concentra tests unitarios de la capa legacy;
- `shell`, `legacy-remote` y `modern-remote` exponen target `test`;
- `shell-e2e` y `modern-remote-e2e` exponen target `e2e`;
- CI ejecuta `lint`, `test` y `build`.

Decision:

- cubrir transformaciones criticas cerca de la capa de datos;
- validar navegacion y flujos integrados en navegador;
- usar el workspace como unidad de calidad en CI.

## Consequences

- Legacy y modern conviven dentro del mismo host.
- El dominio queda protegido frente a cambios del backend legacy.
- El shell permite comparar arquitecturas reales usando la misma navegacion.
- El costo operativo aumenta: hay mas apps, mas configuracion y mas superficies de prueba.
- La version modern todavia depende del backend legacy, por lo que la separacion backend moderno sigue pendiente.
- La cobertura automatizada existe, pero hoy esta mas madura en `legacy` y `shell-e2e` que en `gov` o `modern-remote-e2e`.

## Scope And Limits

- Esta ADR documenta decisiones confirmadas por el estado actual del codigo.
- No representa una cronologia historica exacta porque el repositorio no conserva esa granularidad en Git.
- Si el equipo quiere trazabilidad fina por feature, conviene crear ADRs adicionales por tema:
  - federacion y shell;
  - estrategia de estado moderna con `@ngrx/signals`;
  - mock API y contrato de desarrollo;
  - estrategia de testing y CI.

## Notes

- ADR 0001 sigue siendo la decision fundacional para el aislamiento del dominio.
- ADR 0002 documenta la arquitectura vigente del workspace: shell federado, convivencia legacy/modern y soporte operativo para desarrollo y pruebas.
````

## File: libs/core/eslint.config.mjs
````javascript
import baseConfig from '../eslint.config.mjs';

export default [...baseConfig];
````

## File: libs/core/http/eslint.config.mjs
````javascript
import baseConfig from '../../eslint.config.mjs';

export default [...baseConfig];
````

## File: libs/core/http/project.json
````json
{
  "name": "http",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "core/http/src",
  "projectType": "library",
  "tags": [],
  "// targets": "to see all targets run: nx show project http --web",
  "targets": {}
}
````

## File: libs/core/http/README.md
````markdown
# http

This library was generated with [Nx](https://nx.dev).
````

## File: libs/core/http/src/index.ts
````typescript
export * from './lib/http';

export * from './lib/api-base-url.token';
export * from './lib/api-base-url.interceptor';
````

## File: libs/core/http/src/lib/api-base-url.interceptor.ts
````typescript
import { inject } from '@angular/core';

import { API_BASE_URL } from './api-base-url.token';

import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Prefija requests relativas ("/api/...") con un baseUrl si se provee.
 * En dev lo dejaremos vacío (proxy). En prod podrías setearlo.
 */
export const apiBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
    const baseUrl = inject(API_BASE_URL, { optional: true }) ?? '';
    if (!baseUrl) return next(req);

    // Solo prefijar URLs relativas (no tocar http/https)
    if (/^https?:\/\//i.test(req.url)) return next(req);

    const url =
        req.url.startsWith('/') ? `${baseUrl}${req.url}` : `${baseUrl}/${req.url}`;

    return next(req.clone({ url }));
};
````

## File: libs/core/http/src/lib/api-base-url.token.ts
````typescript
import { InjectionToken } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
````

## File: libs/core/http/src/lib/http.ts
````typescript
export function http(): string {
  return 'http';
}
````

## File: libs/core/http/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "module": "commonjs",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "importHelpers": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/core/http/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "declaration": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"]
}
````

## File: libs/core/project.json
````json
{
  "name": "core",
  "$schema": "../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "core/src",
  "projectType": "library",
  "tags": [],
  "// targets": "to see all targets run: nx show project core --web",
  "targets": {}
}
````

## File: libs/core/README.md
````markdown
# core

This library was generated with [Nx](https://nx.dev).
````

## File: libs/core/src/index.ts
````typescript
export * from './lib/core';
export * from './lib/ui/page-header.component';
````

## File: libs/core/src/lib/core.ts
````typescript
export function core(): string {
  return 'core';
}
````

## File: libs/core/src/lib/ui/page-header.component.ts
````typescript
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
````

## File: libs/core/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "commonjs",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "importHelpers": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/core/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../dist/out-tsc",
    "declaration": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"]
}
````

## File: libs/data-access/eslint.config.mjs
````javascript
import baseConfig from '../../eslint.config.mjs';

export default [...baseConfig];
````

## File: libs/data-access/gov/eslint.config.mjs
````javascript
import baseConfig from '../../../eslint.config.mjs';

export default [...baseConfig];
````

## File: libs/data-access/gov/project.json
````json
{
  "name": "gov",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/gov/src",
  "projectType": "library",
  "tags": [],
  "// targets": "to see all targets run: nx show project gov --web",
  "targets": {}
}
````

## File: libs/data-access/gov/README.md
````markdown
# gov

This library was generated with [Nx](https://nx.dev).
````

## File: libs/data-access/gov/src/index.ts
````typescript
export * from './lib/gov';
export * from './lib/gov';
export * from './lib/citizens.store';
export * from './lib/permits.store';
export * from './lib/applications.store';
````

## File: libs/data-access/gov/src/lib/applications.store.ts
````typescript
import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { computed } from '@angular/core';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';
import { LegacyApplicationsApiClient, mapLegacyApplication } from '@gov/data-access/legacy';
import { Application } from '@gov/domain';

export const ApplicationsStore = signalStore(
    { providedIn: 'root' },
    withState({
        items: [] as Application[],
        isLoading: false,
        error: null as string | null,
        q: '',
        page: 1,
        limit: 10,
        total: 0,
    }),
    withComputed(({ items, q, page, limit }) => ({
        // Lógica de filtrado y paginación local (ACL/Frontend side)
        filteredItems: computed(() => {
            const query = q().toLowerCase();
            const filtered = items().filter(c =>
                c.id.toLowerCase().includes(query) ||
                c.citizenId.toLowerCase().includes(query) ||
                c.permitId.toLowerCase().includes(query) ||
                c.region.toLowerCase().includes(query) ||
                c.status.toLowerCase().includes(query)
            );

            const start = (page() - 1) * limit();
            return filtered.slice(start, start + limit());
        }),
        totalFiltered: computed(() => {
            const query = q().toLowerCase();
            return items().filter(c =>
                c.id.toLowerCase().includes(query) ||
                c.citizenId.toLowerCase().includes(query) ||
                c.permitId.toLowerCase().includes(query) ||
                c.region.toLowerCase().includes(query) ||
                c.status.toLowerCase().includes(query)
            ).length;
        }),
        isEmpty: computed(() => items().length === 0)
    })),
    withMethods((store, api = inject(LegacyApplicationsApiClient)) => ({
        setSearch: (q: string) => patchState(store, { q, page: 1 }),
        setPage: (page: number) => patchState(store, { page }),
        setLimit: (limit: number) => patchState(store, { limit, page: 1 }),

        loadAll: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap(() => api.getApplications({ limit: 100000 }).pipe( // Traemos todo para filtrar localmente
                    tap((result) => patchState(store, {
                        items: result.items.map(mapLegacyApplication),
                        total: result.total,
                        isLoading: false
                    })),
                    catchError((err) => {
                        patchState(store, { isLoading: false, error: 'Error loading applications' });
                        return of(err);
                    })
                ))
            )
        )
    }))
);
````

## File: libs/data-access/gov/src/lib/citizens.store.ts
````typescript
import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { computed } from '@angular/core';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';
import { LegacyCitizensApiClient } from '@gov/data-access/legacy'; // Reutilizamos el client para el fetch
import { mapLegacyCitizen } from '@gov/data-access/legacy';
import { Citizen } from '@gov/domain';

export const CitizensStore = signalStore(
    { providedIn: 'root' },
    withState({
        items: [] as Citizen[],
        isLoading: false,
        error: null as string | null,
        q: '',
        page: 1,
        limit: 10,
        total: 0,
    }),
    withComputed(({ items, q, page, limit }) => ({
        // Lógica de filtrado y paginación local (ACL/Frontend side)
        filteredItems: computed(() => {
            const query = q().toLowerCase();
            const filtered = items().filter(c =>
                c.fullName.toLowerCase().includes(query) ||
                c.documentNumber.toLowerCase().includes(query)
            );

            const start = (page() - 1) * limit();
            return filtered.slice(start, start + limit());
        }),
        totalFiltered: computed(() => {
            return items().filter(c =>
                c.fullName.toLowerCase().includes(q().toLowerCase()) ||
                c.documentNumber.toLowerCase().includes(q().toLowerCase())
            ).length;
        }),
        isEmpty: computed(() => items().length === 0)
    })),
    withMethods((store, api = inject(LegacyCitizensApiClient)) => ({
        setSearch: (q: string) => patchState(store, { q, page: 1 }),
        setPage: (page: number) => patchState(store, { page }),
        setLimit: (limit: number) => patchState(store, { limit, page: 1 }),

        loadAll: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap(() => api.getCitizens({ limit: 100000 }).pipe( // Traemos todo para filtrar localmente
                    tap((result) => patchState(store, {
                        items: result.items.map(mapLegacyCitizen),
                        total: result.total,
                        isLoading: false
                    })),
                    catchError((err) => {
                        patchState(store, { isLoading: false, error: 'Error loading citizens' });
                        return of(err);
                    })
                ))
            )
        )
    }))
);
````

## File: libs/data-access/gov/src/lib/gov.ts
````typescript
export function gov(): string {
  return 'gov';
}
````

## File: libs/data-access/gov/src/lib/permits.store.ts
````typescript
import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { computed } from '@angular/core';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';
import { LegacyPermitsApiClient, mapLegacyPermit } from '@gov/data-access/legacy';
import { Permit } from '@gov/domain';

export const PermitsStore = signalStore(
    { providedIn: 'root' },
    withState({
        items: [] as Permit[],
        isLoading: false,
        error: null as string | null,
        q: '',
        page: 1,
        limit: 10,
        total: 0,
    }),
    withComputed(({ items, q, page, limit }) => ({
        // Lógica de filtrado y paginación local (ACL/Frontend side)
        filteredItems: computed(() => {
            const query = q().toLowerCase();
            const filtered = items().filter(c =>
                c.id.toLowerCase().includes(query) ||
                c.citizenId.toLowerCase().includes(query) ||
                c.type.toLowerCase().includes(query) ||
                c.status.toLowerCase().includes(query) ||
                c.region.toLowerCase().includes(query)
            );

            const start = (page() - 1) * limit();
            return filtered.slice(start, start + limit());
        }),
        totalFiltered: computed(() => {
            const query = q().toLowerCase();
            return items().filter(c =>
                c.id.toLowerCase().includes(query) ||
                c.citizenId.toLowerCase().includes(query) ||
                c.type.toLowerCase().includes(query) ||
                c.status.toLowerCase().includes(query) ||
                c.region.toLowerCase().includes(query)
            ).length;
        }),
        isEmpty: computed(() => items().length === 0)
    })),
    withMethods((store, api = inject(LegacyPermitsApiClient)) => ({
        setSearch: (q: string) => patchState(store, { q, page: 1 }),
        setPage: (page: number) => patchState(store, { page }),
        setLimit: (limit: number) => patchState(store, { limit, page: 1 }),

        loadAll: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap(() => api.getPermits({ limit: 100000 }).pipe( // Traemos todo para filtrar localmente
                    tap((result) => patchState(store, {
                        items: result.items.map(mapLegacyPermit),
                        total: result.total,
                        isLoading: false
                    })),
                    catchError((err) => {
                        patchState(store, { isLoading: false, error: 'Error loading permits' });
                        return of(err);
                    })
                ))
            )
        )
    }))
);
````

## File: libs/data-access/gov/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "module": "commonjs",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "importHelpers": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/data-access/gov/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"]
}
````

## File: libs/data-access/legacy/eslint.config.mjs
````javascript
import baseConfig from '../../../eslint.config.mjs';

export default [...baseConfig];
````

## File: libs/data-access/legacy/project.json
````json
{
  "name": "legacy",
  "$schema": "../../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/legacy/src",
  "projectType": "library",
  "tags": [],
  "targets": {
    "test": {
      "executor": "@nx/vitest:test",
      "outputs": ["{options.reportsDirectory}"],
      "options": {
        "reportsDirectory": "../../../coverage/libs/data-access/legacy"
      }
    }
  }
}
````

## File: libs/data-access/legacy/README.md
````markdown
# legacy

This library was generated with [Nx](https://nx.dev).
````

## File: libs/data-access/legacy/src/index.ts
````typescript
export * from './lib/legacy';

export * from './lib/legacy-citizen.dto';
export * from './lib/legacy-citizen.mapper';
export * from './lib/legacy-citizens-api.client';
export * from './lib/citizens.facade';

export * from './lib/legacy-permit.dto';
export * from './lib/legacy-permit.mapper';
export * from './lib/legacy-permits-api.client';
export * from './lib/permits.facade';

export * from './lib/legacy-application.dto';
export * from './lib/legacy-application.mapper';
export * from './lib/legacy-applications-api.client';
export * from './lib/applications.facade';
````

## File: libs/data-access/legacy/src/lib/applications.facade.ts
````typescript
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { catchError, map, of, retry } from 'rxjs';
import type { Application } from '@gov/domain';

import { LegacyApplicationsApiClient } from './legacy-applications-api.client';
import { mapLegacyApplication } from './legacy-application.mapper';

@Injectable({ providedIn: 'any' })
export class ApplicationsFacade {
    private readonly api = inject(LegacyApplicationsApiClient);
    private readonly reloadTick = signal(0);

    readonly q = signal('');
    readonly page = signal(1);
    readonly limit = signal(10);

    readonly isLoading = signal(false);
    readonly error = signal<unknown | null>(null);
    readonly total = signal(0);
    readonly applications = signal<Application[]>([]);

    readonly isEmpty = computed(
        () => !this.isLoading() && !this.error() && this.applications().length === 0
    );

    constructor() {
        effect((onCleanup) => {
            const params = {
                q: this.q(),
                page: this.page(),
                limit: this.limit(),
            };

            this.reloadTick();
            this.isLoading.set(true);
            this.error.set(null);

            const sub = this.api
                .getApplications(params)
                .pipe(
                    retry({ count: 1, delay: 250 }),
                    map((result) => ({
                        items: result.items.map(mapLegacyApplication),
                        total: result.total,
                    })),
                    catchError((error) =>
                        of({
                            items: [] as Application[],
                            total: 0,
                            error,
                        })
                    )
                )
                .subscribe((result) => {
                    this.applications.set(result.items);
                    this.total.set(result.total);
                    this.error.set('error' in result ? result.error : null);
                    this.isLoading.set(false);
                });

            onCleanup(() => sub.unsubscribe());
        });
    }

    setSearch(q: string): void {
        this.q.set(q);
        this.page.set(1);
    }

    setPage(page: number): void {
        this.page.set(page);
    }

    setLimit(limit: number): void {
        this.limit.set(limit);
        this.page.set(1);
    }

    refresh(): void {
        this.reloadTick.update((tick) => tick + 1);
    }
}
````

## File: libs/data-access/legacy/src/lib/citizens.facade.ts
````typescript
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { catchError, of, retry } from 'rxjs';
import type { Citizen } from '@gov/domain';
import { mapLegacyCitizen } from './legacy-citizen.mapper';
import {
    LegacyCitizensApiClient,
    type LegacyCitizensResult,
} from './legacy-citizens-api.client';

@Injectable({ providedIn: 'root' })
export class CitizensFacade {
    private readonly api = inject(LegacyCitizensApiClient);
    private readonly reloadTick = signal(0);

    readonly q = signal('');
    readonly page = signal(1);
    readonly limit = signal(10);

    readonly isLoading = signal(false);
    readonly error = signal<unknown | null>(null);
    readonly total = signal(0);
    readonly citizens = signal<Citizen[]>([]);

    readonly isEmpty = computed(
        () => !this.isLoading() && !this.error() && this.citizens().length === 0
    );

    constructor() {
        effect((onCleanup) => {
            const params = {
                q: this.q(),
                page: this.page(),
                limit: this.limit(),
            };

            this.reloadTick();
            this.isLoading.set(true);
            this.error.set(null);

            const sub = this.api
                .getCitizens(params)
                .pipe(
                    retry({ count: 1, delay: 250 }),
                    catchError((error) =>
                        of<LegacyCitizensResult & { error: unknown }>({
                            items: [],
                            total: 0,
                            error,
                        })
                    )
                )
                .subscribe((result) => {
                    this.citizens.set(result.items.map(mapLegacyCitizen));
                    this.total.set(result.total);
                    this.error.set('error' in result ? result.error : null);
                    this.isLoading.set(false);
                });

            onCleanup(() => sub.unsubscribe());
        });
    }

    setSearch(q: string) {
        this.q.set(q);
        this.page.set(1);
    }

    setPage(page: number) {
        this.page.set(page);
    }

    setLimit(limit: number) {
        this.limit.set(limit);
        this.page.set(1);
    }

    refresh() {
        this.reloadTick.update((tick) => tick + 1);
    }
}
````

## File: libs/data-access/legacy/src/lib/legacy-application.dto.ts
````typescript
export interface LegacyApplicationDto {
    id: string;

    citizenId?: string;
    citizen_id?: string;

    permitId?: string;
    permit_id?: string;

    region?: string;

    status?: string;
    application_status?: string;

    createdAt?: string;
    created_at?: string;

    updatedAt?: string;
    updated_at?: string;
}
````

## File: libs/data-access/legacy/src/lib/legacy-application.mapper.spec.ts
````typescript
import { mapLegacyApplication } from './legacy-application.mapper';
import type { LegacyApplicationDto } from './legacy-application.dto';

describe('mapLegacyApplication', () => {
    it('maps legacy dto to domain application', () => {
        const dto: LegacyApplicationDto = {
            id: 'a-1',
            citizenId: 'c-1',
            permitId: 'p-1',
            status: 'SUBMITTED',
            region: 'AREQUIPA',
            createdAt: '2026-01-01T04:10:00.000Z',
            updatedAt: '2026-01-01T04:11:00.000Z',
        };

        // Ajusta el shape esperado SOLO si tu Application de dominio difiere
        expect(mapLegacyApplication(dto)).toEqual({
            id: 'a-1',
            citizenId: 'c-1',
            permitId: 'p-1',
            status: 'SUBMITTED',
            region: 'AREQUIPA',
            createdAt: '2026-01-01T04:10:00.000Z',
            updatedAt: '2026-01-01T04:11:00.000Z',
        });
    });

    it('supports applications without permitId (if present in mock)', () => {
        const dto: LegacyApplicationDto = {
            id: 'a-2',
            citizenId: 'c-2',
            status: 'DRAFT',
        };

        const mapped = mapLegacyApplication(dto);

        expect(mapped.id).toBe('a-2');
        expect(mapped.citizenId).toBe('c-2');
        expect(mapped.status).toBe('DRAFT');
    });
});
````

## File: libs/data-access/legacy/src/lib/legacy-application.mapper.ts
````typescript
import type {
    Application,
    ApplicationStatus,
} from '@gov/domain';
import type { LegacyApplicationDto } from './legacy-application.dto';

const normalizeStatus = (raw: unknown): ApplicationStatus => {
    const v = String(raw ?? '').toLowerCase();
    if (
        v === 'draft' ||
        v === 'submitted' ||
        v === 'under_review' ||
        v === 'completed'
    )
        return v;
    return 'draft';
};

export function mapLegacyApplication(
    dto: LegacyApplicationDto
): Application {
    return {
        id: dto.id,
        citizenId: dto.citizenId ?? dto.citizen_id ?? '',
        permitId: dto.permitId ?? dto.permit_id ?? '',
        region: dto.region ?? '',
        status: normalizeStatus(dto.status ?? dto.application_status),
        createdAt: dto.createdAt ?? dto.created_at ?? '',
        updatedAt:
            dto.updatedAt ??
            dto.updated_at ??
            dto.createdAt ??
            dto.created_at ??
            '',
    };
}
````

## File: libs/data-access/legacy/src/lib/legacy-applications-api.client.ts
````typescript
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import type { LegacyApplicationDto } from './legacy-application.dto';

export interface LegacyApplicationsQuery {
    q?: string;
    page?: number;
    limit?: number;
}

export interface LegacyApplicationsResult {
    items: LegacyApplicationDto[];
    total: number;
}

@Injectable({ providedIn: 'any' })
export class LegacyApplicationsApiClient {
    private readonly http = inject(HttpClient);

    getApplications(
        query: LegacyApplicationsQuery
    ): Observable<LegacyApplicationsResult> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const q = query.q?.trim().toLowerCase() ?? '';

        return this.http.get<unknown[]>('/api/applications').pipe(
            map((allRaw) => {
                const all = Array.isArray(allRaw) ? allRaw : [];

                const filtered = !q
                    ? all
                    : all.filter((x) => {
                        const record = (x ?? {}) as Record<string, unknown>;

                        const hay = [
                            record['id'],
                            record['citizenId'],
                            record['citizen_id'],
                            record['permitId'],
                            record['permit_id'],
                            record['region'],
                            record['status'],
                            record['application_status'],
                            record['createdAt'],
                            record['created_at'],
                        ]
                            .filter(Boolean)
                            .join(' ')
                            .toLowerCase();

                        return hay.includes(q);
                    });

                const total = filtered.length;
                const start = (page - 1) * limit;
                const items = filtered.slice(start, start + limit);

                return { items: items as LegacyApplicationDto[], total };
            })
        );
    }
}
````

## File: libs/data-access/legacy/src/lib/legacy-citizen.dto.ts
````typescript
export interface LegacyCitizenDto {
    id: string;
    first_name?: string;
    last_name?: string;
    doc_number?: string;
    is_active?: boolean;
    created_at?: string; // ISO string
    firstName?: string;
    lastName?: string;
    docNumber?: string;
    email?: string;
    status?: 'ACTIVE' | 'INACTIVE' | 'active' | 'inactive';
    createdAt?: string;
}
````

## File: libs/data-access/legacy/src/lib/legacy-citizen.mapper.spec.ts
````typescript
import { mapLegacyCitizen } from './legacy-citizen.mapper';
import type { LegacyCitizenDto } from './legacy-citizen.dto';

describe('mapLegacyCitizen', () => {
    it('maps legacy dto to domain citizen', () => {
        const dto: LegacyCitizenDto = {
            id: 'c-1',
            first_name: 'Ada',
            last_name: 'Lovelace',
            doc_number: 'ABC123',
            is_active: true,
            created_at: '2020-01-01T00:00:00.000Z',
        };

        expect(mapLegacyCitizen(dto)).toEqual({
            id: 'c-1',
            fullName: 'Ada Lovelace',
            documentNumber: 'ABC123',
            status: 'active',
            createdAt: '2020-01-01T00:00:00.000Z',
        });
    });

    it('trims fullName when a part is empty', () => {
        const dto: LegacyCitizenDto = {
            id: 'c-2',
            first_name: 'Ada',
            last_name: '',
            doc_number: 'XYZ999',
            is_active: false,
            created_at: '2020-01-02T00:00:00.000Z',
        };

        expect(mapLegacyCitizen(dto).fullName).toBe('Ada');
        expect(mapLegacyCitizen(dto).status).toBe('inactive');
    });
});
````

## File: libs/data-access/legacy/src/lib/legacy-citizen.mapper.ts
````typescript
import type { Citizen } from '@gov/domain';
import type { LegacyCitizenDto } from './legacy-citizen.dto';

export function mapLegacyCitizen(dto: LegacyCitizenDto): Citizen {
    const firstName = dto.first_name ?? dto.firstName ?? '';
    const lastName = dto.last_name ?? dto.lastName ?? '';
    const fullName = `${firstName} ${lastName}`.trim() || dto.id;
    const documentNumber = dto.doc_number ?? dto.docNumber ?? dto.email ?? '-';
    const rawStatus = dto.status?.toLowerCase();
    const status = rawStatus === 'active' || dto.is_active ? 'active' : 'inactive';
    const createdAt = dto.created_at ?? dto.createdAt ?? '';

    return {
        id: dto.id,
        fullName,
        documentNumber,
        status,
        createdAt,
    };
}
````

## File: libs/data-access/legacy/src/lib/legacy-citizens-api.client.ts
````typescript
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import type { LegacyCitizenDto } from './legacy-citizen.dto';

export interface LegacyCitizensQuery {
    q?: string;
    page?: number;   // 1-based
    limit?: number;  // page size
}

export interface LegacyCitizensResult {
    items: LegacyCitizenDto[];
    total: number;
}

@Injectable({ providedIn: 'any' })
export class LegacyCitizensApiClient {
    private readonly http = inject(HttpClient);

    getCitizens(query: LegacyCitizensQuery): Observable<LegacyCitizensResult> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const q = query.q?.trim().toLowerCase() ?? '';

        // Backend legacy: solo soporta /citizens sin params
        return this.http.get<unknown[]>('/api/citizens').pipe(
            map((allRaw) => {
                const all = Array.isArray(allRaw) ? allRaw : [];

                // búsqueda simple (name/doc/email si existen)
                const filtered = !q
                    ? all
                    : all.filter((x) => {
                        const record = (x ?? {}) as Record<string, unknown>;
                        const hay = [
                            record['firstName'],
                            record['lastName'],
                            record['doc_number'],
                            record['docNumber'],
                            record['email'],
                            record['id'],
                        ]
                            .filter(Boolean)
                            .join(' ')
                            .toLowerCase();
                        return hay.includes(q);
                    });

                const total = filtered.length;
                const start = (page - 1) * limit;
                const items = filtered.slice(start, start + limit);

                return { items: items as LegacyCitizenDto[], total };
            })
        );
    }
}
````

## File: libs/data-access/legacy/src/lib/legacy-permit.dto.ts
````typescript
export interface LegacyPermitDto {
    id: string;

    // legacy inconsistente
    citizenId?: string;
    citizen_id?: string;

    type?: string;
    permit_type?: string;

    status?: string;
    permit_status?: string;

    region?: string;

    createdAt?: string;
    created_at?: string;

    updatedAt?: string;
    updated_at?: string;
}
````

## File: libs/data-access/legacy/src/lib/legacy-permit.mapper.spec.ts
````typescript
import { mapLegacyPermit } from './legacy-permit.mapper';
import type { LegacyPermitDto } from './legacy-permit.dto';

describe('mapLegacyPermit', () => {
    it('maps legacy dto to domain permit', () => {
        const dto: LegacyPermitDto = {
            id: 'p-1',
            citizenId: 'c-1',
            type: 'CONSTRUCTION',
            status: 'APPROVED',
            region: 'LIMA',
            createdAt: '2026-01-01T02:12:00.000Z',
            updatedAt: '2026-01-01T02:13:00.000Z',
        };

        // Ajusta el shape esperado SOLO si tu Permit de dominio difiere
        expect(mapLegacyPermit(dto)).toEqual({
            id: 'p-1',
            citizenId: 'c-1',
            type: 'CONSTRUCTION',
            status: 'APPROVED',
            region: 'LIMA',
            createdAt: '2026-01-01T02:12:00.000Z',
            updatedAt: '2026-01-01T02:13:00.000Z',
        });
    });

    it('is resilient to missing optional fields', () => {
        const dto: LegacyPermitDto = {
            id: 'p-2',
            citizenId: 'c-2',
        };

        const mapped = mapLegacyPermit(dto);

        expect(mapped.id).toBe('p-2');
        expect(mapped.citizenId).toBe('c-2');
    });
});
````

## File: libs/data-access/legacy/src/lib/legacy-permit.mapper.ts
````typescript
import type { Permit, PermitStatus, PermitType } from '@gov/domain';
import type { LegacyPermitDto } from './legacy-permit.dto';

const normalizeType = (raw: unknown): PermitType => {
    const v = String(raw ?? '').toLowerCase();
    if (v === 'transport' || v === 'business' || v === 'construction') return v;
    return 'business';
};

const normalizeStatus = (raw: unknown): PermitStatus => {
    const v = String(raw ?? '').toLowerCase();
    if (v === 'pending' || v === 'approved' || v === 'rejected') return v;
    return 'pending';
};

export function mapLegacyPermit(dto: LegacyPermitDto): Permit {
    const citizenId = dto.citizenId ?? dto.citizen_id ?? '';
    const type = normalizeType(dto.type ?? dto.permit_type);
    const status = normalizeStatus(dto.status ?? dto.permit_status);

    const createdAt = dto.createdAt ?? dto.created_at ?? '';
    const updatedAt = dto.updatedAt ?? dto.updated_at ?? createdAt;

    return {
        id: dto.id,
        citizenId,
        type,
        status,
        region: dto.region ?? '',
        createdAt,
        updatedAt,
    };
}
````

## File: libs/data-access/legacy/src/lib/legacy-permits-api.client.ts
````typescript
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import type { LegacyPermitDto } from './legacy-permit.dto';

export interface LegacyPermitsQuery {
    q?: string;
    page?: number; // 1-based
    limit?: number; // page size
}

export interface LegacyPermitsResult {
    items: LegacyPermitDto[];
    total: number;
}

@Injectable({ providedIn: 'any' })
export class LegacyPermitsApiClient {
    private readonly http = inject(HttpClient);

    getPermits(query: LegacyPermitsQuery): Observable<LegacyPermitsResult> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const q = query.q?.trim().toLowerCase() ?? '';

        // Backend legacy: solo soporta /permits sin params
        return this.http.get<unknown[]>('/api/permits').pipe(
            map((allRaw) => {
                const all = Array.isArray(allRaw) ? allRaw : [];

                const filtered = !q
                    ? all
                    : all.filter((x) => {
                        const record = (x ?? {}) as Record<string, unknown>;
                        const hay = [
                            record['id'],
                            record['citizenId'],
                            record['citizen_id'],
                            record['type'],
                            record['permit_type'],
                            record['status'],
                            record['permit_status'],
                            record['region'],
                        ]
                            .filter(Boolean)
                            .join(' ')
                            .toLowerCase();

                        return hay.includes(q);
                    });

                const total = filtered.length;
                const start = (page - 1) * limit;
                const items = filtered.slice(start, start + limit);

                return { items: items as LegacyPermitDto[], total };
            })
        );
    }
}
````

## File: libs/data-access/legacy/src/lib/legacy.ts
````typescript
export function legacy(): string {
  return 'legacy';
}
````

## File: libs/data-access/legacy/src/lib/permits.facade.ts
````typescript
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { catchError, map, of, retry } from 'rxjs';
import type { Permit } from '@gov/domain';

import { LegacyPermitsApiClient } from './legacy-permits-api.client';
import { mapLegacyPermit } from './legacy-permit.mapper';

@Injectable({ providedIn: 'any' })
export class PermitsFacade {
    private readonly api = inject(LegacyPermitsApiClient);
    private readonly reloadTick = signal(0);

    readonly q = signal('');
    readonly page = signal(1);
    readonly limit = signal(10);

    readonly isLoading = signal(false);
    readonly error = signal<unknown | null>(null);
    readonly total = signal(0);
    readonly permits = signal<Permit[]>([]);

    readonly isEmpty = computed(
        () => !this.isLoading() && !this.error() && this.permits().length === 0
    );

    constructor() {
        effect((onCleanup) => {
            const params = {
                q: this.q(),
                page: this.page(),
                limit: this.limit(),
            };

            this.reloadTick();
            this.isLoading.set(true);
            this.error.set(null);

            const sub = this.api
                .getPermits(params)
                .pipe(
                    retry({ count: 1, delay: 250 }),
                    map((result) => ({
                        items: result.items.map(mapLegacyPermit),
                        total: result.total,
                    })),
                    catchError((error) =>
                        of({
                            items: [] as Permit[],
                            total: 0,
                            error,
                        })
                    )
                )
                .subscribe((result) => {
                    this.permits.set(result.items);
                    this.total.set(result.total);
                    this.error.set('error' in result ? result.error : null);
                    this.isLoading.set(false);
                });

            onCleanup(() => sub.unsubscribe());
        });
    }

    setSearch(q: string): void {
        this.q.set(q);
        this.page.set(1);
    }

    setPage(page: number): void {
        this.page.set(page);
    }

    setLimit(limit: number): void {
        this.limit.set(limit);
        this.page.set(1);
    }

    refresh(): void {
        this.reloadTick.update((tick) => tick + 1);
    }
}
````

## File: libs/data-access/legacy/tsconfig.json
````json
{
  "extends": "../../../tsconfig.base.json",
  "compilerOptions": {
    "module": "preserve",
    "moduleResolution": "bundler",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "importHelpers": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}
````

## File: libs/data-access/legacy/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "declaration": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx"
  ]
}
````

## File: libs/data-access/legacy/tsconfig.spec.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../dist/out-tsc",
    "types": [
      "vitest/globals",
      "vitest/importMeta",
      "vite/client",
      "node",
      "vitest"
    ]
  },
  "include": [
    "vite.config.ts",
    "vite.config.mts",
    "vitest.config.ts",
    "vitest.config.mts",
    "src/**/*.test.ts",
    "src/**/*.spec.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.tsx",
    "src/**/*.test.js",
    "src/**/*.spec.js",
    "src/**/*.test.jsx",
    "src/**/*.spec.jsx",
    "src/**/*.d.ts"
  ]
}
````

## File: libs/data-access/legacy/vitest.config.mts
````typescript
import { defineConfig } from 'vitest/config';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/data-access/legacy',
  plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
  test: {
    name: 'legacy',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../../coverage/libs/data-access/legacy',
      provider: 'v8' as const,
    },
  },
}));
````

## File: libs/data-access/project.container.json
````json
{
  "name": "data-access",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/data-access/src",
  "projectType": "library",
  "tags": [],
  "// targets": "to see all targets run: nx show project data-access --web",
  "targets": {}
}
````

## File: libs/data-access/README.md
````markdown
# data-access

This library was generated with [Nx](https://nx.dev).
````

## File: libs/data-access/src/index.ts
````typescript
export * from './lib/data-access';
````

## File: libs/data-access/src/lib/data-access.ts
````typescript
export function dataAccess(): string {
  return 'data-access';
}
````

## File: libs/data-access/tsconfig.json
````json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "commonjs",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "importHelpers": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/data-access/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "declaration": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"]
}
````

## File: libs/eslint.config.mjs
````javascript
import baseConfig from '../eslint.config.mjs';

export default [...baseConfig];
````

## File: libs/project.json
````json
{
  "name": "domain",
  "$schema": "../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "libs/src",
  "projectType": "library",
  "tags": [],
  "// targets": "to see all targets run: nx show project domain --web",
  "targets": {}
}
````

## File: libs/README.md
````markdown
# libs

This library was generated with [Nx](https://nx.dev).
````

## File: libs/src/index.ts
````typescript
export * from './lib/libs';

export * from './lib/citizen.model';
export * from './lib/permit.model';
export * from './lib/application.model';
````

## File: libs/src/lib/application.model.ts
````typescript
export type ApplicationId = string;

export type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'completed';

export interface Application {
    id: ApplicationId;
    citizenId: string;
    permitId: string;
    region: string;

    status: ApplicationStatus;

    createdAt: string; // ISO
    updatedAt: string; // ISO
}
````

## File: libs/src/lib/citizen.model.ts
````typescript
export type CitizenId = string;

export interface Citizen {
    id: CitizenId;
    fullName: string;
    documentNumber: string;
    status: 'active' | 'inactive';
    createdAt: string; // ISO string (determinista en mock)
}
````

## File: libs/src/lib/libs.ts
````typescript
export function libs(): string {
  return 'libs';
}
````

## File: libs/src/lib/permit.model.ts
````typescript
export type PermitId = string;

export type PermitType = 'transport' | 'business' | 'construction';
export type PermitStatus = 'pending' | 'approved' | 'rejected';

export interface Permit {
    id: PermitId;
    citizenId: string;

    type: PermitType;
    status: PermitStatus;

    region: string;

    createdAt: string; // ISO string (determinista en mock)
    updatedAt: string; // ISO string
}
````

## File: libs/tsconfig.json
````json
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "module": "commonjs",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "importHelpers": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true
  },
  "files": [],
  "include": [],
  "references": [
    {
      "path": "./tsconfig.lib.json"
    }
  ]
}
````

## File: libs/tsconfig.lib.json
````json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "../dist/out-tsc",
    "declaration": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"]
}
````

## File: proxy.conf.json
````json
{
  "/api": {
    "target": "http://localhost:3001",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    }
  }
}
````

## File: tools/mock-api/db.json
````json
{
  "citizens": [
    {
      "id": "b438b6fa-765b-4706-8b22-88adb9b5534a",
      "firstName": "Katherine",
      "lastName": "Kautzer",
      "email": "Louis_Johns@yahoo.com",
      "region": "PIURA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-01T00:01:00.000Z"
    },
    {
      "id": "91d98546-ae8a-499a-ad1c-3391eab09822",
      "firstName": "Kayden",
      "lastName": "Spinka",
      "email": "Jaime_Hermiston-Ruecker69@hotmail.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:02:00.000Z",
      "updatedAt": "2026-01-01T00:03:00.000Z"
    },
    {
      "id": "58a125ad-8d65-452d-9589-80fe348ef49c",
      "firstName": "Leonard",
      "lastName": "Block-Keebler",
      "email": "Betty75@gmail.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:04:00.000Z",
      "updatedAt": "2026-01-01T00:05:00.000Z"
    },
    {
      "id": "d2c44a1a-eb77-4c91-99d5-ec9c1dde2126",
      "firstName": "Dallas",
      "lastName": "Schowalter",
      "email": "Kristofer_Hoeger@gmail.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:06:00.000Z",
      "updatedAt": "2026-01-01T00:07:00.000Z"
    },
    {
      "id": "7181afc9-1ba0-4c86-9c67-25d26f3ee178",
      "firstName": "Beulah",
      "lastName": "Tremblay",
      "email": "Kamille_Kuhic37@gmail.com",
      "region": "CUSCO",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:08:00.000Z",
      "updatedAt": "2026-01-01T00:09:00.000Z"
    },
    {
      "id": "5cc37b63-fad0-4481-9f35-3134a4505829",
      "firstName": "Spencer",
      "lastName": "Sanford",
      "email": "Savanah.Keeling-Swaniawski92@gmail.com",
      "region": "PIURA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:10:00.000Z",
      "updatedAt": "2026-01-01T00:11:00.000Z"
    },
    {
      "id": "d190b013-e589-439a-b467-e9f8807e3065",
      "firstName": "Mario",
      "lastName": "Schulist",
      "email": "Olga_Wehner@hotmail.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:12:00.000Z",
      "updatedAt": "2026-01-01T00:13:00.000Z"
    },
    {
      "id": "55edbf63-1421-4959-b3a3-4b858be93bc3",
      "firstName": "Dave",
      "lastName": "Oberbrunner-Rutherford",
      "email": "Renee.Bogisich@yahoo.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:14:00.000Z",
      "updatedAt": "2026-01-01T00:15:00.000Z"
    },
    {
      "id": "363d74e5-e0b7-4700-b5f9-59325d84fd5f",
      "firstName": "Gussie",
      "lastName": "Gislason",
      "email": "Tricia37@gmail.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:16:00.000Z",
      "updatedAt": "2026-01-01T00:17:00.000Z"
    },
    {
      "id": "ed4811d6-af30-40be-8768-da3c2293b54f",
      "firstName": "Preston",
      "lastName": "O'Conner",
      "email": "Edwin61@yahoo.com",
      "region": "PIURA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:18:00.000Z",
      "updatedAt": "2026-01-01T00:19:00.000Z"
    },
    {
      "id": "0fee6b36-d2e7-464e-88cd-e4597e6796f1",
      "firstName": "Erin",
      "lastName": "Barton",
      "email": "Marshall_Maggio67@yahoo.com",
      "region": "AREQUIPA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:20:00.000Z",
      "updatedAt": "2026-01-01T00:21:00.000Z"
    },
    {
      "id": "b5ca08d9-28c1-4d28-b63a-0c8e802c7754",
      "firstName": "Lydia",
      "lastName": "Will",
      "email": "Leland_Bauch79@yahoo.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:22:00.000Z",
      "updatedAt": "2026-01-01T00:23:00.000Z"
    },
    {
      "id": "6187a800-bbfe-47a7-a361-a37f024fe2fc",
      "firstName": "Giovanny",
      "lastName": "Hansen",
      "email": "Gwen.Paucek@gmail.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:24:00.000Z",
      "updatedAt": "2026-01-01T00:25:00.000Z"
    },
    {
      "id": "ff903ce7-5411-4fc2-83ac-c2f399fa98c1",
      "firstName": "Evan",
      "lastName": "Homenick",
      "email": "Ardella_Gleason@yahoo.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:26:00.000Z",
      "updatedAt": "2026-01-01T00:27:00.000Z"
    },
    {
      "id": "475c7df3-9df4-4b0e-a1bf-8399a2e90a30",
      "firstName": "Beau",
      "lastName": "Grimes",
      "email": "Kerry88@yahoo.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:28:00.000Z",
      "updatedAt": "2026-01-01T00:29:00.000Z"
    },
    {
      "id": "8c989c8e-fec3-464a-a5c1-c9d698fc82e3",
      "firstName": "Darryl",
      "lastName": "Herman",
      "email": "Robyn33@gmail.com",
      "region": "PIURA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:30:00.000Z",
      "updatedAt": "2026-01-01T00:31:00.000Z"
    },
    {
      "id": "2633a751-8564-4680-bde8-4f6bb63f1734",
      "firstName": "Dana",
      "lastName": "Gleichner-Padberg",
      "email": "Thomas.Labadie64@gmail.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:32:00.000Z",
      "updatedAt": "2026-01-01T00:33:00.000Z"
    },
    {
      "id": "f7c799fa-3037-46cc-b1f8-96adafbd0aa1",
      "firstName": "Leland",
      "lastName": "Aufderhar",
      "email": "Emanuel.Raynor@hotmail.com",
      "region": "AREQUIPA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:34:00.000Z",
      "updatedAt": "2026-01-01T00:35:00.000Z"
    },
    {
      "id": "56ba8532-11d6-40e3-b43f-1bead3ab7dbe",
      "firstName": "Jack",
      "lastName": "Kassulke",
      "email": "Angela.Homenick42@gmail.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:36:00.000Z",
      "updatedAt": "2026-01-01T00:37:00.000Z"
    },
    {
      "id": "d702bbc5-5c6b-4951-91e7-f5355a0c6677",
      "firstName": "Jana",
      "lastName": "Flatley",
      "email": "Johnnie.Shanahan48@hotmail.com",
      "region": "CUSCO",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:38:00.000Z",
      "updatedAt": "2026-01-01T00:39:00.000Z"
    },
    {
      "id": "534f1708-2a4b-4504-b174-a705791a52c1",
      "firstName": "Al",
      "lastName": "Stokes",
      "email": "Sheri_Kihn37@hotmail.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:40:00.000Z",
      "updatedAt": "2026-01-01T00:41:00.000Z"
    },
    {
      "id": "59a0e328-a4a4-4ee1-82b0-d5b031267eab",
      "firstName": "Kellen",
      "lastName": "Boehm",
      "email": "Deondre_Friesen86@gmail.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:42:00.000Z",
      "updatedAt": "2026-01-01T00:43:00.000Z"
    },
    {
      "id": "1913f794-7280-40a0-8843-94722118ccf2",
      "firstName": "Oceane",
      "lastName": "Huel",
      "email": "Lisa.Cruickshank@yahoo.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:44:00.000Z",
      "updatedAt": "2026-01-01T00:45:00.000Z"
    },
    {
      "id": "8b96e9fd-aef3-4be0-9c1e-920d2f1d6dcd",
      "firstName": "Andrew",
      "lastName": "Hettinger",
      "email": "Melanie_Kunze97@hotmail.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:46:00.000Z",
      "updatedAt": "2026-01-01T00:47:00.000Z"
    },
    {
      "id": "3104205d-4bb0-4f2b-b6df-3d8fa93b4df0",
      "firstName": "Tasha",
      "lastName": "Boyer",
      "email": "Gerardo71@yahoo.com",
      "region": "PIURA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:48:00.000Z",
      "updatedAt": "2026-01-01T00:49:00.000Z"
    },
    {
      "id": "c5bfef09-33dc-4583-b0eb-8066222913f3",
      "firstName": "Leland",
      "lastName": "Witting",
      "email": "Leonor97@hotmail.com",
      "region": "PIURA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:50:00.000Z",
      "updatedAt": "2026-01-01T00:51:00.000Z"
    },
    {
      "id": "f478274d-510d-4de1-a66d-44b2ab23bcf4",
      "firstName": "Elisa",
      "lastName": "Schmitt",
      "email": "Tiffany_Auer68@yahoo.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:52:00.000Z",
      "updatedAt": "2026-01-01T00:53:00.000Z"
    },
    {
      "id": "f30cd8e2-409e-491b-8a2d-e649fbccfd43",
      "firstName": "Thelma",
      "lastName": "Bergnaum",
      "email": "Jake_Connelly-Schoen71@yahoo.com",
      "region": "AREQUIPA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:54:00.000Z",
      "updatedAt": "2026-01-01T00:55:00.000Z"
    },
    {
      "id": "daf2781a-956c-45fe-91da-0fddee3e0e7d",
      "firstName": "Armando",
      "lastName": "Mertz",
      "email": "Cathy82@yahoo.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T00:56:00.000Z",
      "updatedAt": "2026-01-01T00:57:00.000Z"
    },
    {
      "id": "d861d055-e7e1-4d98-b474-7caae03b6aeb",
      "firstName": "Maynard",
      "lastName": "Bartoletti",
      "email": "Abel_Frami@hotmail.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:58:00.000Z",
      "updatedAt": "2026-01-01T00:59:00.000Z"
    },
    {
      "id": "5f97849b-143b-4e6a-8026-aa32f571ea86",
      "firstName": "Lily",
      "lastName": "Heller",
      "email": "Seth26@hotmail.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:00:00.000Z",
      "updatedAt": "2026-01-01T01:01:00.000Z"
    },
    {
      "id": "d4fe34e1-3929-4994-adf4-d45c20621924",
      "firstName": "Eloy",
      "lastName": "Ferry",
      "email": "Naomi_Kreiger@hotmail.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:02:00.000Z",
      "updatedAt": "2026-01-01T01:03:00.000Z"
    },
    {
      "id": "458dab35-2bfb-41b6-b1fb-9d5a718a721a",
      "firstName": "Tony",
      "lastName": "Jaskolski",
      "email": "Dorothy_Crona@hotmail.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:04:00.000Z",
      "updatedAt": "2026-01-01T01:05:00.000Z"
    },
    {
      "id": "e5cb00ad-e294-43b6-97d3-8d29dce0b38c",
      "firstName": "Tyrique",
      "lastName": "Hudson",
      "email": "Anastasia56@yahoo.com",
      "region": "PIURA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:06:00.000Z",
      "updatedAt": "2026-01-01T01:07:00.000Z"
    },
    {
      "id": "aa276100-b774-4822-9d0e-5e159f1c9af5",
      "firstName": "Elvie",
      "lastName": "Dietrich",
      "email": "Odell.Osinski40@gmail.com",
      "region": "AREQUIPA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:08:00.000Z",
      "updatedAt": "2026-01-01T01:09:00.000Z"
    },
    {
      "id": "38a049d3-ed6d-4d41-b1e7-a6cdeaed494a",
      "firstName": "Agustina",
      "lastName": "Haley",
      "email": "Hector.Jakubowski26@yahoo.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:10:00.000Z",
      "updatedAt": "2026-01-01T01:11:00.000Z"
    },
    {
      "id": "53e528ec-243e-4427-8920-1a24adf63bbf",
      "firstName": "Percy",
      "lastName": "Roberts",
      "email": "Ansley.Borer78@yahoo.com",
      "region": "AREQUIPA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:12:00.000Z",
      "updatedAt": "2026-01-01T01:13:00.000Z"
    },
    {
      "id": "9931ba7e-fbf2-42f6-b8f9-dbd7f2c39cb7",
      "firstName": "Dennis",
      "lastName": "Beahan",
      "email": "Roderick57@yahoo.com",
      "region": "CUSCO",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:14:00.000Z",
      "updatedAt": "2026-01-01T01:15:00.000Z"
    },
    {
      "id": "3be6a80e-c615-483d-8432-b8b46e5ef079",
      "firstName": "Lynette",
      "lastName": "Sanford",
      "email": "Werner.McGlynn-Terry4@hotmail.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:16:00.000Z",
      "updatedAt": "2026-01-01T01:17:00.000Z"
    },
    {
      "id": "7bab9f3e-f06a-49fa-a9ee-d6bf37c9c427",
      "firstName": "August",
      "lastName": "Rath",
      "email": "Elmore_Gulgowski22@hotmail.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:18:00.000Z",
      "updatedAt": "2026-01-01T01:19:00.000Z"
    },
    {
      "id": "6dd1593e-b311-436c-920e-55864bcdcb3b",
      "firstName": "Homer",
      "lastName": "Torp",
      "email": "Evelyn.Crooks@yahoo.com",
      "region": "PIURA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:20:00.000Z",
      "updatedAt": "2026-01-01T01:21:00.000Z"
    },
    {
      "id": "a0ede228-db47-4399-81a1-0d37fa5d3799",
      "firstName": "Johanna",
      "lastName": "Waters",
      "email": "Marilyn.Paucek74@gmail.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:22:00.000Z",
      "updatedAt": "2026-01-01T01:23:00.000Z"
    },
    {
      "id": "e9a35c5d-3b1d-4af0-a200-daa6062ee400",
      "firstName": "Mark",
      "lastName": "Abshire",
      "email": "Harley.Fay@hotmail.com",
      "region": "PIURA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:24:00.000Z",
      "updatedAt": "2026-01-01T01:25:00.000Z"
    },
    {
      "id": "5db1bf77-b355-4f22-a74d-6ad4b64e972e",
      "firstName": "Bryan",
      "lastName": "Konopelski",
      "email": "Monica.Sawayn30@gmail.com",
      "region": "PIURA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:26:00.000Z",
      "updatedAt": "2026-01-01T01:27:00.000Z"
    },
    {
      "id": "c165204c-4d9c-4fa5-a4fb-837cfa07d85d",
      "firstName": "Merle",
      "lastName": "Green",
      "email": "Calvin_Grant@gmail.com",
      "region": "LIMA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:28:00.000Z",
      "updatedAt": "2026-01-01T01:29:00.000Z"
    },
    {
      "id": "ede714e6-5487-4564-9330-ff116cd0482f",
      "firstName": "Floyd",
      "lastName": "Wiegand",
      "email": "Tara_Russel21@hotmail.com",
      "region": "CUSCO",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:30:00.000Z",
      "updatedAt": "2026-01-01T01:31:00.000Z"
    },
    {
      "id": "49c1f70f-4475-4228-91b5-f1045ddbdbd7",
      "firstName": "Arturo",
      "lastName": "Kunze",
      "email": "Rachael_Sawayn@hotmail.com",
      "region": "AREQUIPA",
      "status": "ACTIVE",
      "createdAt": "2026-01-01T01:32:00.000Z",
      "updatedAt": "2026-01-01T01:33:00.000Z"
    },
    {
      "id": "1df36bac-e482-4fc2-8bc2-7d505c14d268",
      "firstName": "Lorenzo",
      "lastName": "Abernathy",
      "email": "Rafael72@gmail.com",
      "region": "CUSCO",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:34:00.000Z",
      "updatedAt": "2026-01-01T01:35:00.000Z"
    },
    {
      "id": "1413e078-4c93-4700-9b2f-5b76aae189aa",
      "firstName": "Althea",
      "lastName": "Goodwin",
      "email": "Marsha3@gmail.com",
      "region": "LIMA",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:36:00.000Z",
      "updatedAt": "2026-01-01T01:37:00.000Z"
    },
    {
      "id": "0d30b040-12bf-4365-94b4-82da893d1e9f",
      "firstName": "Adeline",
      "lastName": "Botsford",
      "email": "Lynn.Quigley@yahoo.com",
      "region": "CUSCO",
      "status": "INACTIVE",
      "createdAt": "2026-01-01T01:38:00.000Z",
      "updatedAt": "2026-01-01T01:39:00.000Z"
    }
  ],
  "permits": [
    {
      "id": "7a91a081-9bc9-4f50-ad78-d451a3d9e0f6",
      "citizenId": "c165204c-4d9c-4fa5-a4fb-837cfa07d85d",
      "type": "BUSINESS",
      "status": "APPROVED",
      "region": "LIMA",
      "createdAt": "2026-01-01T01:40:00.000Z",
      "updatedAt": "2026-01-01T01:41:00.000Z"
    },
    {
      "id": "62fc90e1-c0cd-478d-9f02-da4710bbbe46",
      "citizenId": "f478274d-510d-4de1-a66d-44b2ab23bcf4",
      "type": "BUSINESS",
      "status": "APPROVED",
      "region": "LIMA",
      "createdAt": "2026-01-01T01:42:00.000Z",
      "updatedAt": "2026-01-01T01:43:00.000Z"
    },
    {
      "id": "e7ebfc3b-3437-46e9-8595-d131d4f25ea7",
      "citizenId": "534f1708-2a4b-4504-b174-a705791a52c1",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T01:44:00.000Z",
      "updatedAt": "2026-01-01T01:45:00.000Z"
    },
    {
      "id": "99519b99-b039-4240-830d-980d0c3d2808",
      "citizenId": "9931ba7e-fbf2-42f6-b8f9-dbd7f2c39cb7",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T01:46:00.000Z",
      "updatedAt": "2026-01-01T01:47:00.000Z"
    },
    {
      "id": "09ae0628-365b-4b63-acd8-3c5e4f6c3996",
      "citizenId": "5cc37b63-fad0-4481-9f35-3134a4505829",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "PIURA",
      "createdAt": "2026-01-01T01:48:00.000Z",
      "updatedAt": "2026-01-01T01:49:00.000Z"
    },
    {
      "id": "b2c31e92-a52c-41fc-bb3c-084dc7713b1c",
      "citizenId": "6dd1593e-b311-436c-920e-55864bcdcb3b",
      "type": "TRANSPORT",
      "status": "APPROVED",
      "region": "PIURA",
      "createdAt": "2026-01-01T01:50:00.000Z",
      "updatedAt": "2026-01-01T01:51:00.000Z"
    },
    {
      "id": "d25d82de-bfe1-469b-b8a1-60a267acb98d",
      "citizenId": "daf2781a-956c-45fe-91da-0fddee3e0e7d",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T01:52:00.000Z",
      "updatedAt": "2026-01-01T01:53:00.000Z"
    },
    {
      "id": "9211c332-984a-4cf7-864c-f9ab6349a70e",
      "citizenId": "49c1f70f-4475-4228-91b5-f1045ddbdbd7",
      "type": "BUSINESS",
      "status": "REJECTED",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T01:54:00.000Z",
      "updatedAt": "2026-01-01T01:55:00.000Z"
    },
    {
      "id": "7004ae60-4f1c-4b9e-9afd-cf951b86fe6f",
      "citizenId": "ed4811d6-af30-40be-8768-da3c2293b54f",
      "type": "TRANSPORT",
      "status": "APPROVED",
      "region": "PIURA",
      "createdAt": "2026-01-01T01:56:00.000Z",
      "updatedAt": "2026-01-01T01:57:00.000Z"
    },
    {
      "id": "2dd3bff7-d893-463b-9ac9-4fa7c4c51c3a",
      "citizenId": "7181afc9-1ba0-4c86-9c67-25d26f3ee178",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T01:58:00.000Z",
      "updatedAt": "2026-01-01T01:59:00.000Z"
    },
    {
      "id": "38d7c2a2-cb67-42ae-8856-377f6d28998c",
      "citizenId": "d4fe34e1-3929-4994-adf4-d45c20621924",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:00:00.000Z",
      "updatedAt": "2026-01-01T02:01:00.000Z"
    },
    {
      "id": "3b1efce6-238a-491b-8c07-712d937d1f24",
      "citizenId": "daf2781a-956c-45fe-91da-0fddee3e0e7d",
      "type": "BUSINESS",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:02:00.000Z",
      "updatedAt": "2026-01-01T02:03:00.000Z"
    },
    {
      "id": "0595761a-d827-40e3-ae9f-d00b8c93c0ca",
      "citizenId": "0d30b040-12bf-4365-94b4-82da893d1e9f",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T02:04:00.000Z",
      "updatedAt": "2026-01-01T02:05:00.000Z"
    },
    {
      "id": "705f4aa9-49b6-444e-aac9-a4e8c81176e2",
      "citizenId": "3104205d-4bb0-4f2b-b6df-3d8fa93b4df0",
      "type": "CONSTRUCTION",
      "status": "APPROVED",
      "region": "PIURA",
      "createdAt": "2026-01-01T02:06:00.000Z",
      "updatedAt": "2026-01-01T02:07:00.000Z"
    },
    {
      "id": "2138acc1-d1ef-49b5-b8d2-86d2e496e383",
      "citizenId": "c165204c-4d9c-4fa5-a4fb-837cfa07d85d",
      "type": "TRANSPORT",
      "status": "REJECTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:08:00.000Z",
      "updatedAt": "2026-01-01T02:09:00.000Z"
    },
    {
      "id": "70fa7912-a0be-4b8c-9b93-073386849939",
      "citizenId": "49c1f70f-4475-4228-91b5-f1045ddbdbd7",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T02:10:00.000Z",
      "updatedAt": "2026-01-01T02:11:00.000Z"
    },
    {
      "id": "e7dd03ec-2394-43f7-b8a1-6ef7e7fcd208",
      "citizenId": "ed4811d6-af30-40be-8768-da3c2293b54f",
      "type": "CONSTRUCTION",
      "status": "APPROVED",
      "region": "PIURA",
      "createdAt": "2026-01-01T02:12:00.000Z",
      "updatedAt": "2026-01-01T02:13:00.000Z"
    },
    {
      "id": "0745d117-6186-4f11-b25a-fe71a60d87bd",
      "citizenId": "ed4811d6-af30-40be-8768-da3c2293b54f",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "PIURA",
      "createdAt": "2026-01-01T02:14:00.000Z",
      "updatedAt": "2026-01-01T02:15:00.000Z"
    },
    {
      "id": "f1f90da2-5db5-4c48-8e68-c37eabf9dfaa",
      "citizenId": "2633a751-8564-4680-bde8-4f6bb63f1734",
      "type": "BUSINESS",
      "status": "REJECTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:16:00.000Z",
      "updatedAt": "2026-01-01T02:17:00.000Z"
    },
    {
      "id": "10a07edb-db07-4083-873d-250407069e88",
      "citizenId": "f7c799fa-3037-46cc-b1f8-96adafbd0aa1",
      "type": "BUSINESS",
      "status": "APPROVED",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T02:18:00.000Z",
      "updatedAt": "2026-01-01T02:19:00.000Z"
    },
    {
      "id": "e63cd5db-15d5-4d79-9698-df425b35ecf1",
      "citizenId": "2633a751-8564-4680-bde8-4f6bb63f1734",
      "type": "CONSTRUCTION",
      "status": "APPROVED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:20:00.000Z",
      "updatedAt": "2026-01-01T02:21:00.000Z"
    },
    {
      "id": "2365ad5c-4602-419a-a08c-87a69edbd4c4",
      "citizenId": "aa276100-b774-4822-9d0e-5e159f1c9af5",
      "type": "BUSINESS",
      "status": "PENDING",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T02:22:00.000Z",
      "updatedAt": "2026-01-01T02:23:00.000Z"
    },
    {
      "id": "88056bb6-6b69-440b-ba10-023d6af7c6b4",
      "citizenId": "daf2781a-956c-45fe-91da-0fddee3e0e7d",
      "type": "TRANSPORT",
      "status": "APPROVED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:24:00.000Z",
      "updatedAt": "2026-01-01T02:25:00.000Z"
    },
    {
      "id": "2152a98f-577b-43c2-8ff6-e68bce7998b4",
      "citizenId": "0d30b040-12bf-4365-94b4-82da893d1e9f",
      "type": "BUSINESS",
      "status": "APPROVED",
      "region": "CUSCO",
      "createdAt": "2026-01-01T02:26:00.000Z",
      "updatedAt": "2026-01-01T02:27:00.000Z"
    },
    {
      "id": "954a6dce-129b-430d-9ce4-8ba08f37c46b",
      "citizenId": "f478274d-510d-4de1-a66d-44b2ab23bcf4",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:28:00.000Z",
      "updatedAt": "2026-01-01T02:29:00.000Z"
    },
    {
      "id": "08de1e7f-c28e-4dfd-af89-165e5e39815f",
      "citizenId": "475c7df3-9df4-4b0e-a1bf-8399a2e90a30",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:30:00.000Z",
      "updatedAt": "2026-01-01T02:31:00.000Z"
    },
    {
      "id": "531d8b1d-9179-45b9-add0-ab2ed2eacc21",
      "citizenId": "ede714e6-5487-4564-9330-ff116cd0482f",
      "type": "BUSINESS",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T02:32:00.000Z",
      "updatedAt": "2026-01-01T02:33:00.000Z"
    },
    {
      "id": "d9d803d3-e56a-4ccd-8853-f9f769fd606c",
      "citizenId": "d190b013-e589-439a-b467-e9f8807e3065",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T02:34:00.000Z",
      "updatedAt": "2026-01-01T02:35:00.000Z"
    },
    {
      "id": "e5775167-3d73-4197-abf3-b6645179477a",
      "citizenId": "56ba8532-11d6-40e3-b43f-1bead3ab7dbe",
      "type": "CONSTRUCTION",
      "status": "APPROVED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:36:00.000Z",
      "updatedAt": "2026-01-01T02:37:00.000Z"
    },
    {
      "id": "85203805-0a8e-4abe-ae59-69ff71f10bd9",
      "citizenId": "5f97849b-143b-4e6a-8026-aa32f571ea86",
      "type": "TRANSPORT",
      "status": "APPROVED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:38:00.000Z",
      "updatedAt": "2026-01-01T02:39:00.000Z"
    },
    {
      "id": "57aca286-aa12-4118-90c9-b7ed732da4b4",
      "citizenId": "a0ede228-db47-4399-81a1-0d37fa5d3799",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:40:00.000Z",
      "updatedAt": "2026-01-01T02:41:00.000Z"
    },
    {
      "id": "d8494c15-072f-45cd-a1a5-4c44c56b2b5d",
      "citizenId": "a0ede228-db47-4399-81a1-0d37fa5d3799",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:42:00.000Z",
      "updatedAt": "2026-01-01T02:43:00.000Z"
    },
    {
      "id": "30ba3aaf-124c-4756-a85a-0957c0389239",
      "citizenId": "9931ba7e-fbf2-42f6-b8f9-dbd7f2c39cb7",
      "type": "BUSINESS",
      "status": "APPROVED",
      "region": "CUSCO",
      "createdAt": "2026-01-01T02:44:00.000Z",
      "updatedAt": "2026-01-01T02:45:00.000Z"
    },
    {
      "id": "4fa54458-9a09-49e3-b0f9-156c4f9189fe",
      "citizenId": "534f1708-2a4b-4504-b174-a705791a52c1",
      "type": "BUSINESS",
      "status": "APPROVED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:46:00.000Z",
      "updatedAt": "2026-01-01T02:47:00.000Z"
    },
    {
      "id": "044c2b64-e4cc-4650-8720-924bbfe8f588",
      "citizenId": "aa276100-b774-4822-9d0e-5e159f1c9af5",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T02:48:00.000Z",
      "updatedAt": "2026-01-01T02:49:00.000Z"
    },
    {
      "id": "ea1f189b-e558-4385-9e4a-6fe50475a55e",
      "citizenId": "49c1f70f-4475-4228-91b5-f1045ddbdbd7",
      "type": "BUSINESS",
      "status": "APPROVED",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T02:50:00.000Z",
      "updatedAt": "2026-01-01T02:51:00.000Z"
    },
    {
      "id": "2555d8f4-30d7-4409-84a1-82abccedc3e7",
      "citizenId": "6187a800-bbfe-47a7-a361-a37f024fe2fc",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:52:00.000Z",
      "updatedAt": "2026-01-01T02:53:00.000Z"
    },
    {
      "id": "b1163dd2-4711-4792-92be-0c0f5c856aec",
      "citizenId": "59a0e328-a4a4-4ee1-82b0-d5b031267eab",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T02:54:00.000Z",
      "updatedAt": "2026-01-01T02:55:00.000Z"
    },
    {
      "id": "b16d600e-da0c-461c-bb35-f1da3990b080",
      "citizenId": "b438b6fa-765b-4706-8b22-88adb9b5534a",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "PIURA",
      "createdAt": "2026-01-01T02:56:00.000Z",
      "updatedAt": "2026-01-01T02:57:00.000Z"
    },
    {
      "id": "c62bba47-0574-494a-99d3-cd0650cecb53",
      "citizenId": "5db1bf77-b355-4f22-a74d-6ad4b64e972e",
      "type": "TRANSPORT",
      "status": "APPROVED",
      "region": "PIURA",
      "createdAt": "2026-01-01T02:58:00.000Z",
      "updatedAt": "2026-01-01T02:59:00.000Z"
    },
    {
      "id": "eef1b5b8-f71a-4759-9d3a-bf38b0d5a6ec",
      "citizenId": "5f97849b-143b-4e6a-8026-aa32f571ea86",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:00:00.000Z",
      "updatedAt": "2026-01-01T03:01:00.000Z"
    },
    {
      "id": "e881e67f-d1c3-42d8-8711-6f3b88fdd0ff",
      "citizenId": "59a0e328-a4a4-4ee1-82b0-d5b031267eab",
      "type": "BUSINESS",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:02:00.000Z",
      "updatedAt": "2026-01-01T03:03:00.000Z"
    },
    {
      "id": "d0474e5b-c063-4460-a931-75fc4982cb2b",
      "citizenId": "5cc37b63-fad0-4481-9f35-3134a4505829",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "PIURA",
      "createdAt": "2026-01-01T03:04:00.000Z",
      "updatedAt": "2026-01-01T03:05:00.000Z"
    },
    {
      "id": "192a5b3a-f745-4398-a8a0-2302da203b78",
      "citizenId": "f30cd8e2-409e-491b-8a2d-e649fbccfd43",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T03:06:00.000Z",
      "updatedAt": "2026-01-01T03:07:00.000Z"
    },
    {
      "id": "ffba31e4-3e24-4202-a782-b8953c58be7f",
      "citizenId": "55edbf63-1421-4959-b3a3-4b858be93bc3",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T03:08:00.000Z",
      "updatedAt": "2026-01-01T03:09:00.000Z"
    },
    {
      "id": "96c99288-bb92-4f92-8c24-921a053e9165",
      "citizenId": "7181afc9-1ba0-4c86-9c67-25d26f3ee178",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T03:10:00.000Z",
      "updatedAt": "2026-01-01T03:11:00.000Z"
    },
    {
      "id": "f1aa8aec-a633-43d1-a10b-0ef30f38a9d7",
      "citizenId": "e9a35c5d-3b1d-4af0-a200-daa6062ee400",
      "type": "CONSTRUCTION",
      "status": "APPROVED",
      "region": "PIURA",
      "createdAt": "2026-01-01T03:12:00.000Z",
      "updatedAt": "2026-01-01T03:13:00.000Z"
    },
    {
      "id": "2d5fcf80-d9d4-4d34-9221-8a3e11eb2f01",
      "citizenId": "ed4811d6-af30-40be-8768-da3c2293b54f",
      "type": "CONSTRUCTION",
      "status": "REJECTED",
      "region": "PIURA",
      "createdAt": "2026-01-01T03:14:00.000Z",
      "updatedAt": "2026-01-01T03:15:00.000Z"
    },
    {
      "id": "895611b0-7a71-4c74-a29e-4da0d6d3837e",
      "citizenId": "7bab9f3e-f06a-49fa-a9ee-d6bf37c9c427",
      "type": "CONSTRUCTION",
      "status": "PENDING",
      "region": "CUSCO",
      "createdAt": "2026-01-01T03:16:00.000Z",
      "updatedAt": "2026-01-01T03:17:00.000Z"
    },
    {
      "id": "fcbb5429-ecff-468d-9cc8-9dfcc2df4320",
      "citizenId": "5f97849b-143b-4e6a-8026-aa32f571ea86",
      "type": "TRANSPORT",
      "status": "PENDING",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:18:00.000Z",
      "updatedAt": "2026-01-01T03:19:00.000Z"
    }
  ],
  "applications": [
    {
      "id": "a80ffecc-91da-4192-983a-c01fa436fbf8",
      "citizenId": "53e528ec-243e-4427-8920-1a24adf63bbf",
      "permitId": "ea1f189b-e558-4385-9e4a-6fe50475a55e",
      "status": "DRAFT",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T03:20:00.000Z",
      "updatedAt": "2026-01-01T03:21:00.000Z"
    },
    {
      "id": "22c312e9-c3a3-4818-a337-9b4415576b7d",
      "citizenId": "f478274d-510d-4de1-a66d-44b2ab23bcf4",
      "permitId": "08de1e7f-c28e-4dfd-af89-165e5e39815f",
      "status": "UNDER_REVIEW",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:22:00.000Z",
      "updatedAt": "2026-01-01T03:23:00.000Z"
    },
    {
      "id": "bf5f9428-fdb0-4cbd-a165-cc85120ce0c4",
      "citizenId": "aa276100-b774-4822-9d0e-5e159f1c9af5",
      "permitId": "f1aa8aec-a633-43d1-a10b-0ef30f38a9d7",
      "status": "UNDER_REVIEW",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T03:24:00.000Z",
      "updatedAt": "2026-01-01T03:25:00.000Z"
    },
    {
      "id": "af10db48-6798-4958-9d54-75e9b01661c9",
      "citizenId": "2633a751-8564-4680-bde8-4f6bb63f1734",
      "permitId": "fcbb5429-ecff-468d-9cc8-9dfcc2df4320",
      "status": "UNDER_REVIEW",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:26:00.000Z",
      "updatedAt": "2026-01-01T03:27:00.000Z"
    },
    {
      "id": "79026008-93ec-4d7d-8a10-f8b2bae459e4",
      "citizenId": "aa276100-b774-4822-9d0e-5e159f1c9af5",
      "status": "SUBMITTED",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T03:28:00.000Z",
      "updatedAt": "2026-01-01T03:29:00.000Z"
    },
    {
      "id": "c38b1c15-0d92-4170-8cf0-990c4a314ec7",
      "citizenId": "d4fe34e1-3929-4994-adf4-d45c20621924",
      "permitId": "7004ae60-4f1c-4b9e-9afd-cf951b86fe6f",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:30:00.000Z",
      "updatedAt": "2026-01-01T03:31:00.000Z"
    },
    {
      "id": "4854a271-45a7-44a7-bb6b-93820b297658",
      "citizenId": "1413e078-4c93-4700-9b2f-5b76aae189aa",
      "status": "COMPLETED",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:32:00.000Z",
      "updatedAt": "2026-01-01T03:33:00.000Z"
    },
    {
      "id": "ff02d538-a5d8-43a7-a219-1f3f5ea14669",
      "citizenId": "534f1708-2a4b-4504-b174-a705791a52c1",
      "permitId": "531d8b1d-9179-45b9-add0-ab2ed2eacc21",
      "status": "SUBMITTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:34:00.000Z",
      "updatedAt": "2026-01-01T03:35:00.000Z"
    },
    {
      "id": "a90cc6c0-6633-40af-9e38-c520b43edc0e",
      "citizenId": "7181afc9-1ba0-4c86-9c67-25d26f3ee178",
      "permitId": "2152a98f-577b-43c2-8ff6-e68bce7998b4",
      "status": "SUBMITTED",
      "region": "CUSCO",
      "createdAt": "2026-01-01T03:36:00.000Z",
      "updatedAt": "2026-01-01T03:37:00.000Z"
    },
    {
      "id": "26f00144-2bb6-489d-b6ed-84bb2e310c03",
      "citizenId": "53e528ec-243e-4427-8920-1a24adf63bbf",
      "status": "DRAFT",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T03:38:00.000Z",
      "updatedAt": "2026-01-01T03:39:00.000Z"
    },
    {
      "id": "798a2b04-e226-4643-b3a1-12edff0d5cfb",
      "citizenId": "d861d055-e7e1-4d98-b474-7caae03b6aeb",
      "status": "UNDER_REVIEW",
      "region": "CUSCO",
      "createdAt": "2026-01-01T03:40:00.000Z",
      "updatedAt": "2026-01-01T03:41:00.000Z"
    },
    {
      "id": "13a6c82a-f8ef-4480-a836-1c9a61598c5f",
      "citizenId": "f478274d-510d-4de1-a66d-44b2ab23bcf4",
      "permitId": "2365ad5c-4602-419a-a08c-87a69edbd4c4",
      "status": "UNDER_REVIEW",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:42:00.000Z",
      "updatedAt": "2026-01-01T03:43:00.000Z"
    },
    {
      "id": "5ddc6196-52a7-45f6-820f-6d1764ba144e",
      "citizenId": "d2c44a1a-eb77-4c91-99d5-ec9c1dde2126",
      "permitId": "eef1b5b8-f71a-4759-9d3a-bf38b0d5a6ec",
      "status": "UNDER_REVIEW",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:44:00.000Z",
      "updatedAt": "2026-01-01T03:45:00.000Z"
    },
    {
      "id": "573f521d-454b-4e42-8b71-61fefd02a273",
      "citizenId": "1413e078-4c93-4700-9b2f-5b76aae189aa",
      "permitId": "08de1e7f-c28e-4dfd-af89-165e5e39815f",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:46:00.000Z",
      "updatedAt": "2026-01-01T03:47:00.000Z"
    },
    {
      "id": "93e9a7aa-f92b-4437-9809-ae819dad288d",
      "citizenId": "a0ede228-db47-4399-81a1-0d37fa5d3799",
      "permitId": "954a6dce-129b-430d-9ce4-8ba08f37c46b",
      "status": "UNDER_REVIEW",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:48:00.000Z",
      "updatedAt": "2026-01-01T03:49:00.000Z"
    },
    {
      "id": "9d7036ae-531b-4bac-b715-2feaffe408a7",
      "citizenId": "d861d055-e7e1-4d98-b474-7caae03b6aeb",
      "status": "UNDER_REVIEW",
      "region": "CUSCO",
      "createdAt": "2026-01-01T03:50:00.000Z",
      "updatedAt": "2026-01-01T03:51:00.000Z"
    },
    {
      "id": "d71377e6-17b3-4d0b-a3b9-e179d0c7e137",
      "citizenId": "d861d055-e7e1-4d98-b474-7caae03b6aeb",
      "permitId": "531d8b1d-9179-45b9-add0-ab2ed2eacc21",
      "status": "DRAFT",
      "region": "CUSCO",
      "createdAt": "2026-01-01T03:52:00.000Z",
      "updatedAt": "2026-01-01T03:53:00.000Z"
    },
    {
      "id": "5b91606e-ab4a-4fbd-a273-9a0fca55115c",
      "citizenId": "5f97849b-143b-4e6a-8026-aa32f571ea86",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:54:00.000Z",
      "updatedAt": "2026-01-01T03:55:00.000Z"
    },
    {
      "id": "be643caf-f122-486c-a31a-2c465f466ddd",
      "citizenId": "475c7df3-9df4-4b0e-a1bf-8399a2e90a30",
      "status": "SUBMITTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T03:56:00.000Z",
      "updatedAt": "2026-01-01T03:57:00.000Z"
    },
    {
      "id": "960b707f-2a65-4260-8595-265f97fc5783",
      "citizenId": "ed4811d6-af30-40be-8768-da3c2293b54f",
      "status": "DRAFT",
      "region": "PIURA",
      "createdAt": "2026-01-01T03:58:00.000Z",
      "updatedAt": "2026-01-01T03:59:00.000Z"
    },
    {
      "id": "31067b9d-ad98-4f68-ab76-a0df9779b452",
      "citizenId": "56ba8532-11d6-40e3-b43f-1bead3ab7dbe",
      "status": "SUBMITTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:00:00.000Z",
      "updatedAt": "2026-01-01T04:01:00.000Z"
    },
    {
      "id": "1fd410c1-41f5-43ba-958a-6cbd19b095ed",
      "citizenId": "a0ede228-db47-4399-81a1-0d37fa5d3799",
      "status": "COMPLETED",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:02:00.000Z",
      "updatedAt": "2026-01-01T04:03:00.000Z"
    },
    {
      "id": "d8cb088e-8e36-4855-a22d-b7c2391a5ea7",
      "citizenId": "d190b013-e589-439a-b467-e9f8807e3065",
      "permitId": "044c2b64-e4cc-4650-8720-924bbfe8f588",
      "status": "DRAFT",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:04:00.000Z",
      "updatedAt": "2026-01-01T04:05:00.000Z"
    },
    {
      "id": "6dbafe6b-8b79-42b0-b08a-4e82e9b5d995",
      "citizenId": "91d98546-ae8a-499a-ad1c-3391eab09822",
      "status": "COMPLETED",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:06:00.000Z",
      "updatedAt": "2026-01-01T04:07:00.000Z"
    },
    {
      "id": "c7f41d85-6f08-43d9-8795-c9d92cdc7ac4",
      "citizenId": "e5cb00ad-e294-43b6-97d3-8d29dce0b38c",
      "status": "COMPLETED",
      "region": "PIURA",
      "createdAt": "2026-01-01T04:08:00.000Z",
      "updatedAt": "2026-01-01T04:09:00.000Z"
    },
    {
      "id": "fc6dd855-8d61-450e-a3f6-8c0660bc9633",
      "citizenId": "49c1f70f-4475-4228-91b5-f1045ddbdbd7",
      "permitId": "85203805-0a8e-4abe-ae59-69ff71f10bd9",
      "status": "SUBMITTED",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T04:10:00.000Z",
      "updatedAt": "2026-01-01T04:11:00.000Z"
    },
    {
      "id": "1a0f4893-2cb9-42ca-8972-3d3e2a690531",
      "citizenId": "458dab35-2bfb-41b6-b1fb-9d5a718a721a",
      "permitId": "d8494c15-072f-45cd-a1a5-4c44c56b2b5d",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:12:00.000Z",
      "updatedAt": "2026-01-01T04:13:00.000Z"
    },
    {
      "id": "51247e55-b742-403e-afc7-bd52290f7383",
      "citizenId": "38a049d3-ed6d-4d41-b1e7-a6cdeaed494a",
      "status": "COMPLETED",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:14:00.000Z",
      "updatedAt": "2026-01-01T04:15:00.000Z"
    },
    {
      "id": "238d7acc-ac9e-45da-a9b0-c32ae83bebce",
      "citizenId": "59a0e328-a4a4-4ee1-82b0-d5b031267eab",
      "permitId": "85203805-0a8e-4abe-ae59-69ff71f10bd9",
      "status": "COMPLETED",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:16:00.000Z",
      "updatedAt": "2026-01-01T04:17:00.000Z"
    },
    {
      "id": "53ae19bd-8a83-414d-a113-46d9cec487d3",
      "citizenId": "6dd1593e-b311-436c-920e-55864bcdcb3b",
      "status": "DRAFT",
      "region": "PIURA",
      "createdAt": "2026-01-01T04:18:00.000Z",
      "updatedAt": "2026-01-01T04:19:00.000Z"
    },
    {
      "id": "3a53d397-73da-4cbc-939c-7947d3ba1a72",
      "citizenId": "2633a751-8564-4680-bde8-4f6bb63f1734",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:20:00.000Z",
      "updatedAt": "2026-01-01T04:21:00.000Z"
    },
    {
      "id": "3c556b9f-dfc6-4e61-83f2-6d8ad175a753",
      "citizenId": "1df36bac-e482-4fc2-8bc2-7d505c14d268",
      "permitId": "2365ad5c-4602-419a-a08c-87a69edbd4c4",
      "status": "UNDER_REVIEW",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:22:00.000Z",
      "updatedAt": "2026-01-01T04:23:00.000Z"
    },
    {
      "id": "a6a1997c-5515-451b-b0e1-32afd118cb80",
      "citizenId": "a0ede228-db47-4399-81a1-0d37fa5d3799",
      "permitId": "4fa54458-9a09-49e3-b0f9-156c4f9189fe",
      "status": "COMPLETED",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:24:00.000Z",
      "updatedAt": "2026-01-01T04:25:00.000Z"
    },
    {
      "id": "b5c17f93-8350-4e2c-9b00-55818ccdb4d9",
      "citizenId": "5f97849b-143b-4e6a-8026-aa32f571ea86",
      "permitId": "85203805-0a8e-4abe-ae59-69ff71f10bd9",
      "status": "SUBMITTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:26:00.000Z",
      "updatedAt": "2026-01-01T04:27:00.000Z"
    },
    {
      "id": "d65373df-5209-4ce0-bf50-1b59d69dfba5",
      "citizenId": "c5bfef09-33dc-4583-b0eb-8066222913f3",
      "status": "UNDER_REVIEW",
      "region": "PIURA",
      "createdAt": "2026-01-01T04:28:00.000Z",
      "updatedAt": "2026-01-01T04:29:00.000Z"
    },
    {
      "id": "0bb54c3a-d505-4a7e-a8fa-da89d9e467ac",
      "citizenId": "d702bbc5-5c6b-4951-91e7-f5355a0c6677",
      "status": "COMPLETED",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:30:00.000Z",
      "updatedAt": "2026-01-01T04:31:00.000Z"
    },
    {
      "id": "041cc18e-2abe-4987-8572-a307c3cba947",
      "citizenId": "1413e078-4c93-4700-9b2f-5b76aae189aa",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:32:00.000Z",
      "updatedAt": "2026-01-01T04:33:00.000Z"
    },
    {
      "id": "bb7b5c5a-a6be-4141-a23f-b9915e004ad0",
      "citizenId": "d861d055-e7e1-4d98-b474-7caae03b6aeb",
      "permitId": "88056bb6-6b69-440b-ba10-023d6af7c6b4",
      "status": "UNDER_REVIEW",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:34:00.000Z",
      "updatedAt": "2026-01-01T04:35:00.000Z"
    },
    {
      "id": "e5792782-c13a-4417-8572-f247e192a9c0",
      "citizenId": "d2c44a1a-eb77-4c91-99d5-ec9c1dde2126",
      "status": "UNDER_REVIEW",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:36:00.000Z",
      "updatedAt": "2026-01-01T04:37:00.000Z"
    },
    {
      "id": "ef454a61-acf6-4127-abac-8d35169752b8",
      "citizenId": "0fee6b36-d2e7-464e-88cd-e4597e6796f1",
      "status": "UNDER_REVIEW",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T04:38:00.000Z",
      "updatedAt": "2026-01-01T04:39:00.000Z"
    },
    {
      "id": "842ffe2b-a63d-4caa-ad6b-4f5cbcd9332b",
      "citizenId": "d861d055-e7e1-4d98-b474-7caae03b6aeb",
      "permitId": "e881e67f-d1c3-42d8-8711-6f3b88fdd0ff",
      "status": "SUBMITTED",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:40:00.000Z",
      "updatedAt": "2026-01-01T04:41:00.000Z"
    },
    {
      "id": "62058063-7c62-482d-9a08-7ddbd995687a",
      "citizenId": "c165204c-4d9c-4fa5-a4fb-837cfa07d85d",
      "status": "UNDER_REVIEW",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:42:00.000Z",
      "updatedAt": "2026-01-01T04:43:00.000Z"
    },
    {
      "id": "c5b610e1-c633-48f9-b852-28653cf4b2b4",
      "citizenId": "f7c799fa-3037-46cc-b1f8-96adafbd0aa1",
      "permitId": "e881e67f-d1c3-42d8-8711-6f3b88fdd0ff",
      "status": "DRAFT",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T04:44:00.000Z",
      "updatedAt": "2026-01-01T04:45:00.000Z"
    },
    {
      "id": "beb540bf-d1d9-41a1-a0bd-51698bdf7453",
      "citizenId": "f478274d-510d-4de1-a66d-44b2ab23bcf4",
      "permitId": "9211c332-984a-4cf7-864c-f9ab6349a70e",
      "status": "SUBMITTED",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:46:00.000Z",
      "updatedAt": "2026-01-01T04:47:00.000Z"
    },
    {
      "id": "aedf724d-6bba-40a9-b406-8bde33741fab",
      "citizenId": "e5cb00ad-e294-43b6-97d3-8d29dce0b38c",
      "status": "DRAFT",
      "region": "PIURA",
      "createdAt": "2026-01-01T04:48:00.000Z",
      "updatedAt": "2026-01-01T04:49:00.000Z"
    },
    {
      "id": "75e7e4eb-e35e-4010-acfb-eeb9578f0e2b",
      "citizenId": "c165204c-4d9c-4fa5-a4fb-837cfa07d85d",
      "permitId": "38d7c2a2-cb67-42ae-8856-377f6d28998c",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:50:00.000Z",
      "updatedAt": "2026-01-01T04:51:00.000Z"
    },
    {
      "id": "5060cd82-b1f2-4ab9-a0dc-b2292c52435a",
      "citizenId": "7181afc9-1ba0-4c86-9c67-25d26f3ee178",
      "status": "COMPLETED",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:52:00.000Z",
      "updatedAt": "2026-01-01T04:53:00.000Z"
    },
    {
      "id": "1f44f0e2-8109-4739-aca4-94867847de2a",
      "citizenId": "d861d055-e7e1-4d98-b474-7caae03b6aeb",
      "permitId": "2dd3bff7-d893-463b-9ac9-4fa7c4c51c3a",
      "status": "UNDER_REVIEW",
      "region": "CUSCO",
      "createdAt": "2026-01-01T04:54:00.000Z",
      "updatedAt": "2026-01-01T04:55:00.000Z"
    },
    {
      "id": "bfdcc663-e8f1-4d0b-84e7-89ddcc912a37",
      "citizenId": "0fee6b36-d2e7-464e-88cd-e4597e6796f1",
      "permitId": "e881e67f-d1c3-42d8-8711-6f3b88fdd0ff",
      "status": "DRAFT",
      "region": "AREQUIPA",
      "createdAt": "2026-01-01T04:56:00.000Z",
      "updatedAt": "2026-01-01T04:57:00.000Z"
    },
    {
      "id": "76c793d9-d3f4-4a20-8ad1-8db9abe4db3c",
      "citizenId": "d2c44a1a-eb77-4c91-99d5-ec9c1dde2126",
      "status": "DRAFT",
      "region": "LIMA",
      "createdAt": "2026-01-01T04:58:00.000Z",
      "updatedAt": "2026-01-01T04:59:00.000Z"
    }
  ]
}
````

## File: tools/mock-api/generate-db.ts
````typescript
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { faker } from '@faker-js/faker';

faker.seed(123);

type Citizen = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  region: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  updatedAt: string;
};

type Permit = {
  id: string;
  citizenId: string;
  type: 'TRANSPORT' | 'BUSINESS' | 'CONSTRUCTION';
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  region: string;
  createdAt: string;
  updatedAt: string;
};

type Application = {
  id: string;
  citizenId: string;
  permitId?: string;
  status: 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'COMPLETED';
  region: string;
  createdAt: string;
  updatedAt: string;
};

const baseDate = new Date('2026-01-01T00:00:00.000Z');

let offset = 0;

const nextDate = () => {
  const d = new Date(baseDate);
  d.setMinutes(offset++);
  return d.toISOString();
};;

const regions = ['LIMA', 'CUSCO', 'AREQUIPA', 'PIURA'];

const citizens: Citizen[] = Array.from({ length: 50 }).map(() => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  region: faker.helpers.arrayElement(regions),
  status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE']),
  createdAt: nextDate(),
  updatedAt: nextDate(),
}));

const permits: Permit[] = Array.from({ length: 50 }).map(() => {
  const citizen = faker.helpers.arrayElement(citizens);

  return {
    id: faker.string.uuid(),
    citizenId: citizen.id,
    type: faker.helpers.arrayElement(['TRANSPORT', 'BUSINESS', 'CONSTRUCTION']),
    status: faker.helpers.arrayElement(['PENDING', 'APPROVED', 'REJECTED']),
    region: citizen.region,
    createdAt: nextDate(),
    updatedAt: nextDate(),
  };
});

const applications: Application[] = Array.from({ length: 50 }).map(() => {
  const citizen = faker.helpers.arrayElement(citizens);
  const maybePermit =
    faker.number.int({ min: 0, max: 1 }) === 1
      ? faker.helpers.arrayElement(permits)
      : undefined;

  return {
    id: faker.string.uuid(),
    citizenId: citizen.id,
    permitId: maybePermit?.id,
    status: faker.helpers.arrayElement([
      'DRAFT',
      'SUBMITTED',
      'UNDER_REVIEW',
      'COMPLETED',
    ]),
    region: citizen.region,
    createdAt: nextDate(),
    updatedAt: nextDate(),
  };
});

const db = {
  citizens,
  permits,
  applications,
};

const outputPath = resolve(process.cwd(), 'tools/mock-api/db.json');

writeFileSync(outputPath, JSON.stringify(db, null, 2));

console.log('Mock DB generated at:', outputPath);
````

## File: vitest.workspace.ts
````typescript
export default [
  '**/vite.config.{mjs,js,ts,mts}',
  '**/vitest.config.{mjs,js,ts,mts}',
];
````

## File: .editorconfig
````
# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
````

## File: .github/workflows/ci.yml
````yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

concurrency:
  group: ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

permissions:
  contents: read
  actions: read

env:
  CI: true
  NX_DAEMON: false
  FORCE_COLOR: 1

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node LTS
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Restore Nx cache
        uses: actions/cache@v4
        with:
          path: .nx/cache
          key: nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-${{ github.ref_name }}
          restore-keys: |
            nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-
            nx-${{ runner.os }}-

      - name: Install dependencies
        run: npm ci --prefer-offline --no-audit

      - name: Fetch main for nx affected
        if: github.event_name == 'pull_request'
        run: git fetch --no-tags --prune --depth=1 origin main

      - name: Run lint
        shell: bash
        run: |
          set -euxo pipefail

          if [[ "${GITHUB_EVENT_NAME}" == "pull_request" ]]; then
            npx nx affected -t lint --base=origin/main --head="${GITHUB_SHA}" --parallel=3
          else
            npx nx run-many -t lint --projects=shell,legacy-remote,modern-remote --parallel=3
          fi

  unit:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node LTS
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Restore Nx cache
        uses: actions/cache@v4
        with:
          path: .nx/cache
          key: nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-${{ github.ref_name }}
          restore-keys: |
            nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-
            nx-${{ runner.os }}-

      - name: Install dependencies
        run: npm ci --prefer-offline --no-audit

      - name: Fetch main for nx affected
        if: github.event_name == 'pull_request'
        run: git fetch --no-tags --prune --depth=1 origin main

      - name: Run unit tests
        shell: bash
        run: |
          set -euxo pipefail

          if [[ "${GITHUB_EVENT_NAME}" == "pull_request" ]]; then
            npx nx affected -t test --base=origin/main --head="${GITHUB_SHA}" --parallel=4
          else
            npx nx run-many -t test --projects=legacy,shell,legacy-remote,modern-remote --parallel=4
          fi

      - name: Upload coverage
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: coverage-${{ github.run_id }}
          path: coverage
          if-no-files-found: warn
          retention-days: 7

  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node LTS
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Restore Nx cache
        uses: actions/cache@v4
        with:
          path: .nx/cache
          key: nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-${{ github.ref_name }}
          restore-keys: |
            nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-
            nx-${{ runner.os }}-

      - name: Install dependencies
        run: npm ci --prefer-offline --no-audit

      - name: Fetch main for nx affected
        if: github.event_name == 'pull_request'
        run: git fetch --no-tags --prune --depth=1 origin main

      - name: Build production apps
        shell: bash
        run: |
          set -euxo pipefail

          if [[ "${GITHUB_EVENT_NAME}" == "pull_request" ]]; then
            AFFECTED_APPS="$(
              npx nx show projects --affected --withTarget=build --base=origin/main --head="${GITHUB_SHA}" --json \
              | tr -d '[]"' \
              | tr ',' '\n' \
              | grep -E '^(shell|legacy-remote|modern-remote)$' \
              | paste -sd, -
            )" || true

            if [[ -z "${AFFECTED_APPS:-}" ]]; then
              echo "No deployable MFEs affected in this PR."
              exit 0
            fi

            echo "Affected build apps: ${AFFECTED_APPS}"
            npx nx run-many -t build --projects="${AFFECTED_APPS}" --configuration=production --parallel=3
          else
            npx nx run-many -t build --projects=shell,legacy-remote,modern-remote --configuration=production --parallel=3
          fi

      - name: Debug dist outputs
        if: always()
        shell: bash
        run: |
          set +e
          echo "dist/apps:"
          find dist/apps -maxdepth 3 -type f | sort || true
          echo
          echo "shell manifest (source):"
          cat apps/shell/public/federation.manifest.json || true

      - name: Upload build artifacts
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: dist-apps-${{ github.run_id }}
          path: dist/apps
          if-no-files-found: warn
          retention-days: 7

  e2e:
    runs-on: ubuntu-latest
    needs: [lint, unit, build]
    timeout-minutes: 30

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node LTS
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Restore Nx cache
        uses: actions/cache@v4
        with:
          path: .nx/cache
          key: nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-${{ github.ref_name }}
          restore-keys: |
            nx-${{ runner.os }}-${{ hashFiles('package-lock.json') }}-
            nx-${{ runner.os }}-

      - name: Install dependencies
        run: npm ci --prefer-offline --no-audit

      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium firefox webkit

      - name: Create CI Playwright config
        shell: bash
        run: |
          cat > apps/shell-e2e/playwright.ci.config.ts <<'EOF'
          import baseConfig from './playwright.config';

          export default {
            ...baseConfig,
            retries: 2,
            reporter: [
              ['html', { outputFolder: '../../dist/.playwright/apps/shell-e2e/playwright-report', open: 'never' }],
              ['list']
            ],
            use: {
              ...(baseConfig.use ?? {}),
              baseURL: process.env['BASE_URL'] || 'http://127.0.0.1:4200',
              trace: 'on-first-retry',
              video: 'retain-on-failure',
              screenshot: 'only-on-failure',
            },
          };
          EOF

      - name: Start backend and MFEs
        shell: bash
        run: |
          set -euxo pipefail
          mkdir -p /tmp/govportal

          npx tsx tools/mock-api/generate-db.ts

          nohup npx json-server tools/mock-api/db.json --port 3001 \
            >/tmp/govportal/mock-api.log 2>&1 &
          echo $! >/tmp/govportal/mock-api.pid

          nohup npx nx serve shell \
            >/tmp/govportal/shell.log 2>&1 &
          echo $! >/tmp/govportal/shell.pid

          nohup npx nx serve legacy-remote \
            >/tmp/govportal/legacy.log 2>&1 &
          echo $! >/tmp/govportal/legacy.pid

          nohup npx nx serve modern-remote \
            >/tmp/govportal/modern.log 2>&1 &
          echo $! >/tmp/govportal/modern.pid

      - name: Wait for services
        shell: bash
        run: |
          set -euxo pipefail

          wait_for() {
            local name="$1"
            local url="$2"

            for i in {1..90}; do
              if curl -fsS "$url" >/dev/null; then
                echo "$name is ready: $url"
                return 0
              fi
              sleep 2
            done

            echo "Timed out waiting for $name: $url"
            return 1
          }

          wait_for "Mock API" "http://127.0.0.1:3001/citizens"
          wait_for "Legacy remote" "http://127.0.0.1:4201/remoteEntry.json"
          wait_for "Modern remote" "http://127.0.0.1:4202/remoteEntry.json"
          wait_for "Shell" "http://127.0.0.1:4200"

      - name: Run Playwright
        env:
          BASE_URL: http://127.0.0.1:4200
        run: npx playwright test --config apps/shell-e2e/playwright.ci.config.ts

      - name: Debug running services
        if: failure()
        shell: bash
        run: |
          set +e
          echo "Open ports:"
          ss -ltnp | grep -E ':3001|:4200|:4201|:4202' || true
          echo
          echo "Shell manifest (source):"
          cat apps/shell/public/federation.manifest.json || true
          echo
          echo "HTTP checks:"
          curl -fsS http://127.0.0.1:4200 || true
          curl -fsS http://127.0.0.1:4201/remoteEntry.json || true
          curl -fsS http://127.0.0.1:4202/remoteEntry.json || true
          echo
          echo "Tail logs:"
          tail -n 200 /tmp/govportal/mock-api.log || true
          tail -n 200 /tmp/govportal/shell.log || true
          tail -n 200 /tmp/govportal/legacy.log || true
          tail -n 200 /tmp/govportal/modern.log || true

      - name: Upload Playwright artifacts
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-shell-e2e-${{ github.run_id }}
          path: |
            dist/.playwright/apps/shell-e2e
            playwright-report
            test-results
            /tmp/govportal/*.log
          if-no-files-found: warn
          retention-days: 7

      - name: Stop background services
        if: always()
        shell: bash
        run: |
          set +e
          for pidfile in /tmp/govportal/*.pid; do
            [[ -f "$pidfile" ]] || continue
            kill "$(cat "$pidfile")" 2>/dev/null || true
          done
````

## File: .gitignore
````
# See https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files for more about ignoring files.

# compiled output
dist
tmp
out-tsc

# dependencies
node_modules

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# misc
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db

.nx/cache
.nx/workspace-data

.angular

__screenshots__/

vitest.config.*.timestamp*
````

## File: .prettierignore
````
# Add files here to ignore them from prettier formatting
/dist
/coverage
/.nx/cache
/.nx/workspace-data
.angular
````

## File: .prettierrc
````
{
  "singleQuote": true
}
````

## File: eslint.config.mjs
````javascript
import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc', '**/vitest.config.*.timestamp*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
````

## File: nx.json
````json
{
  "$schema": "./node_modules/nx/schemas/nx-schema.json",
  "defaultBase": "main",
  "namedInputs": {
    "default": ["{projectRoot}/**/*", "sharedGlobals"],
    "production": [
      "default",
      "!{projectRoot}/.eslintrc.json",
      "!{projectRoot}/eslint.config.mjs",
      "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)",
      "!{projectRoot}/tsconfig.spec.json"
    ],
    "sharedGlobals": ["{workspaceRoot}/.github/workflows/ci.yml"]
  },
  "targetDefaults": {
    "@angular/build:application": {
      "cache": true,
      "dependsOn": ["^build"],
      "inputs": ["production", "^production"]
    },
    "@nx/eslint:lint": {
      "cache": true,
      "inputs": [
        "default",
        "{workspaceRoot}/.eslintrc.json",
        "{workspaceRoot}/.eslintignore",
        "{workspaceRoot}/eslint.config.mjs"
      ]
    },
    "@angular/build:unit-test": {
      "cache": true,
      "inputs": ["default", "^production"]
    },
    "@nx/vitest:test": {
      "cache": true,
      "inputs": ["default", "^production"]
    }
  },
  "generators": {
    "@nx/angular:application": {
      "e2eTestRunner": "none",
      "linter": "eslint",
      "style": "scss",
      "unitTestRunner": "vitest-angular"
    },
    "@nx/angular:component": {
      "style": "scss"
    }
  },
  "plugins": [
    {
      "plugin": "@nx/eslint/plugin",
      "options": {
        "targetName": "eslint:lint"
      }
    },
    {
      "plugin": "@nx/playwright/plugin",
      "options": {
        "targetName": "e2e"
      }
    }
  ]
}
````

## File: package.json
````json
{
  "name": "@govportal/source",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "dev:db": "tsx tools/mock-api/generate-db.ts",
    "dev:api": "json-server tools/mock-api/db.json --port 3001",
    "dev:mock": "npm run dev:db && npm run dev:api",
    "start:mfes": "npx nx run-many --target=serve --projects=shell,legacy-remote,modern-remote",
    "e2e": "concurrently -k -n API,SHELL,LEGACY,MODERN \"npm run dev:mock\" \"nx serve shell\" \"nx serve legacy\" \"nx serve modern\""
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~21.1.0",
    "@angular/common": "~21.1.0",
    "@angular/compiler": "~21.1.0",
    "@angular/core": "~21.1.0",
    "@angular/forms": "~21.1.0",
    "@angular/platform-browser": "~21.1.0",
    "@angular/router": "~21.1.0",
    "@ngrx/signals": "^21.0.1",
    "@softarc/native-federation-node": "^3.3.4",
    "es-module-shims": "^1.5.12",
    "rxjs": "~7.8.0"
  },
  "devDependencies": {
    "@analogjs/vite-plugin-angular": "~2.1.2",
    "@analogjs/vitest-angular": "~2.1.2",
    "@angular-architects/native-federation": "^21.1.1",
    "@angular-devkit/build-angular": "~21.1.0",
    "@angular-devkit/core": "~21.1.0",
    "@angular-devkit/schematics": "~21.1.0",
    "@angular/build": "~21.1.0",
    "@angular/cli": "~21.1.0",
    "@angular/compiler-cli": "~21.1.0",
    "@angular/language-service": "~21.1.0",
    "@eslint/js": "^9.8.0",
    "@faker-js/faker": "^10.3.0",
    "@nx/angular": "22.5.2",
    "@nx/devkit": "22.5.2",
    "@nx/eslint": "22.5.2",
    "@nx/eslint-plugin": "22.5.2",
    "@nx/js": "22.5.2",
    "@nx/playwright": "^22.5.2",
    "@nx/vite": "^22.5.2",
    "@nx/vitest": "22.5.2",
    "@nx/web": "22.5.2",
    "@nx/workspace": "22.5.2",
    "@playwright/test": "^1.36.0",
    "@schematics/angular": "~21.1.0",
    "@swc-node/register": "~1.11.1",
    "@swc/core": "~1.15.5",
    "@swc/helpers": "~0.5.18",
    "@types/node": "20.19.9",
    "@typescript-eslint/utils": "^8.40.0",
    "@vitest/coverage-v8": "^4.0.18",
    "@vitest/ui": "^4.0.18",
    "angular-eslint": "^21.0.1",
    "concurrently": "^9.2.1",
    "eslint": "^9.8.0",
    "eslint-config-prettier": "^10.0.0",
    "eslint-plugin-playwright": "^1.6.2",
    "jsdom": "^27.1.0",
    "json-server": "^1.0.0-beta.9",
    "nx": "22.5.2",
    "prettier": "~3.6.2",
    "tslib": "^2.3.0",
    "tsx": "^4.21.0",
    "typescript": "~5.9.2",
    "typescript-eslint": "^8.40.0",
    "vite": "^7.0.0",
    "vitest": "^4.0.18"
  },
  "overrides": {
    "@angular/build": "~21.1.0",
    "@angular-devkit/build-angular": "~21.1.0",
    "@angular/compiler-cli": "~21.1.0"
  }
}
````

## File: README.md
````markdown
# GovPortal Frontend

Monorepo Nx con Angular 21 orientado a una arquitectura de microfrontends con `shell`, `legacy-remote` y `modern-remote`.

## Workspace actual

Proyectos Nx verificados hoy:

- Aplicaciones: `shell`, `legacy-remote`, `modern-remote`
- E2E: `shell-e2e`, `modern-remote-e2e`
- Librerias: `domain`, `core`, `http`, `legacy`, `gov`

La entrada principal del sistema es `shell`. El host monta dos remotes:

- `/legacy/*` -> `legacy-remote`
- `/modern/*` -> `modern-remote`

## Arquitectura

### Flujo de alto nivel

```text
shell
  -> legacy-remote
  -> modern-remote

legacy-remote / modern-remote
  -> data-access
  -> /api/*
  -> json-server mock API
```

### Capas

- `apps/shell`
  - Host de microfrontends con Native Federation.
  - Redirige `/` a `/legacy`.
- `apps/legacy`
  - Remote basado en facades y API clients legacy.
- `apps/modern`
  - Remote basado en stores con `@ngrx/signals`.
  - Hoy sigue consumiendo datos a traves de clients legacy y mappers compartidos.
- `libs/src`
  - Dominio compartido expuesto como `@gov/domain`.
- `libs/data-access/legacy`
  - DTOs, API clients, mappers y facades.
- `libs/data-access/gov`
  - Stores para la UI moderna.
- `libs/core`
  - Componentes reutilizables como `PageHeaderComponent`.
- `libs/core/http`
  - Infraestructura HTTP compartida.

## Rutas activas

Rutas del host:

- `/legacy/citizens`
- `/legacy/citizens/:id`
- `/legacy/permits`
- `/legacy/applications`
- `/modern/citizens`
- `/modern/citizens/:id`
- `/modern/permits`
- `/modern/applications`

Comportamiento verificado en codigo:

- El `shell` carga remotos con `loadRemoteModule`.
- La raiz `/` redirige a `/legacy`.
- `legacy` y `modern` exponen el selector `Source` para cambiar entre arquitecturas.
- El cambio de `Source` conserva subruta y query params.
- Ambos remotes tienen lista y detalle de ciudadanos.
- El detalle moderno agrega enlaces a `permits` y `applications` usando query params.

## Datos y ACL

La UI no consume DTOs legacy directamente.

- `libs/data-access/legacy` encapsula `Legacy*ApiClient`, DTOs y mappers.
- `legacy-remote` consume facades como `CitizensFacade`.
- `modern-remote` consume stores como `CitizensStore`.
- `CitizensStore` todavia usa `LegacyCitizensApiClient` y `mapLegacyCitizen`, asi que la separacion de backend moderno aun esta pendiente.

ADR relacionadas:

- [ADR 0001](/c:/D/Angular/github/govportal/govportal/docs/adr/0001-data-access-anti-corruption-layer.md)
- [ADR 0002](/c:/D/Angular/github/govportal/govportal/docs/adr/0002-project-evolution-and-architectural-decisions.md)

## Como correr el proyecto

### Requisitos

- Node.js 20+
- npm

### Instalacion

```bash
npm install
```

### Mock API

```bash
npm run dev:mock
```

O por separado:

```bash
npm run dev:db
npm run dev:api
```

La API mock escucha en `http://localhost:3001` y `proxy.conf.json` reescribe `/api` hacia ese host.

### Microfrontends

```bash
npm run start:mfes
```

Puertos esperados:

- `shell`: `http://localhost:4200`
- `legacy-remote`: `http://localhost:4201`
- `modern-remote`: `http://localhost:4202`

Flujo recomendado:

Terminal 1:

```bash
npm run dev:mock
```

Terminal 2:

```bash
npm run start:mfes
```

Luego abre `http://localhost:4200`.

## Targets utiles

Ejemplos verificados con Nx:

```bash
npx nx show projects --json
npx nx run shell:serve
npx nx run legacy-remote:serve
npx nx run modern-remote:serve
npx nx test legacy
npx nx e2e shell-e2e
npx nx e2e modern-remote-e2e
```

## Testing

Cobertura verificada hoy:

- `legacy` tiene target `test` con Vitest.
- `shell`, `legacy-remote` y `modern-remote` tienen target `test` con Vitest.
- `shell-e2e` y `modern-remote-e2e` tienen target `e2e` con Playwright.

Limitaciones actuales observables:

- `gov` no expone target `test`.
- `modern-remote-e2e` solo contiene el spec inicial `src/example.spec.ts`.
- `shell-e2e` contiene el escenario mas representativo hoy: navegacion entre MFEs y cambio de `Source`.

## Convenciones tecnicas vigentes

- Angular standalone components.
- `ChangeDetectionStrategy.OnPush` en pantallas principales.
- Control flow moderno con `@if` y `@for`.
- Native Federation con `@angular-architects/native-federation`.
- Estado legacy con `signals` + `effect`.
- Estado moderno con `@ngrx/signals` + `rxMethod`.
- `/api/*` como contrato de acceso a datos para desarrollo local.

## Troubleshooting

### 1) `Port 4200`, `4201` o `4202` ocupado

- Cierra procesos previos.
- O ajusta los puertos en los targets `serve-original`.

### 2) `/api/*` falla o no hay datos

- Verifica `http://localhost:3001`.
- Regenera la base mock:

```bash
npm run dev:db
```

### 3) Error de rutas en el host

Las rutas de negocio viven bajo prefijo:

- `/legacy/...`
- `/modern/...`

### 4) Cambios en el mock no se reflejan

- Regenera `tools/mock-api/db.json`.
- Reinicia `json-server`.

## Scripts disponibles

```bash
npm run dev:db
npm run dev:api
npm run dev:mock
npm run start:mfes
```
````

## File: tsconfig.base.json
````json
{
  "compileOnSave": false,
  "compilerOptions": {
    "rootDir": ".",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "es2015",
    "module": "esnext",
    "lib": ["es2020", "dom"],
    "skipLibCheck": true,
    "skipDefaultLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@gov/domain": ["libs/src/index.ts"],
      "@gov/data-access": ["libs/data-access/src/index.ts"],
      "@gov/data-access/legacy": ["libs/data-access/legacy/src/index.ts"],
      "@gov/data-access/gov": ["libs/data-access/gov/src/index.ts"],
      "@gov/core": ["libs/core/src/index.ts"],
      "@gov/core/http": ["libs/core/http/src/index.ts"]
    }
  },
  "exclude": ["node_modules", "tmp"]
}
````
