import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Navigates to home, clicks first venue, and verifies venue details page", async ({
    page,
  }) => {
    // Navigate to the home page
    await page.goto("/");

    // Wait for the venue list to load
    // The venue-container should have actual venue cards, not just "Loading..."
    await page.waitForSelector("#venue-container a", { timeout: 10000 });

    // Get the first venue link
    const firstVenue = page.locator("#venue-container a").first();

    // Wait for the first venue to be visible
    await firstVenue.waitFor({ state: "visible" });

    // Click the first venue
    await firstVenue.click();

    // Wait for navigation to venue details page
    await page.waitForURL(/\/venue\//, { timeout: 5000 });

    // Wait for the heading to be updated (no longer "Loading venue...")
    await page.waitForFunction(
      () => {
        const h1 = document.querySelector("h1");
        return (
          h1 &&
          h1.textContent &&
          h1.textContent.toLowerCase().includes("venue details")
        );
      },
      { timeout: 10000 }
    );

    // Verify that the heading contains "Venue details"
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();

    const headingText = await heading.textContent();
    expect(headingText.toLowerCase()).toContain("venue details");
  });
});
