/// <reference types="Cypress" />

import { getMenu } from "../../../src/overmind/menu/effects"

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("MenuComponent", () => {

    it('Exists', () => {
        cy.get('[data-cy=menuComponent]').should("be.visible")
    })

    it("Renders Correctly", function () {

        cy.get('[data-cy=section-0]').contains('Vorspeisen');
        cy.get('[data-cy=cat-0_dish-0]').contains('Gebackener Mozzarella');
        cy.get("#page").scrollTo(0, 10000)
        cy.get('[data-cy=cat-9_dish-9]').should('be.visible');


    })
})

export { }