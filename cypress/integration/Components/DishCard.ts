/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("DishCard", () => {
    it('Exists', () => {
        cy.get('[data-cy=cat-0_dish-0]').should("exist");
    })

    it("Renders Correctly", function () {
        cy.get('[data-cy=cat-0_dish-0]').should("have.class", "dish")
        cy.get('[data-cy=cat-0_dish-0]').contains("Gebackener Mozzarella")
        cy.get('[data-cy=cat-0_dish-0]').contains("Mozzarella Käse im Teigmantel")
        cy.get('[data-cy=cat-0_dish-0]').contains("6,50 €")
    })
})

export { }