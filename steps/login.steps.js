import { createBdd } from "playwright-bdd";
import{ExcelReader} from "../utils/ExcelReader.js";
import { LoginPage } from '../pages/LoginPage.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();


Given('User is on the Login page', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    });

When('User clicks the Log In button with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterCredentials(process.env.APP_USERNAME, process.env.APP_PASSWORD);
});


Then('User should be redirected to the Home page', async ({page}) => {
    await expect(page).toHaveURL('https://suite8demo.suiteondemand.com/#/home');
  
});
When('the user enters invalid credentials for {string}', async ({page}, arg) => {
      const loginPage = new LoginPage(page);

 const excelReader = new ExcelReader("TestData/testdata.xlsx");
 const loginData = excelReader.getExcelData("login", arg);
    await loginPage.enterCredentials(loginData.username,loginData.password);



});

Then('the user should see {string} message', async ({page}, arg) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.errorMessage).toContainText(arg);
 
});