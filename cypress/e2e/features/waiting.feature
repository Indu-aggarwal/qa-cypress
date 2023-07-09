Feature: Waiting

  @suite("Regression")
  Scenario Outline: cy.wait() - wait for a specific amount of time
    Given I visit cypress.io waiting
    Then I should wait for the specific time

  Scenario Outline: cy.wait() - wait for a specific route
    Given I visit cypress.io waiting
    Then I should wait for specific route
