
import { test, expect } from '@playwright/test';

test('taulukko: caption + thead/tbody', async ({ page }) => {
  await page.goto('/table.html');
  const table = page.locator('main table');
  await expect(table).toHaveCount(1);
  await expect(table.locator('caption')).toHaveCount(1);
  await expect(table.locator('thead th')).toHaveCountGreaterThan(0);
  await expect(table.locator('tbody tr')).toHaveCountGreaterThan(0);
});
