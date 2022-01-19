/// <reference types="Cypress" />

before(() => {
    cy.visit("/menu")
})
describe("Scrollcats", () => {
    it('Renders when scrolled down', () => {
        cy.get("#page").scrollTo(0, 400)
        cy.get('#scrollCats').should("be.visible")
        cy.get("#page").scrollTo(0, 0)
    })

    it("Scrollbuttons work", function () {
        cy.get("#page").scrollTo(0, 400)
        cy.get("#categoryScroll_2").click()
        cy.contains("Pizza Margherita").should("be.visible")

    })
    it("Scroll Highlighting works", function () {
        cy.get("#page").scrollTo(0, 1000)
        cy.get("#categoryScroll_1").should("have.class", "pseudoActiveElement")
        cy.get("#page").scrollTo(0, 0)
    })
})

export { }