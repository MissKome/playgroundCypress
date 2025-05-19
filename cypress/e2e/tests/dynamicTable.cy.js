import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DynamicTablePage from "../../pages/dynamicTablePage";



Given(/^I navigate to the dynamic table page$/, () => {
  DynamicTablePage.visit()
});


Then(/^I confirm I am on the Dynamic Table Page$/, () => {
  cy.url().should('equal', 'https://www.uitestingplayground.com/dynamictable')
});



When("I get the Chrome CPU value from the table and the summary", () => {
  DynamicTablePage.getChromeCPUValueFromTable().then((value) => {
    cy.wrap(value.trim()).as('cpuFromTable');
  });

  DynamicTablePage.getChromeCPUValueFromSummary().then((value) => {
    cy.wrap(value.trim()).as('cpuFromSummary');
  });
});

Then("Both CPU values should match", function () {
  expect(this.cpuFromSummary).to.eq(this.cpuFromTable);
})
