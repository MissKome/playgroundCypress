import AlertsPage from '../../pages/alertsPage'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

When("I click on the Alert Link", () => {
    AlertsPage.clickAlertsLink();

})
Then("I should be navigated to the Alert Page", () => {
    cy.url().should('include', '/alerts');
})

Then('I clicked on the Alert button', () => {
    AlertsPage.clickAlertButton();


});
Then('I click on the OK on the alert prompt', () => {
    AlertsPage.verifyalert()
})


Then('I clicked the confirm Button', () => {
    AlertsPage.clickConfirmButton()

})
Then('I click on the OK on the Confirm alert prompt', () => {
    AlertsPage.verifyConfirm()
})
