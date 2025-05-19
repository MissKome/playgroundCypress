class ClientDelayPage {
  visit() {
    cy.get('a[href="/clientdelay"]').click()
  }

  clickAjaxButton() {
    cy.get('#ajaxButton').should('be.visible').click();
  }

  waitForSuccessMessage() {
    cy.get('.bg-success', { timeout: 25000 })
      .should('be.visible')
      .and('contain.text', 'Data calculated on the client side.');
  }
}
export default new ClientDelayPage();
