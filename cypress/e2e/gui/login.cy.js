describe('Login', function()  {
  it('login com sucesso', function() {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})
