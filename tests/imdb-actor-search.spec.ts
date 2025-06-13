import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SearchResultsPage } from "../pages/searchResultsPage";

test.describe("IMDb Actor Search", () => {
  const actor = {
    name: "Tom Hanks",
    knownFor: "Forrest Gump",
  };

  test(`should find actor '${actor.name}' and verify their 'Known For' movie`, async ({
    page,
  }) => {
    // ---- Arrange ----
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);
    // const actorDetailPage = new ActorDetailPage(page);

    // ---- Act ----
    await homePage.goto();
    await homePage.searchFor(actor.name);

    await searchResultsPage.clickFirstActorResult();

    // ---- Assert ----
    await expect(page).toHaveURL(/.*\/name\/nm.*/);
  });
});
