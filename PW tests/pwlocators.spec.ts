/* Locators find elements based on DOM - Document Object Model 
PW built in locators are used to locate elements on the web page.
page.locator() is a method provided by Playwright that allows you to locate elements on a web page using various selector strategies. It returns a Locator object that can be used to perform actions on the located element, such as clicking, typing, or asserting its properties.
eg: page.getByRole('button', { name: 'Submit' }) - This locator finds a button element 
with the accessible name "Submit".
page.getbyText('Click me') - This locator finds an element that contains the text "Click me".
page.getByLabel('Username') - This locator finds an input element that is associated with a label that has the text "Username".
page.getByPlaceholder('Enter your email') - This locator finds an input element that has a placeholder attribute with the value "Enter your email".
page.getByTestId('login-button') - This locator finds an element that has a data-testid attribute with the value "login-button".
page.getByAltText('Logo') - This locator finds an image element that has an alt attribute with the value "Logo".
page.getByTitle('Submit') - This locator finds an element that has a title attribute with the value "Submit".
page.getByRole('link', { name: 'Home' }) - This locator finds a link element with the accessible name "Home".
*/

import {test, expect, Locator} from '@playwright/test';

test('Verify locators', async ({page}) => {
    await page.goto('https://playwright.dev/'); 
    //getbyalttext()
  const logo:Locator =  page.getByAltText('Playwright logo');
  await expect(logo).toBeVisible();
  
 await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
 const getStartedButton:Locator = page.getByRole('link', { name: 'Get started' });
    await getStartedButton.click();
    await expect(page).toHaveURL(/.*docs\/intro/);
    })

   