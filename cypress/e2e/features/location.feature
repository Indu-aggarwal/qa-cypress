Feature: Location

    @suite("Regression")
    Scenario Outline: cy.hash() - get the current URL hash
        Given I visit cypress.io location
        Then hash should be empty

    Scenario Outline: cy.location() - get window.location
        Given I visit cypress.io location
        Then I should be able to get window location

    Scenario Outline: cy.url() - get the current URL
        Given I visit cypress.io location
        Then I should be able to get the current url