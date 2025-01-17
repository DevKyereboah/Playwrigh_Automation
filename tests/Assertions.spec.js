const {test, expect} = require('@playwright/test');
test('Assertions', async({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register');
    //expect url to have
    await expect (page).toHaveURL('https://demo.nopcommerce.com/register');
    //Assert title of the page
    await expect (page).toHaveTitle('nopCommerce demo store. Register');
    //assert an element to be visible 
    const logo = await page.getByAltText('nopCommerce demo store');
    await expect (logo).toBeVisible();

    const searchterms = await page.locator('#small-searchterms')
    await expect (searchterms).toBeEnabled();


    //checkbox is checked
    const newsLetterBox = await page.locator('#Newsletter');
    await expect (newsLetterBox).toBeChecked();

    //assert an element has an attribute of ...

    const registerButton = await page.locator('#register-button');
    await expect (registerButton).toHaveAttribute('type', 'submit')
    
    //assert element has a text
    const pageHeader = await page.locator("div[class='page-title'] h1");
    await expect(pageHeader).toHaveText('Register');

    await expect(await page.locator("div[class='page-title'] h1")).toContainText('Reg');

    //assert input has a value of 
    const emailInput = await page.locator('#Email');
    await emailInput.fill('sarah2@gmail.com');
    await expect (emailInput).toHaveValue('sarah2@gmail.com');

    //assert dropdown count or any element count 
    

})