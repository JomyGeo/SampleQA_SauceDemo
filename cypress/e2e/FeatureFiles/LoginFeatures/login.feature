Feature: Log into saucedemo application


    Scenario: Login Mandatory alert validation on username and password fields
    Given Open the Browser and load the URL
    When Provide user credentials and Click on signIn button
    Then Verify products page displayed