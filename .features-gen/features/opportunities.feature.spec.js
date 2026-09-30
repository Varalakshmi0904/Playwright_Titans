// Generated from: features/opportunities.feature
import { test } from "../../fixtures/fixtures.js";

test.describe('Opportunities Module', () => {

  test.beforeEach('Background', async ({ Given, excelReader, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the SuiteCRM Dashboard page', null, { excelReader, loginPage }); 
  });
  
  test('Verify Opportunities dropdown menu', { tag: ['@opportunities', '@tc01', '@dropdown'] }, async ({ When, Then, opportunitiesPage }) => { 
    await When('User hovers over Opportunities', null, { opportunitiesPage }); 
    await Then('User should see the Opportunities dropdown menu', null, { opportunitiesPage }); 
  });

  test('Verify Create Opportunity navigation', { tag: ['@opportunities', '@tc02', '@create'] }, async ({ When, Then, opportunitiesPage }) => { 
    await When('User clicks Create Opportunity', null, { opportunitiesPage }); 
    await Then('User should be redirected to the Create Opportunity page', null, { opportunitiesPage }); 
  });

  test.describe('Verify mandatory field indicators are displayed', () => {

    test('Example #1', { tag: ['@opportunities', '@tc03', '@create'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on the Create Opportunity page', null, { opportunitiesPage }); 
      await When('User views the Create Opportunity page', null, { opportunitiesPage }); 
      await Then('User should see a mandatory indicator next to "Opportunity Name"', null, { opportunitiesPage }); 
    });

    test('Example #2', { tag: ['@opportunities', '@tc03', '@create'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on the Create Opportunity page', null, { opportunitiesPage }); 
      await When('User views the Create Opportunity page', null, { opportunitiesPage }); 
      await Then('User should see a mandatory indicator next to "Account Name"', null, { opportunitiesPage }); 
    });

    test('Example #3', { tag: ['@opportunities', '@tc03', '@create'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on the Create Opportunity page', null, { opportunitiesPage }); 
      await When('User views the Create Opportunity page', null, { opportunitiesPage }); 
      await Then('User should see a mandatory indicator next to "Sales Stage"', null, { opportunitiesPage }); 
    });

    test('Example #4', { tag: ['@opportunities', '@tc03', '@create'] }, async ({ Given, When, Then, opportunitiesPage }) => { 
      await Given('User is on the Create Opportunity page', null, { opportunitiesPage }); 
      await When('User views the Create Opportunity page', null, { opportunitiesPage }); 
      await Then('User should see a mandatory indicator next to "Expected Close Date"', null, { opportunitiesPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/opportunities.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@opportunities","@tc01","@dropdown"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User hovers over Opportunities","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see the Opportunities dropdown menu","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@opportunities","@tc02","@create"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User clicks Create Opportunity","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Create Opportunity page","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":25,"tags":["@opportunities","@tc03","@create"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User views the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see a mandatory indicator next to \"Opportunity Name\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Opportunity Name\"","children":[{"start":47,"value":"Opportunity Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":26,"tags":["@opportunities","@tc03","@create"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User views the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see a mandatory indicator next to \"Account Name\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Account Name\"","children":[{"start":47,"value":"Account Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":27,"tags":["@opportunities","@tc03","@create"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User views the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see a mandatory indicator next to \"Sales Stage\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Sales Stage\"","children":[{"start":47,"value":"Sales Stage","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":28,"tags":["@opportunities","@tc03","@create"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the SuiteCRM Dashboard page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User views the Create Opportunity page","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see a mandatory indicator next to \"Expected Close Date\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Expected Close Date\"","children":[{"start":47,"value":"Expected Close Date","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end