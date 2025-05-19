class SampleAppPage {
  visit() {
    cy.get('a[href="/sampleapp"]').click()
  }

  enterUsername(username) {
    cy.get('input[name="UserName"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="Password"]').type(password);
  }

  clickLogin() {
    cy.get('#login').click();
  }

  getSuccessMessage() {
    return cy.get('#loginstatus');
  }
}

export default new SampleAppPage();
