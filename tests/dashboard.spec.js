const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const config = require('../utils/config');

test('Dashboard visibility after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await loginPage.navigate();
  await loginPage.login(
    config.users.validUser.username,
    config.users.validUser.password
  );

  const visible = await dashboard.isDashboardVisible();
  expect(visible).toBeTruthy();
});