/// <reference types="Cypress" />

before(() => {
    cy.visit("/menu")
})
describe("MenuItem", () => {
    it('Exists', () => {
        cy.get('#menuComponent').should("be.visible")
        cy.contains("Gebackener Mozzarella").should("be.visible")
        cy.contains("Gebackener Mozzarella").click()
        cy.get("#menuItem").should("be.visible")

    })



    it("Scrolls Away", function () {
        cy.get("#menuItem").scrollTo(0, -3000)
        cy.get("menuItem").should("not.exist")
    })



})

export { }