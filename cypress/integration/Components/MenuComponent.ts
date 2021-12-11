/// <reference types="Cypress" />

before(() => {
    cy.visit("/menu")
})
describe("MenuComponent", () => {
    it('Exists', () => {
        cy.get('#menuComponent').should("be.visible")
    })

    it("Renders Correctly", function () {
        cy.get("#0_dishCard_Id").contains("Gebackener Mozzarella")
        cy.contains("Gebackener Mozzarella").should("be.visible")
        cy.scrollTo(0, 5000)
        cy.contains("Alkoholfreie Getränke").should("be.visible")
        cy.get("#scrollCats").should("be.visible")
    })
})

export { }