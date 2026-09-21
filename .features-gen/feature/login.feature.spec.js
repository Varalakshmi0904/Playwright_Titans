// Generated from: feature\login.feature
import { test } from "playwright-bdd";

test.describe('Login Page - Functional Validation', () => {

  test('Verify successful login', { tag: ['@login'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on the Login page', null, { page }); 
    await When('User clicks the Log In button with valid credentials', null, { page }); 
    await Then('User should be redirected to the Home page', null, { page }); 
  });

  test.describe('Login with invalid credentials', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, When, Then, page }) => { 
      await Given('User is on the Login page', null, { page }); 
      await When('the user enters invalid credentials for "InvalidUsername"', null, { page }); 
      await Then('the user should see "Login credentials incorrect" message', null, { page }); 
    });

    test('Example #2', { tag: ['@login'] }, async ({ Given, When, Then, page }) => { 
      await Given('User is on the Login page', null, { page }); 
      await When('the user enters invalid credentials for "InvalidPassword"', null, { page }); 
      await Then('the user should see "Login credentials incorrect" message', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the Login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks the Log In button with valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Home page","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":16,"tags":["@login"],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on the Login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters invalid credentials for \"InvalidUsername\"","stepMatchArguments":[{"group":{"start":40,"value":"\"InvalidUsername\"","children":[{"start":41,"value":"InvalidUsername","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should see \"Login credentials incorrect\" message","stepMatchArguments":[{"group":{"start":20,"value":"\"Login credentials incorrect\"","children":[{"start":21,"value":"Login credentials incorrect","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@login"],"steps":[{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on the Login page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters invalid credentials for \"InvalidPassword\"","stepMatchArguments":[{"group":{"start":40,"value":"\"InvalidPassword\"","children":[{"start":41,"value":"InvalidPassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should see \"Login credentials incorrect\" message","stepMatchArguments":[{"group":{"start":20,"value":"\"Login credentials incorrect\"","children":[{"start":21,"value":"Login credentials incorrect","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end