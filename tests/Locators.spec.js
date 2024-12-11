const {test, expect} = require('@playwright/test');

test('Locators', async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    //click on login button -property
    await page.click('id=login2');
    //provide username
    await page.fill('id=loginusername', 'pavanol')
    //provide password
    await page.fill('id=loginpassword', 'test@123')
    //close the form
    await page.click("//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']")

    // const closeButton = await page.locator();
    // await expect(closeButton).toBeVisible();

})