import { Base } from "./Base.js";

class LoginPage extends Base {
  constructor(page) {
    super(page);
    this.page = page;
   
    // Locators for the elements on the Login page
    this.LoginLink = page.locator('a[href="/login"]'); // Locator for the login link
    this.emailInput = page.locator('#Email'); 
    this.passwordInput = page.locator('#Password'); 
    this.rememberMeCheckbox = page.locator('#RememberMe'); 
    this.loginButton = page.locator('input[value="Log in"]');
    this.verifyLogin = page.locator('a[href="/logout"]'); // Locator for the logout link
}

async clickLoginLink() {
    await this.clickElement(this.LoginLink); // function for the locator to click the login link
  }

async fillEmail(email) {
    await this.emailInput.fill(email); // function for the locator to fill the email input field
  }

async fillPassword(password) {
    await this.passwordInput.fill(password); // function for the locator to fill the password input field
  }

async clickRememberMeCheckbox() {
    await this.clickElement(this.rememberMeCheckbox); // function for the locator to click the remember me checkbox
  }

async clickLoginButton() {
    await this.clickElement(this.loginButton); // function for the locator to click the login button
  }

}

export {LoginPage};