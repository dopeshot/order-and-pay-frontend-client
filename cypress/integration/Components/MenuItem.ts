/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("MenuItem", () => {
    it('Exists', () => {

        cy.contains("Gebackener Mozzarella").click()
        cy.get("#menuItem").should("be.visible")

    })



    it("Scrolls Away", function () {
        cy.get("#menuItem").scrollTo(0, -3000)
        cy.get("menuItem").should("not.exist")
    })



})

export { }