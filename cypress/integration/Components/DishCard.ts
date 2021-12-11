/// <reference types="Cypress" />

before(() => {
    cy.visit("/menu")
})
describe("DishCard", () => {
    it('Exists', () => {
        cy.get('#0_dishCard_Id').should("be.visible")
    })

    it("Renders Correctly", function () {
        cy.get("#0_dishCard_Id").should("have.class", "dish")
        cy.get("#0_dishCard_Id").contains("Gebackener Mozzarella")
        cy.get("#0_dishCard_Id").contains("Mozzarella Käse im Teigmantel")
        cy.get("#0_dishCard_Id").contains("6,50 €")
    })
})

export { }