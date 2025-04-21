import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SearchResultsPage } from "../pages/searchResultsPage";

test.describe("IMDb Search Functionality", () => {
  test("should allow searching for a movie and show results", async ({
    page,
  }) => {
    // ---- Arrange ----
    // 1. Instantiate Page Objects by passing the 'page' fixture
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    // 2. Define test data
    const searchTerm = "The Matrix";

    // ---- Act ----
    // 3. Go to IMDb Home Page
    await homePage.goto();

    // 4. Search for the movie title
    await homePage.searchFor(searchTerm);

    // ---- Assert ----
    // 5. Verify Search Results Page is loaded (wait for results section)
    await searchResultsPage.assertPageLoaded();

    // 6. Get the text of the first result
    const firstResultText = await searchResultsPage.getFirstResultText();

    // 7. Assert that the first result contains the search term (case-insensitive check)
    expect(firstResultText.toLowerCase()).toContain(searchTerm.toLowerCase());

    // Optional step (add later if needed): Click the first result
    // await searchResultsPage.clickFirstResult();
    // await expect(page).toHaveTitle(/The Matrix/); // Example assertion for movie page
  });
});
