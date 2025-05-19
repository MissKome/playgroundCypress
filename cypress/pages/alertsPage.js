class AlertsPage {
  get alertsLink() {
    return 'a[href="/alerts"]';
  }
  clickAlertsLink() {
    cy.get(this.alertsLink).click();
  }

  get alertButton() {
    return cy.get("button#alertButton");
  }
  clickAlertButton() {
    this.alertButton.click();
  }
  verifyalert() {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Today is a working day.\nOr less likely a holiday.');
    });
  }

  get confirmButton() {
    return cy.get('#confirmButton');
  }
  clickConfirmButton() {
    this.confirmButton.click();
  }
  verifyConfirm() {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Today is Friday. Do you agree?');
      return true;
    });
  }

}

export default new AlertsPage;