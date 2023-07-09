/// <reference types="cypress" />

import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I visit cypress.io waiting`, () => {
  cy.visit('https://example.cypress.io/commands/waiting')
});

Then(`I should wait for the specific time`, () => {
  cy.get('.wait-input1').type('Wait 1000ms after typing')
  cy.wait(1000)
  cy.get('.wait-input2').type('Wait 1000ms after typing')
  cy.wait(1000)
  cy.get('.wait-input3').type('Wait 1000ms after typing')
  cy.wait(1000)
});

Then(`I should wait for specific route`, () => {
  cy.intercept('GET', '**/comments/*').as('getComment')

  // we have code that gets a comment when
  // the button is clicked in scripts.js
  cy.get('.network-btn').click()

  // wait for GET comments/1
  cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])

});




