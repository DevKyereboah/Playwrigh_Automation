import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').press('CapsLock');
  await page.getByPlaceholder('Username').fill('A');
  await page.getByPlaceholder('Username').press('CapsLock');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('teste lastNametest').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});