import cypress from "cypress"

describe("Renders ShowAll Page", () => {
    it("Renders correctly", () => {
        cy.visit("/menu");
        cy.get("#page").should("exist")
    })
    it("Opens the 'Alles Anzeigen' page ", () => {
        cy.visit("/menu")
        cy.get('#showAll').click();
        cy.url().should('eq', 'http://localhost:3000/categories')
        cy.visit("/menu")
    })
})