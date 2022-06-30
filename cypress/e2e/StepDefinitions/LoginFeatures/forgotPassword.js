/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'

import { Given, When, Then , And } from "@badeball/cypress-cucumber-preprocessor";



Given('Open the Browser and load the URL', function(){

    cy.visit('https://www.saucedemo.com/')
  
})
