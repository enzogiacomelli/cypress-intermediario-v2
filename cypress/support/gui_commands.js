Cypress.Commands.add('login', function(
    user = Cypress.env('user_name'), 
    password = Cypress.env('user_password'), 
    {cacheSession = true} = {}) 
    {
        const login = function () {
            cy.visit('/users/sign_in')

            cy.get('input[id="user_login"]').type(user)
            cy.get('input[id="user_password"]').type(password, { log: false })
            cy.get('input[data-qa-selector="sign_in_button"]').click()
        }

        const validate = function() {
            cy.visit('/')
            cy.location('pathname', { timeout: 1000 }).should('not.eq', '/users/sign_in')
          }

        const options = { cacheAcrossSpecs: true, //cache compartilhado entre arquivos de teste
            validate, 
        } 

        if (cacheSession) {
            cy.session(user, login, options)
        }else{
            login()
        }
})


Cypress.Commands.add('logout', function(){
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()


})


Cypress.Commands.add('gui_createProject', function(project) {
    cy.visit('/projects/new')
  
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
})