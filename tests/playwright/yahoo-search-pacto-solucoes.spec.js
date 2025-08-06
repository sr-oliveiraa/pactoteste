import { test, expect } from '@playwright/test';

test('Buscar Pacto Yahoo', async ({ page }) => {
  // Acessa o Yahoo
  await page.goto('https://br.search.yahoo.com');

  
  await page.fill('input[name="p"]', 'Pacto Soluções');

  
  await page.press('input[name="p"]', 'Enter');

  
  await page.waitForLoadState('networkidle');

  
  expect(page.url()).toContain('search');

  
  expect(page.url()).toContain('Pacto');
});
