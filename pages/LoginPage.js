class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginBtn = 'button[type="submit"]';
    this.errorMsg = '.oxd-alert-content-text';
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMsg);
  }
}

module.exports = LoginPage;