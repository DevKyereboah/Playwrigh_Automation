const {test, expect} = require('@playwright/test');

test('Home page', async({page}) =>{
    //visiting the web page
    await page.goto('https://www.demoblaze.com/index.html')
    
    //assert page title
    const pageTitle = await page.title();
    console.log("page title is: ", pageTitle);

    await page.goto('https://www.demoblaze.com/cart.html')

    await page.getByRole('link', {name: 'Cart'}).click();
})