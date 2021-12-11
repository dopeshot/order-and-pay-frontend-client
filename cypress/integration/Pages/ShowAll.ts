
import cypress from "cypress"
import { useAppState } from '../../../src/overmind/index'

const baseUrl = Cypress.config().baseUrl



describe("Renders ShowAll Page", () => {
    it("Renders correctly", () => {
        cy.visit("/menu");
        cy.get('#showAll').click();
        cy.url().should('eq', baseUrl + '/categories')


        cy.get("#page").should("be.visible")
        cy.get("#categoryHashlinks").should("be.visible")

    })
    it("Buttons work", () => {

        cy.get("#hashLink_1").click()
        cy.url().should('eq', baseUrl + '/menu#section-2')

    })


})