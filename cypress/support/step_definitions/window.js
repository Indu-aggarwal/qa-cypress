/// <reference types="cypress" />

import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I visit cypress.io window`, () => {
  cy.visit('https://example.cypress.io/commands/window')
});

Then(`I should get window object`, () => {
  // https://on.cypress.io/window
  cy.window().should('have.property', 'top')
});

Then(`I should get document object`, () => {
  // https://on.cypress.io/document
  cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
});

Then(`I should get the title`, () => {
  // https://on.cypress.io/title
  cy.title().should('include', 'Kitchen Sink')
});
