Feature: Window

    @suite("Regression")
    Scenario Outline: cy.window() - get the global window object
        Given I visit cypress.io window
        Then I should get window object

    Scenario Outline: cy.document() - get the document object
        Given I visit cypress.io location
        Then I should get document object

    Scenario Outline: cy.title() - get the title
        Given I visit cypress.io location
        Then I should get the title