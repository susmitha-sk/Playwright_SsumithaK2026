import {test, expect} from '@playwright/test';
//fixture - global variables - page, browser, context
//expect and page are global variables provided by playwright test runner
//expect is used for assertions and page is used to perform actions on the page
// assertions are validations that are used to verify the expected behavior of the application under test
// sync and async are two different ways to write code in JavaScript.
//  Sync code is executed sequentially, 
// while async code is executed asynchronously.
//  Async code allows for non-blocking operations, which can improve performance and responsiveness in applications.
// await is a keyword used in async functions to pause the execution of the function 
// until a promise is resolved or rejected. 
// It allows for writing asynchronous code in a more synchronous manner, making it easier to read and understand.


test('has title', async ({page}) => {
  await page.goto('https://playwright.dev/');       
await expect(page).toHaveTitle(/Playwright/);
});
