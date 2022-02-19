/// <reference types="Cypress" />

import { getMenu } from "../../../src/overmind/menu/effects"

const baseUrl = Cypress.config().baseUrl
before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")

})


describe("Payment Page", () => {
    it("Renders Correctly", () => {
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#orderButton').click();
        cy.get('#basket').click();
        cy.get('#payscreen').click();
        cy.get('.text-4xl').should('have.text', 'Zahlmethoden');
        cy.get('.pt-16').should('have.text', 'Per Klick auf \'Jetzt bezahlen!\' werden Sie auf die jeweilige Seite des Anbieters weitergeleitet!');
        cy.get('#basket').click();
        cy.get('.bg-button-grey > .svg-inline--fa > path').click();
        cy.get('#mainMenu').click();

    })

    it("Picks Payment Methods ", () => {

        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').click();
        cy.get('#orderButton').click();
        cy.get('#basket').click();
        cy.get('#payscreen').click();
        cy.get(':nth-child(1) > input').check();
        cy.get(':nth-child(1) > input').should('be.checked');
        cy.get('#basket').click();
        cy.get('.bg-button-grey > .svg-inline--fa').click();
        cy.get('#mainMenu').click();

    })
    it("Orders correctly", () => {

        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#menu-button').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get(':nth-child(1) > input').check();
        cy.get(':nth-child(5) > :nth-child(2) > .flex-col > :nth-child(2)').click();
        cy.get(':nth-child(2) > input').check();
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa').click();
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa').click();
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa').click();
        cy.get('#orderButton').click();
        cy.get('#basket').click();
        cy.get('#payscreen').click();
        cy.get(':nth-child(1) > input').check();


    })
})

export { }