/// <reference types="Cypress" />

import { getMenu } from "../../../src/overmind/menu/effects"

const baseUrl = Cypress.config().baseUrl
before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")

})



describe("Payment Page", () => {
    it("Renders Correctly", () => {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=orderButton]').click();
        cy.get('[data-cy=basketButton]').click();
        cy.get('[data-cy=payscreen]').click();
        cy.get('[data-cy=title]').should('have.text', 'Zahlmethoden');
        cy.get('[data-cy=text]').should('have.text', 'Per Klick auf \'Jetzt bezahlen!\' werden Sie auf die jeweilige Seite des Anbieters weitergeleitet!');
        cy.get('[data-cy=back]').click();
        cy.get('[data-cy=back]').click();

    })

    it("Picks Payment Methods ", () => {

        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=orderButton]').click();
        cy.get('[data-cy=basketButton]').click();
        cy.get('[data-cy=payscreen]').click();
        cy.get(':nth-child(1) > input').check();
        cy.get(':nth-child(1) > input').should('be.checked');
        cy.get('#basket').click();
        cy.get('.bg-button-grey > .svg-inline--fa').click();
        cy.get('#mainMenu').click();

    })
    it("Orders correctly", () => {

        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=dropDown-0]').click();
        cy.get('[data-cy=option-2]').click();
        cy.get('[data-cy=checkbox-0]').check();
        cy.get('[data-cy=checkbox-1]').check();
        for (let n = 0; n < 4; n++) {
            cy.get('[data-cy=orderButtonPlus]').click();
        }
        cy.get('[data-cy=orderButton]').click();
        cy.get('[data-cy=basketButton]').click();
        cy.get('[data-cy=payscreen]').click();
        cy.get('[data-cy=check-applepay]').check();
        cy.get('[data-cy=confirm]').click();
        cy.get('[data-cy=backToMenu]').click();
        cy.url().should('eq', baseUrl + '/menu')


    })
})

export { }