// Generated from: features\documents.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Document Page- Functional Validation', () => {

  test.beforeEach('Background', async ({ Given, excelReader, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the SuiteCRM Dashboard page', null, { excelReader, loginPage }); 
  });
  
  test('Create a new document', { tag: ['@CreateDocument'] }, async ({ Given, When, Then, documentPage }) => { 
    await Given('User is on the Create Document page', null, { documentPage }); 
    await When('User enters all valid document details and clicks the Save button', null, { documentPage }); 
    await Then('User should see the document created successfully', null, { documentPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\documents.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@CreateDocument"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on the Create Document page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User enters all valid document details and clicks the Save button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see the document created successfully","stepMatchArguments":[]}]},
]; // bdd-data-end