const {test, expect} = require('@playwright/test');

// test('Locators', async({page}) =>{
//     await page.goto('https://www.demoblaze.com/index.html')
//     //click on login button -property
//     await page.click('id=login2');
//     //provide username
//     await page.fill('id=loginusername', 'pavanol')
//     //provide password
//     await page.fill('id=loginpassword', 'test@123')
//     //close the form
//     await page.click("//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']")

//     // const closeButton = await page.locator();
//     // await expect(closeButton).toBeVisible();

// })


test('Locators', async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');

    //click on login button
    await page.locator("button[onclick='logIn()']").click();

    //verify logout is present after logging in
    const logoutLink = await page.locator('#logout2')
    await expect(logoutLink).toBeVisible();
    await page.close();
})

//Locating multiple Locators
test('Multiple Locators', async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
    // const links = await page.$$('a');

    // for(const link of links){
    //     const linktext = await link.textContent();
    //     console.log(linktext)
    // }
    await page.waitForSelector("//div[@id='tbodyid']//div/h4/a");
    const products = await page.$$("//div[@id='tbodyid']//div/h4/a");
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);

        await expect (product).toHaveLength(9)
    }
});