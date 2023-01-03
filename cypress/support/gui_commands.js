Cypress.Commands.add('login', function(user = Cypress.env('user_name'), password = Cypress.env('user_password')) {

        const login = function () {
            cy.visit('/users/sign_in')

            cy.get('input[id="user_login"]').type(user)
            cy.get('input[id="user_password"]').type(password, { log: false })
            cy.get('input[data-qa-selector="sign_in_button"]').click()
        }

        login()
    })

    