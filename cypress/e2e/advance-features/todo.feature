Feature: Todo

    @suite("Regression")
    Scenario Outline: displays two todo items by default
        Given I visit cypress.io todo
        Then should display 2 todo items by default
