const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/playwright',
  timeout: 120000,
  use: {
    headless: false,
    navigationTimeout: 60000,
    actionTimeout: 60000,
  },
});
