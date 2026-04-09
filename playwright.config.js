const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  reporter: [
    ['html', { open: 'never', outputFolder: 'reports/html-report' }]
  ]
});