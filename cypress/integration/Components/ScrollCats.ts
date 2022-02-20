/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("Scrollcats", () => {
    it('Renders when scrolled down', () => {
        cy.get('[data-cy=page]').scrollTo(0, 400)
        cy.get('[data-cy=scrollCats]').should("be.visible")
        cy.get('[data-cy=page]').scrollTo(0, 0)
    })

    it("Scrollbuttons work", function () {
        cy.get('[data-cy=page]').scrollTo(0, 400)
        cy.get('[data-cy=categoryScroll-2]').click()
        cy.contains("Pizza Margherita").should("be.visible")

    })
    it("Scroll Highlighting works", function () {
        cy.get('[data-cy=page]').scrollTo(0, 1000)
        cy.get('[data-cy=categoryScroll-1]').should("have.class", "pseudoActiveElement")
        cy.get('[data-cy=page]').scrollTo(0, 0)
    })
})

export { }