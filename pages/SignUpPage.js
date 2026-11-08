class SignUpPage {
  constructor(page) {
    this.page = page;
    this.pageURL = 'https://demowebshop.tricentis.com/'; // URL of the Demowebshop page
   
    // Locators for the elements on the Sign Up page
    this.registerLink = page.locator('a[href="/register"]'); // Locator for the register link
    this.genderRadioButton = page.locator('#gender-female'); 
    this.firstNameInput = page.locator('#FirstName'); 
    this.lastNameInput = page.locator('#LastName'); 
    this.emailInput = page.locator('#Email'); 
    this.passwordInput = page.locator('#Password'); 
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
}

async pageOpen() {
    await this.page.goto(this.pageURL, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
   //await this.page.goto('https://demowebshop.tricentis.com/');

  }

async clickRegisterLink() {
    await this.registerLink.click(); // function for the locator to click the register link
  }

  async selectGender() {
    await this.genderRadioButton.click(); // function for the locator to select the gender radio button
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
    await this.registerButton.click(); // function for the locator to click the register button
  }

}

export {SignUpPage};