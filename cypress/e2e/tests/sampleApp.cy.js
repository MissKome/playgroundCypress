import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SampleAppPage from "../../pages/sampleAppPage";

Given("I visit the sample app page", () => {
  SampleAppPage.visit();
});

When("I enter username {string} and password {string}", (username, password) => {
  SampleAppPage.enterUsername(username);
  SampleAppPage.enterPassword(password);
});

When("I click the login button", () => {
  SampleAppPage.clickLogin();
});

Then("I should see the login success message", () => {
  SampleAppPage.getSuccessMessage().should("contain.text", "Welcome");
});