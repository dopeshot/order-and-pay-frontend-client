
import cypress from "cypress"


const baseUrl = Cypress.config().baseUrl
before(() => {
    //  cy.intercept('GET', '**/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
})

describe("Renders homepage", () => {
    it("Renders correctly", () => {
        cy.get("#page").should("be.visible")
        cy.get("#searchbar").should("be.visible")
        cy.get("#categories").should("be.visible")
        cy.get("#menuComponent").should("be.visible")
        cy.get("#orderButton").should("be.visible")
        cy.get("#head").contains("Menü")
        cy.get("#head").contains("Kategorien")
        cy.get("#head").contains("Alle Anzeigen")
    })
    it("Opens the 'Alles Anzeigen' page ", () => {
        cy.get('#showAll').click();
        cy.url().should('eq', baseUrl + '/categories')
    })


})
