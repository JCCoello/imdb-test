import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[id="suggestion-search"]');
  }

  async goto() {
    await this.page.goto("/");
  }

  async searchFor(searchTerm: string) {
    // Use the locator for the search input stored in this.searchInput
    await this.searchInput.fill(searchTerm); // Types the text into the input field

    // Simulate pressing the 'Enter' key on the search input element
    await this.searchInput.press("Enter");
  }
}
