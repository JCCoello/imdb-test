import { type Locator, type Page, expect } from "playwright/test";

export class MovieDetailPage {
  readonly page: Page;
  readonly title: Locator;
  readonly directorLink: Locator;
  readonly year: Locator;

  constructor(page: Page) {
    this.page = page;
    // Example selector for the main title on the movie page
    this.title = page.locator('[data-testid="hero__pageTitle"]');
    // Selector for the director
    this.directorLink = page.locator('a[href*="/name/nm0905152/"]'); // This is specific to The Matrix, we can make it more generic
    // A more generic director locator would be:
    // this.directorLink = page.locator('a:text("Director") ~ div a').first();
    this.year = page.locator('a[href*="/releaseinfo"]');
  }

  /**
   * Asserts that the movie detail page is loaded by checking for a unique element
   * like the title.
   */
  async assertPageLoaded() {
    await expect(this.title).toBeVisible();
  }

  /**
   * Gets the text of the main title on the page.
   * @returns {Promise<string>}
   */
  async getTitleText(): Promise<string> {
    return (await this.title.textContent()) || "";
  }

  /**
   * Gets the name of the director.
   * @returns {Promise<string>}
   */
  async getDirectorName(): Promise<string> {
    // This is the new, precise locator that will fix the error.
    const directorLocator = this.page
      .locator("li") // 1. Look for a list item
      .filter({ hasText: "Director" }) // 2. Find the specific one that contains the label "Director"
      .getByRole("link") // 3. Get the link from within ONLY that list item
      .first();

    const text = await directorLocator.textContent();
    return text || "";
  }
}
