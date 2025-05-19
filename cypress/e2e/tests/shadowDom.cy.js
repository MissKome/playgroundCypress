import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import shadowDomPage from "../../pages/shadowDomPage";


When("I click on the Shadow DOM link", () => {
    shadowDomPage.visit();
});

Then("I click on the Generate Button and Copy to Clipboard", () => {
    shadowDomPage.clickGenerateButton();
    shadowDomPage.clickCopyButton();
});

Then("I compare the value of clipboard to the value in the input field", () => {
    shadowDomPage.getGuidValue().then((inputValue) => {
        shadowDomPage.readClipboard().then((clipboardValue) => {
            expect(clipboardValue).to.eq(inputValue);
        });
    });
});
