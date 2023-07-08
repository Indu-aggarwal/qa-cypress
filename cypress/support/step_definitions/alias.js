/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I visit cypress.io`, () => {
    cy.visit('https://example.cypress.io/commands/aliasing')
});

When(`I declare the DOM element as an alias`, () => {
    cy.get('.as-table').find('tbody>tr')
        .first().find('td').first()
        .find('button').as('firstBtn')
});

When(`I declare the route as an alias`, () => {
    cy.intercept('GET', '**/comments/*').as('getComment')
});

Then(`I should be to click on the element using alias`, () => {
    cy.get('@firstBtn').click()

    cy.get('@firstBtn')
        .should('have.class', 'btn-success')
        .and('contain', 'Changed')
});

Then(`I should be to click on the element after waiting for the route`, () => {
    cy.get('.network-btn').click()

    // https://on.cypress.io/wait
    cy.wait('@getComment')
    .its('response.statusCode')
    .should('eq', 200)
});

