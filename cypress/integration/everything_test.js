describe('The home page works', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Shows a navbar on /', () => {
    cy.get('#root header:first-child')
    .should('exist')
  })

  it('Shows at least ten comments', () => {
    cy.get('#root > div > div')
    .find('div').its('length').should('be.gte', 10)
  })

})
