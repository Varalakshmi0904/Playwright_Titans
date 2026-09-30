// Generated from: features/leads.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('SuiteCRM Leads', () => {

  test.beforeEach('Background', async ({ Given, excelReader, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the SuiteCRM Dashboard page', null, { excelReader, loginPage }); 
  });
  
  test('Create a new lead - TC001', async ({ Given, When, Then, excelReader, leadsPage, page }) => { 
    await Given('User is on the Create Lead page', null, { leadsPage }); 
    await When('User creates a new lead using Excel test data "TC001"', null, { excelReader, leadsPage }); 
    await Then('Lead should be created successfully using Excel test data "TC001"', null, { excelReader, page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/leads.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on the Create Lead page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When User creates a new lead using Excel test data \"TC001\"","stepMatchArguments":[{"group":{"start":46,"value":"\"TC001\"","children":[{"start":47,"value":"TC001","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Lead should be created successfully using Excel test data \"TC001\"","stepMatchArguments":[{"group":{"start":58,"value":"\"TC001\"","children":[{"start":59,"value":"TC001","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end