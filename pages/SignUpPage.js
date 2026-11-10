import { Base } from "./Base.js";

class SignUpPage extends Base {
  constructor(page) {
    super(page);
    this.page = page;
   
    // Locators for the elements on the Sign Up page
    this.registerLink = page.locator('a[href="/register"]'); // Locator for the register link
    this.genderRadioButton = page.locator('#gender-female'); 
    this.firstNameInput = page.locator('#FirstName'); 
    this.lastNameInput = page.locator('#LastName'); 
    this.emailInput = page.locator('#Email'); 
    this.passwordInput = page.locator('#Password'); 
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
    this.verifyLogin = page.locator('a[href="/logout"]'); // Locator for the logout link
}

async clickRegisterLink() {
    await this.clickElement(this.registerLink); // function for the locator to click the register link
  }

  async selectGender() {
    await this.clickElement(this.genderRadioButton); // function for the locator to select the gender radio button
  }
async fillFirstName(firstName) {
    await this.firstNameInput.fill(firstName); // function for the locator to fill the first name input field
  }

async fillLastName(lastName) {
    await this.lastNameInput.fill(lastName); // function for the locator to fill the last name input field
  }

async fillEmail(email) {
    await this.emailInput.fill(email); // function for the locator to fill the email input field
  }

async fillPassword(password) {
    await this.passwordInput.fill(password); // function for the locator to fill the password input field
  }

async fillConfirmPassword(confirmPassword) {
    await this.confirmPasswordInput.fill(confirmPassword); // function for the locator to fill the confirm password input field
  }

async clickRegisterButton() {
    await this.clickElement(this.registerButton); // function for the locator to click the register button
  }

}

export {SignUpPage};