class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeader = 'h6:has-text("Dashboard")';
  }

  async isDashboardVisible() {
    return await this.page.isVisible(this.dashboardHeader);
  }
}

module.exports = DashboardPage;