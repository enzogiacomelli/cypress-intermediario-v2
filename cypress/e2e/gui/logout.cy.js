describe('Logout', function() {
    beforeEach(function() {
      cy.login()
      cy.visit('/')
    })
  
    it('logout com sucesso', function() {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
  })
  