import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage.js';

test('Opening Demowebshop page and registering a new user', async ({ page }) => {
  
  const signUpPage = new SignUpPage(page);

  await signUpPage.pageOpen();
  await signUpPage.clickRegisterLink(); // Click the register link
  await signUpPage.selectGender(); // Select the gender radio button
  await signUpPage.fillFirstName('Alexa'); // Fill the first name input field
  await signUpPage.fillLastName('Lentis'); // Fill the last name input field
  await signUpPage.fillEmail('muba2311@example.com'); // Fill the email input field
  await signUpPage.fillPassword('Password123'); // Fill the password input field
  await signUpPage.fillConfirmPassword('Password123'); // Fill the confirm password input field
  await signUpPage.clickRegisterButton(); // Click the register button
  await expect(signUpPage.verifyLogin).toBeVisible(); // Verify that the logout link is visible after successful registration
  await page.waitForTimeout(2000); // Wait for 2 seconds to observe the result
 // await page.pause(); // Pause the test execution to observe the result
});
