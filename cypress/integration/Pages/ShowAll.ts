
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

        cy.get('[data-cy=showAll]').click();
        cy.url().should('eq', baseUrl + '/categories')

        cy.get('[data-cy=page]').should("be.visible")
        cy.get('[data-cy=categoryHashlinks]').should("be.visible")

    })
    it("Buttons work", () => {

        cy.get('[data-cy=hashLink-1]').click()
        cy.url().should('eq', baseUrl + '/menu#section-1')

    })


})