import { test, expect } from '@playwright/test';

test('Verificar data de atualização dos termos de segurança UOL', async ({ page }) => {
  await page.goto('https://www.uol.com.br', { timeout: 60000 });

  await page.click('text=Termos', { timeout: 60000 });

  await page.waitForTimeout(3000);

  const content = await page.textContent('body');
  const hasDateInfo = content.includes('atualizado') ||
                     content.includes('última') ||
                     content.includes('revisão') ||
                     content.includes('2024') ||
                     content.includes('2025');

  expect(hasDateInfo).toBeTruthy();
});
