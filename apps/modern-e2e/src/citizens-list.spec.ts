import { test, expect } from '@playwright/test';

test.describe('Modern Remote - Citizens List', () => {
  test('loads the citizens page with accessible search and table', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Ciudadanos (Modern - NgRx Signals)' })).toBeVisible();

    const searchbox = page.getByRole('searchbox', {
      name: 'Buscar ciudadano por nombre o número de documento',
    });
    await expect(searchbox).toBeVisible();
    await expect(searchbox).toBeEnabled();

    const table = page.getByRole('table', { name: 'Listado Moderno de Ciudadanos' });
    await expect(table).toBeVisible();

    // First data row should link to a citizen detail
    const firstRowLink = table.getByRole('link').first();
    await expect(firstRowLink).toBeVisible();
    await expect(firstRowLink).toHaveAttribute('href', /\/citizens\//);
  });

  test('filters citizens by typing in the search box', async ({ page }) => {
    await page.goto('/');

    const table = page.getByRole('table', { name: 'Listado Moderno de Ciudadanos' });
    await expect(table).toBeVisible();

    const searchbox = page.getByRole('searchbox', {
      name: 'Buscar ciudadano por nombre o número de documento',
    });
    await searchbox.fill('zzzzzz');

    await expect(page.getByText('No se encontraron ciudadanos.')).toBeVisible();
    await expect(table.getByRole('row')).toHaveCount(1); // only the empty row remains
  });
});
