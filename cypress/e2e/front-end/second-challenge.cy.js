describe('Second Challenge', () => {
  const challengeFrontSecondUrl = Cypress.env('urls').challengeFrontTwo;

  beforeEach(() => {
    cy.visit(challengeFrontSecondUrl);
  });

  it('should click on the three buttons presented on the screen', () => {
    cy.get('.button').first().click();
    cy.get('.button.alert').click({ multiple: true });
    cy.get('.button.success').click({ multiple: true });
  });

  it('should click on all edit and delete buttons in the grid', () => {
    cy.contains('a', 'edit').click();
    cy.url().should('include', '#edit');
    cy.contains('a', 'delete').click();
    cy.url().should('include', '#delete');
  });
});
