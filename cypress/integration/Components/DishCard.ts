/// <reference types="Cypress" />

before(() => {

    cy.visit("/menu")
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