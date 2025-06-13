// pages/searchResultsPage.ts
import { type Locator, type Page, expect } from "@playwright/test";

export class SearchResultsPage {
  readonly page: Page;
  // Add these locator properties:
  readonly resultsSection: Locator;
  readonly firstResultLink: Locator;
  readonly firstActorResultLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultsSection = page.locator(
      'section[data-testid="find-results-section-title"]'
    );

    // Locator for the first result link within that section
    // Looks inside the resultsSection for the first list item (li) and then finds the link (a) within it
    this.firstResultLink = this.resultsSection
      .locator("ul li")
      .first()
      .locator("a");

    // --- ADD THIS DEFINITION ---
    // This locator is more specific. It looks for the section dedicated to 'Names'
    // and then finds the first result link within it.
    this.firstActorResultLink = page
      .locator(
        'section[data-testid="find-results-section-name"] .find-result-item a'
      )
      .first();
  }

  async assertPageLoaded() {
    // This existing method should still work fine.
    await expect(
      this.resultsSection.or(this.firstActorResultLink.first())
    ).toBeVisible({ timeout: 10000 });
  }

  async getFirstResultText(): Promise<string> {
    const text = await this.firstResultLink.textContent();
    return text || "";
  }

  async clickFirstResult() {
    await this.firstResultLink.click();
  }

  // --- ADD THIS NEW METHOD ---
  /**
   * Clicks on the first search result under the 'Names' section.
   */
  async clickFirstActorResult() {
    await this.firstActorResultLink.click();
  }
}
