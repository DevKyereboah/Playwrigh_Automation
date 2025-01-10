const {test, expect} = require('@playwright/test');
const { Console } = require('console');
test('Built-in Locator', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   //getByAltText
   const logo = await page.getByAltText('company-branding');
   await expect (logo).toBeVisible();
   //get locator by placeholder 
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   //get locator by role
   await page.getByRole('button', {type: 'submit'}).click();
   //get locator by text
   const name = await page.locator("//h6[normalize-space()='Dashboard']").textContent();
   const firstDashboardText = await page.getByText('Dashboard').first();

   //await expect(await page.getByText(name)).toBeVisible();
   await expect(firstDashboardText).toBeVisible();
   console.log("name is: " + name);
  
})