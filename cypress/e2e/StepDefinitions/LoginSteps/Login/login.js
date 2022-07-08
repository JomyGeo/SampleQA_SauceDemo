/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'

import { Given, When, Then , And } from "@badeball/cypress-cucumber-preprocessor";
import { before, after , beforeEach ,afterEach } from "@badeball/cypress-cucumber-preprocessor";






Given('Open the Browser and load the URL', function(){

    cy.visit('https://www.saucedemo.com/')
  
})

When('Provide user credentials and Click on signIn button' , function(){

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

})

Then('Verify products page displayed' , function(){

    cy.url().then((URL)=>{

        cy.log(URL)
        cy.wrap(URL).should('contain' , 'inventory.html')
        
       
    })
})
