

import cypress from "cypress"

describe("Renders homepage", () => {
    it("Renders correctly", () => {
        cy.visit("/menu");
        cy.get("#page").should("exist")
        cy.get("#searchbar").should("exist")
        cy.get("#categories").should("exist")
        cy.get("#menuComponent").should("exist")
        cy.get("#orderButton").should("exist")
    })
    it("Opens the 'Alles Anzeigen' page ", () => {
        cy.visit("/menu")
        cy.get('#showAll').click();
        cy.url().should('eq', 'http://localhost:3000/categories')
        cy.visit("/menu")
    })
})
  