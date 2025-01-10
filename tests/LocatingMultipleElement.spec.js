const {test, expect} = require('@playwright/test');
test('Locate Multiple Element', async({page}) =>{
    await page.goto('https://www.demoblaze.com/index.html')
   
    //locate all the links on the page 
    const links = await page.$$('a');
    //create a forloop to extract all the links from the link variable above
    for(const link of links ){
        const linkText = await link.textContent();
        console.log(linkText)
    }

    //store all the link text content in a const variable and log it out

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
});