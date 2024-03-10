describe('First Challenge', () => {
  const challengeFrontFirstUrl = Cypress.env('urls').challengeFrontOne;
  const expectedText = 'Hello World!';

  beforeEach(() => {
    cy.visit(challengeFrontFirstUrl);
  })
  it('should display "Hello World" after clicking Start', () => {
    cy.get('button').click();
    cy.get('#finish', { timeout: 5000 }).should('be.visible');
    cy.get('#finish').contains(expectedText);
  });
});
