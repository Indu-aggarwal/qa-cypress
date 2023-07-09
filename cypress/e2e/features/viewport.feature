Feature: Viewport

  @suite("Regression")
  Scenario Outline: cy.viewport() - set the viewport size and dimension
    Given I visit cypress.io viewport
    Then screen size should be as per the viewport