
import cypress from "cypress"


const baseUrl = Cypress.config().baseUrl
before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})

describe("Renders homepage", () => {
    it("Renders correctly", () => {
        cy.get('[data-cy=page]').should("be.visible")
        cy.get('[data-cy=searchbar]').should("be.visible")
        cy.get('[data-cy=categories]').should("be.visible")
        cy.get('[data-cy=menuComponent]').should("be.visible")

        cy.get('[data-cy=head]').contains("Menü")
        cy.get('[data-cy=head]').contains("Kategorien")
        cy.get('[data-cy=head]').contains("Alle Anzeigen")
    })
    it("Opens the 'Alles Anzeigen' page ", () => {
        cy.get('[data-cy=showAll]').click();
        cy.url().should('eq', baseUrl + '/categories')
        cy.visit("/menu");
    })


})
