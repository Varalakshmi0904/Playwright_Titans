// Generated from: features/contacts.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Contacts - Functional Validations', () => {

  test.beforeEach('Background', async ({ Given, excelReader, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the SuiteCRM Dashboard page', null, { excelReader, loginPage }); 
  });
  
  test('Create a new Contact', { tag: ['@contact'] }, async ({ Given, When, Then, contactPage }) => { 
    await Given('User is on the Create Contact page', null, { contactPage }); 
    await When('User clicks the save button entering all valid contact details', null, { contactPage }); 
    await Then('User should see the Contact created successfully', null, { contactPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/contacts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@contact"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given User is on the Create Contact page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User clicks the save button entering all valid contact details","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see the Contact created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end