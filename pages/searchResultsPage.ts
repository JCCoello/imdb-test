// pages/searchResultsPage.ts
import { type Locator, type Page, expect } from "@playwright/test";

export class SearchResultsPage {
  readonly page: Page;
  // Add these locator properties:
  readonly resultsSection: Locator;
  readonly firstResultLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Add these lines inside the constructor:

    // Locator for the section containing title results (more stable)
    // Uses data-testid which is often added for testing purposes
    this.resultsSection = page.locator(
      'section[data-testid="find-results-section-title"]'
    );

    // Locator for the first result link within that section
    // Looks inside the resultsSection for the first list item (li) and then finds the link (a) within it
    this.firstResultLink = this.resultsSection
      .locator("ul li")
      .first()
      .locator("a");
  }
  // Add this method:
  /**
   * Asserts that the search results page has loaded by checking
   * for the visibility of the results section.
   * Includes a timeout in case loading is slow.
   */
  async assertPageLoaded() {
    // Wait for the results section to be visible on the page
    // expect() includes built-in waiting capabilities.
    await expect(this.resultsSection).toBeVisible({ timeout: 10000 }); // Wait up to 10 seconds
  }

  // Add this method:
  /**
   * Gets the text content of the first search result link.
   * Waits for the element and retrieves its text.
   * @returns A Promise that resolves to the text of the first result, or an empty string if null.
   */
  async getFirstResultText(): Promise<string> {
    // Use the locator for the first result's link
    const text = await this.firstResultLink.textContent();
    // textContent() can return null, so provide a default empty string
    return text || "";
  }
  // Add this method:
  /**
   * Clicks on the first search result link.
   * Waits for the element to be clickable and performs the click.
   */
  async clickFirstResult() {
    // Use the locator for the first result's link
    await this.firstResultLink.click();
  }
}
