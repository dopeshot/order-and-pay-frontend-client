
import cypress from "cypress"
import { useAppState } from '../../../src/overmind/index'

const baseUrl = Cypress.config().baseUrl

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})

describe("Renders Categories Page", () => {
    it("Renders correctly", () => {

        cy.get('#showAll').click();
        cy.url().should('eq', baseUrl + '/categories')

        cy.get("#page").should("be.visible")
        cy.get("#categoryHashlinks").should("be.visible")

    })
    it("Buttons work", () => {

        cy.get("#hashLink_1").click()
        cy.url().should('eq', baseUrl + '/menu#section-1')

    })


})