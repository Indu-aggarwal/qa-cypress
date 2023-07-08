Feature: Aliasing

    @suite("Regression")
    Scenario Outline: Alias a DOM element for later use
        Given I visit cypress.io
        When I declare the DOM element as an alias
        Then I should be to click on the element using alias


    Scenario Outline: Alias a route for later use
        Given I visit cypress.io 
        When I declare the route as an alias
        Then I should be to click on the element after waiting for the route
