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