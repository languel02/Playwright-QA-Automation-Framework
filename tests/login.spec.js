const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const config = require('../utils/config');

test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      config.users.validUser.username,
      config.users.validUser.password
    );

    await expect(page).toHaveURL(/dashboard/);
  });

  test('Invalid Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      config.users.invalidUser.username,
      config.users.invalidUser.password
    );

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

});