import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login/");
  });

  test("User can successfully log in with valid credentials from environment variables", async ({
    page,
  }) => {
    // Get credentials from environment variables
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;

    // Fill in the login form
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password);

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for navigation or success indication
    // After successful login, user should be redirected to home page
    await page.waitForURL("/", { timeout: 5000 });

    // Verify we're on the home page
    expect(page.url()).toContain("/");
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    // Fill in the login form with invalid credentials (using noroff.no email to pass validation)
    await page.fill('input[name="email"]', "invalid@stud.noroff.no");
    await page.fill('input[name="password"]', "wrongpassword");

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for error message to appear
    await page.waitForSelector("#message-container", { timeout: 5000 });

    // Check that an error message is displayed
    const messageContainer = await page.locator("#message-container");
    await expect(messageContainer).toBeVisible();

    // Verify the message is not empty (error message was shown)
    const messageText = await messageContainer.textContent();
    expect(messageText.trim().length).toBeGreaterThan(0);
  });
});
