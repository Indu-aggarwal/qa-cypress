/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I visit cypress.io location`, () => {
    cy.visit('https://example.cypress.io/commands/location')
});

Then(`hash should be empty`, () => {
      // https://on.cypress.io/hash
      cy.hash().should('be.empty')
});

Then(`I should be able to get window location`, () => {
// https://on.cypress.io/location
cy.location().should((location) => {
  expect(location.hash).to.be.empty
  expect(location.href).to.eq('https://example.cypress.io/commands/location')
  expect(location.host).to.eq('example.cypress.io')
  expect(location.hostname).to.eq('example.cypress.io')
  expect(location.origin).to.eq('https://example.cypress.io')
  expect(location.pathname).to.eq('/commands/location')
  expect(location.port).to.eq('')
  expect(location.protocol).to.eq('https:')
  expect(location.search).to.be.empty
});
})

Then(`I should be able to get the current url`, () => {
  cy.url().should('eq', 'https://example.cypress.io/commands/location')
})