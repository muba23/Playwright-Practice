import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
test('Opening Demowebshop Login page', async ({ page }) => {
  
  const loginPage = new LoginPage(page);

  await loginPage.pageOpen();
  await loginPage.clickLoginLink(); // Click the login link
  await loginPage.fillEmail('alexa2311@example.com'); // Fill the email input field
  await loginPage.fillPassword('Password123'); // Fill the password input field
  await loginPage.clickRememberMeCheckbox(); // Click the remember me checkbox
  await loginPage.clickLoginButton(); // Click the login button
  await expect(loginPage.verifyLogin).toBeVisible(); // Verify that the logout link is visible after successful login
  await page.waitForTimeout(2000); // Wait for 2 seconds to observe the result
 // await page.pause(); // Pause the test execution to observe the result
});
