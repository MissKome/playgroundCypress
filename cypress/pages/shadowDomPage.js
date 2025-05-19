class ShadowDomPage {
    visit() {
        cy.get('a[href="/shadowdom"]').should("exist").click();
    }

    clickGenerateButton() {
        cy.get('guid-generator')
            .shadow()
            .find('#buttonGenerate')
            .should("exist")
            .click();
    }

    clickCopyButton() {
        cy.get('guid-generator')
            .shadow()
            .find('#buttonCopy')
            .should("exist")
            .click();
    }

    getGuidValue() {
        return cy.get('guid-generator', { timeout: 10000 })
            .should("exist")
            .shadow()
            .find('input#editField', { timeout: 10000 })
            .should("be.visible")
            .invoke("val");
    }

    readClipboard() {
        return cy.window().then((win) => win.navigator.clipboard.readText());
    }
}

export default new ShadowDomPage();
