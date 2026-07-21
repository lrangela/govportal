import { test, expect } from '@playwright/test';

test.describe('MFE Navigation and Source Toggle', () => {
  test('Shell navigates to Legacy MFE via main navigation', async ({ page }) => {
    await page.goto('/');

    // Navegar al listado de ciudadanos legacy desde el header
    await page.getByRole('navigation', { name: 'Navegación Principal' })
      .getByRole('link', { name: 'Ciudadanos' })
      .first()
      .click();

    await page.waitForURL(/\/legacy\/citizens/);
    await expect(page.getByRole('heading', { name: 'Ciudadanos (Legacy API)' })).toBeVisible();
    await expect(page.getByRole('table', { name: 'Listado de Ciudadanos' })).toBeVisible();
  });

  test('Shell navigates to Modern MFE via main navigation', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('navigation', { name: 'Navegación Principal' })
      .getByRole('link', { name: 'Ciudadanos' })
      .nth(1)
      .click();

    await page.waitForURL(/\/modern\/citizens/);
    await expect(page.getByRole('heading', { name: 'Ciudadanos (Modern - NgRx Signals)' })).toBeVisible();
    await expect(page.getByRole('table', { name: 'Listado Moderno de Ciudadanos' })).toBeVisible();
  });

  test('Toggle Source changes architecture maintaining sub-path and query params', async ({ page }) => {
    await page.goto('/');

    // 1. Ir al Legacy desde el header con un deep-link (query param 'q')
    await page.getByRole('navigation', { name: 'Navegación Principal' })
      .getByRole('link', { name: 'Ciudadanos' })
      .first()
      .click();
    await page.waitForURL(/\/legacy\/citizens/);

    // Aplicar el query param de búsqueda
    await page.goto('/legacy/citizens?q=Mario');
    await expect(page.getByRole('heading', { name: 'Ciudadanos (Legacy API)' })).toBeVisible();

    // 2. Cambiar el dropdown "Arquitectura" a "Modern"
    await page.getByLabel('Seleccionar arquitectura de fuente de datos').selectOption('modern');

    // 3. Validar que la URL cambió a la arquitectura moderna pero mantuvo la ruta y el parámetro
    await page.waitForURL(/\/modern\/citizens\?q=Mario/);

    // 4. Validar que la vista de NgRx Signals se renderizó
    await expect(page.getByRole('heading', { name: 'Ciudadanos (Modern - NgRx Signals)' })).toBeVisible();
  });

  test('Main navigation links are accessible and route to the correct MFEs', async ({ page }) => {
    await page.goto('/');

    const nav = page.getByRole('navigation', { name: 'Navegación Principal' });
    await expect(nav.getByRole('link', { name: 'Ciudadanos' }).first()).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Solicitudes' }).nth(1)).toBeVisible();

    await nav.getByRole('link', { name: 'Solicitudes' }).nth(1).click();
    await page.waitForURL(/\/modern\/applications/);
    await expect(page.getByRole('heading', { name: 'Solicitudes (Modern - NgRx Signals)' })).toBeVisible();
  });
});