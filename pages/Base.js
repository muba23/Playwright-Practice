class Base{
    constructor(page){
        this.page = page;
        this.pageURL = 'https://demowebshop.tricentis.com/'; // URL of the Demowebshop page
    }
 
 async pageOpen() {
    await this.page.goto(this.pageURL, {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
   //await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async clickElement(locator) {
    await locator.click(); // function for the locator to click the element
  }
}

export {Base};