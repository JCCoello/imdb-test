// tests/imdb-search.spec.ts

import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SearchResultsPage } from "../pages/searchResultsPage";
import { MovieDetailPage } from "../pages/movieDetailPage";

test.describe("IMDb Search Functionality", () => {
  // --- TEST DATA OBJECT ---
  const movie = {
    searchTerm: "Finding Nemo",
    expectedTitle: "Finding Nemo",
    directorName: "Andrew Stanton",
  };

  test(`should find '${movie.searchTerm}', click it, and verify its details`, async ({
    page,
  }) => {
    // ---- Arrange ----
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    const movieDetailPage = new MovieDetailPage(page);

    // ---- Act ----
    await homePage.goto();
    // Use the searchTerm from our data object
    await homePage.searchFor(movie.searchTerm);

    await searchResultsPage.assertPageLoaded();
    await searchResultsPage.clickFirstResult();

    // ---- Assert ----
    await movieDetailPage.assertPageLoaded();

    const movieTitle = await movieDetailPage.getTitleText();
    const directorName = await movieDetailPage.getDirectorName();

    // Use the expected values from our data object for assertions
    expect(movieTitle).toContain(movie.expectedTitle);
    expect(directorName).toContain(movie.directorName);

    // You can even use it to check the page title
    await expect(page).toHaveTitle(new RegExp(movie.expectedTitle));
  });
});
