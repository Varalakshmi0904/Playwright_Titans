export class QuotesPage {
  constructor(page) {
    this.page = page;

    this.quotesMenu = page.locator("a").filter({ hasText: /^Quotes$/ });
    this.quotesTitle = page.getByText("QUOTES", { exact: true });

    this.createQuoteLink = page.getByRole("link", { name: "Create Quote" });
    this.createQuoteTitle = page
      .locator("iframe")
      .contentFrame()
      .getByText("CREATE", { exact: true });
    this.titleInput = page.locator("iframe").contentFrame().locator("#name");
    this.validUntilField = page
      .locator("iframe")
      .contentFrame()
      .locator("#Fill-3");
    this.quoteStageSelect = page
      .locator("iframe")
      .contentFrame()
      .locator("#stage");
    this.saveButton = page
      .locator("iframe")
      .contentFrame()
      .getByRole("button", { name: "Save" });
  }

  async hoverOverQuotes() {
    await this.quotesMenu.hover();
  }

  async clickQuotes() {
    await this.quotesMenu.click();
  }

  async clickCreateQuote() {
    await this.quotesMenu.hover();
    await this.createQuoteLink.click();
  }

  async createQuote(data) {
    await this.titleInput.fill(data.Title);
    await this.validUntilField.click();
    await this.page
      .locator("iframe")
      .contentFrame()
      .getByRole("link", { name: String(data.ValidUntilDay), exact: true })
      .click();
    await this.quoteStageSelect.selectOption(data.QuoteStage);
    await this.saveButton.click();
  }
  async quoteHeading(title) {
    return this.page
      .locator("iframe")
      .contentFrame()
      .getByRole("heading", { name: title });
  }
}
