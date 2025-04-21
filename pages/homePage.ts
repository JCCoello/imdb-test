// pages/homePage.ts
import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[id="suggestion-search"]');
  }

  /**
   * Navigates to the IMDb home page.
   * Assumes baseURL is set in playwright.config.ts.
   */
  async goto() {
    await this.page.goto("/");
  }

  // Add this method:
  /**
   * Enters a search term into the search box and presses Enter.
   * @param searchTerm The text to search for.
   */
  async searchFor(searchTerm: string) {
    // Use the locator for the search input stored in this.searchInput
    await this.searchInput.fill(searchTerm); // Types the text into the input field

    // Simulate pressing the 'Enter' key on the search input element
    await this.searchInput.press("Enter");
  }
}
