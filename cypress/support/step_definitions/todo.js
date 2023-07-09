/// <reference types="cypress" />

import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I visit cypress.io todo`, () => {
    cy.visit('https://example.cypress.io/todo')
});

Then(`should display 2 todo items by default`, () => {
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
});
