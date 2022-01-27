/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("DishCard", () => {
    it('Exists', () => {

        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Gebackener Mozzarella');

    })

    it("Renders Correctly", function () {
        cy.get("#0_dishCard_Id").should("have.class", "dish")
        cy.get("#0_dishCard_Id").contains("Gebackener Mozzarella")
        cy.get("#0_dishCard_Id").contains("Mozzarella Käse im Teigmantel")
        cy.get("#0_dishCard_Id").contains("6,50 €")
    })
})

export { }