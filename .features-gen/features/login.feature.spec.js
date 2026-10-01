// Generated from: features\login.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Login Page - Functional Validation', () => {

  test('Login with valid credentials', { tag: ['@login'] }, async ({ Given, When, Then, excelReader, loginPage, page }) => { 
    await Given('User is on the Login page', null, { loginPage }); 
    await When('User enters the valid credentials from Excel and click login', null, { excelReader, loginPage }); 
    await Then('User should be redirected to the SuiteCRM Dashboard', null, { page }); 
  });

  test.describe('Login with invalid credentials', () => {

    test('Example #1', { tag: ['@login', '@negative'] }, async ({ Given, When, Then, excelReader, loginPage }) => { 
      await Given('User is on the Login page', null, { loginPage }); 
      await When('User enters invalid credentials from Excel for "InvalidUsername" and click login', null, { excelReader, loginPage }); 
      await Then('User should see a login error message', null, { loginPage }); 
    });

    test('Example #2', { tag: ['@login', '@negative'] }, async ({ Given, When, Then, excelReader, loginPage }) => { 
      await Given('User is on the Login page', null, { loginPage }); 
      await When('User enters invalid credentials from Excel for "InvalidPassword" and click login', null, { excelReader, loginPage }); 
      await Then('User should see a login error message', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the Login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User enters the valid credentials from Excel and click login","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the SuiteCRM Dashboard","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":17,"tags":["@login","@negative"],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on the Login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enters invalid credentials from Excel for \"InvalidUsername\" and click login","stepMatchArguments":[{"group":{"start":47,"value":"\"InvalidUsername\"","children":[{"start":48,"value":"InvalidUsername","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see a login error message","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@login","@negative"],"steps":[{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on the Login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User enters invalid credentials from Excel for \"InvalidPassword\" and click login","stepMatchArguments":[{"group":{"start":47,"value":"\"InvalidPassword\"","children":[{"start":48,"value":"InvalidPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see a login error message","stepMatchArguments":[]}]},
]; // bdd-data-end