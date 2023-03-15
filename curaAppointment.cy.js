describe('To make appointment', () => {
    it('Visit the website', () => {
        //Visit the webpage
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        //assertion of the webpage title
        cy.title().should('contain', 'CURA Healthcare Service')
        //appointment button
        cy.get('#btn-make-appointment').click()
        //assertion of the webpage url
        cy.url().should('include', 'profile.php#login')
    })

    it('User Login', () => {
        //Visit the login page
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        //assertion of the webpage title
        cy.title().should('contain', 'CURA Healthcare Service')
        //entering username value
        cy.get('#txt-username').type('John Doe')
        //entering password value
        cy.get('#txt-password').type('ThisIsNotAPassword')
        //login button
        cy.get('#btn-login').click()
        //selecting the facility 
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        //applying for the hospital readmission
        cy.get('#chk_hospotal_readmission').click()
        //selecting healthcare program
        cy.get('#radio_program_medicaid').click()
        //typing the visit date
        cy.get('#txt_visit_date').type('22/03/2023')
        //clicking on the comment box
        cy.get('#txt_comment').click({force : true})
        //Typing the comment
        cy.get('#txt_comment').type('No comment')
        //clicking the booking appointment button
        cy.get('#btn-book-appointment').click()
        //To assert the next landing page
        cy.url().should('contain', 'summary')
        //clicking the button to return to homepage
        cy.get('.text-center > .btn').click()
        //clicking the menu bar
        cy.get('#menu-toggle > .fa').click()
        //selecting the history bar
        cy.get(':nth-child(4) > a').click()
        //clicking the button to return to homepage
        cy.get('.text-center > .btn').click()
        //clicking the menu bar
        cy.get('#menu-toggle > .fa').click()
        //clicking the logout bar
        cy.get(':nth-child(6) > a').click()
        
    })
    
})