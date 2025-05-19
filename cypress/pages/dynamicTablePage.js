class DynamicTablePage {
  visit() {
    cy.get('a[href="/dynamictable"]').click()
  }

  getChromeCPU() {
    return cy.contains('Chrome').parent();
  }

  getChromeCPUValueFromTable() {
    return cy.contains('div[role="row"]', 'Chrome')
      .find('span[role="cell"]')
      .filter((index, el) => el.innerText.includes('%'))
      .invoke('text');
  }
  getChromeCPUValueFromSummary() {
    return cy.get('.bg-warning')
      .invoke('text')
      .then((text) => {
        return text.replace('Chrome CPU: ', '').trim();
      });
  }
}

export default new DynamicTablePage();
