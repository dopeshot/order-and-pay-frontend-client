/// <reference types="Cypress" />

import { getMenu } from "../../../src/overmind/menu/effects"

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")

})
describe("Category Buttons", () => {
    it('Exists', () => {
        cy.get('#categories').should("be.visible")
    })

    it("Button Scolls work", function () {

        cy.get('[data-cy=categoryButton_2]').click()
        cy.get('[data-cy=categoryButton_2]').invoke('text').as('button2').then(() => {
            cy.get('[data-cy=menuComponent]').contains(this.button2).should("be.visible")
        })


        cy.get('[data-cy=categoryButton_0]').click()
        cy.get('[data-cy=categoryButton_0]').invoke('text').as('button0').then(() => {
            cy.get('[data-cy=menuComponent]').contains(this.button0).should("be.visible")
        })
    })
});

export { }