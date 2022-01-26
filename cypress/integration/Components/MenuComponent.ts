/// <reference types="Cypress" />

import { getMenu } from "../../../src/overmind/menu/effects"

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("MenuComponent", () => {

    it('Exists', () => {
        cy.get('#menuComponent').should("be.visible")
    })

    it("Renders Correctly", function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#section-0 > .p-3 > .text-lg').should('have.text', 'Vorspeisen');
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Gebackener Mozzarella');
        cy.get("#page").scrollTo(0, 10000)
        cy.get('#section-11 > .px-5 > :nth-child(10) > #dishCard > .flex-2\\/4 > .text-lg').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })
})

export { }