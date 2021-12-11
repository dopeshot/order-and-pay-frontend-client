/// <reference types="Cypress" />

before(() => {
    cy.visit("/menu")
})
describe("MenuComponent", () => {
    it('Renders when scrolled down', () => {
        cy.scrollTo(0, 400)
        cy.get('#scrollCats').should("be.visible")
        cy.scrollTo(0, 0)
    })

    it("Scrollbuttons work", function () {
        cy.scrollTo(0, 400)
        cy.get("#categoryScroll_2").click()
        cy.contains("Pizza Margherita").should("be.visible")

    })
    it("Scroll Highlighting works", function () {
        cy.scrollTo(0, 1000)
        cy.get("#categoryScroll_1").should("have.class", "pseudoActiveElement")
    })
})

export { }