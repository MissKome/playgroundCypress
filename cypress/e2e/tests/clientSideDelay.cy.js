
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ClientDelayPage from "../../pages/clientDelayPage";


Given(/^I am on the landing page$/, () => {
  cy.visit('/');
});


When(/^I click on the Client Side Delay$/, () => {
  ClientDelayPage.visit();
});


Then(/^I confirm I am on the Client Side Delay page$/, () => {
  cy.url().should('equal', 'https://www.uitestingplayground.com/clientdelay')

});


Then(/^I click on the Button Triggering Client Side Logic$/, () => {
  ClientDelayPage.clickAjaxButton();
});


Then('I should see the success message', () => {
  ClientDelayPage.waitForSuccessMessage();
});



