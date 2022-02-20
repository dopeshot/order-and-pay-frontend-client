/// <reference types="Cypress" />

import { getMenu } from "../../../src/overmind/menu/effects"

const baseUrl = Cypress.config().baseUrl
before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")

})


describe("Adds Simple Items and Renders Basket correctly", () => {
    it("Adds and removes Simple Items", () => {
        cy.get('[data-cy=cat-0_dish-0]').click();
        cy.wait(200)
        cy.get('[data-cy=orderButton]').click();
        cy.wait(200)
        cy.get('[data-cy=cat-0_dish-3]').click();
        cy.wait(200)
        cy.get('[data-cy=orderButton]').click();
        cy.wait(200)
        cy.get('[data-cy=cat-0_dish-2]').click();
        cy.wait(200)
        cy.get('[data-cy=orderButton]').click();
        cy.get('[data-cy=itemCount]').should('have.text', '3');
        cy.get('[data-cy=basketButton]').should('be.visible');
        cy.get('[data-cy=basketButton]').click();
        cy.get('[data-cy=title]').should('have.text', 'Warenkorb');
        cy.get('[data-cy=title-0]').should('have.text', 'Gebackener Mozzarella');
        cy.get('[data-cy=itemCount]').should('have.text', '3 Items');
        cy.get('[data-cy=plus-0]').click();
        cy.get('[data-cy=itemCount]').should('have.text', '4 Items');
        for (let n = 0; n < 4; n++) {
            cy.get('[data-cy=minus-0]').click();
        }
        cy.get('[data-cy=back]').click();
    })

    it("Adds and merges Complex Items ", () => {
        for (let n = 0; n < 4; n++) {
            cy.get('[data-cy=cat-2_dish-0]').click();
            cy.get('[data-cy=checkbox-0]').check();
            cy.get('[data-cy=checkbox-1]').check();
            cy.get('[data-cy=dropDown-0]').click();
            cy.get('[data-cy=option-2]').click();
            cy.get('[data-cy=orderButton]').click();
        }
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=checkbox-0]').check();
        cy.get('[data-cy=checkbox-1]').check();
        cy.get('[data-cy=dropDown-0]').click();
        cy.get('[data-cy=option-1]').click();
        cy.get('[data-cy=orderButton]').click();

        cy.get('[data-cy=basketButton]').click();
        cy.get('[data-cy=itemCount]').should('have.text', '5 Items');;
        cy.get('[data-cy=count-0]').should('have.text', '4');
        cy.get('[data-cy=count-1]').should('have.text', '1');
        for (let n = 0; n < 5; n++) {
            cy.get('[data-cy=minus-0]').click();
        }
        cy.get('[data-cy=back]').click();

    })
})

export { }