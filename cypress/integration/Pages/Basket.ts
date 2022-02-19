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
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-0 > .px-5 > :nth-child(4) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-0 > .px-5 > :nth-child(3) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#orderButton > p').click();
        cy.get('.rounded-full').should('have.text', '3');
        cy.get('#basketButton').should('be.visible');
        cy.get('#basket').click();
        cy.get('.text-4xl').should('have.text', 'Warenkorb');
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1)').should('have.text', 'Gebackener Mozzarella');
        cy.get('.font-thin').should('have.text', '3 Items');
        cy.get(':nth-child(1) > .items-center > .bg-red').click();
        cy.get('.font-thin').should('have.text', '4 Items');
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get('.bg-button-grey > .svg-inline--fa').click();
        cy.get('#mainMenu ').click();
    })

    it("Adds and merges Complex Items ", () => {
        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get(':nth-child(1) > input').check();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-2 > .px-5 > :nth-child(4) > #dishCard > .flex-2\\/4 > .text-lg').click();
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get(':nth-child(4) > .self-start').click();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get(':nth-child(1) > input').check();
        cy.get('#orderButton > p').click();
        cy.get('#basket').click();
        cy.get('.font-thin').should('have.text', '5 Items');
        cy.get(':nth-child(1) > .items-center > .p-2').should('have.text', '3');
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get('.bg-button-grey > .svg-inline--fa').click();
        cy.get('.bg-button-grey > .svg-inline--fa > path').click();
        cy.get('#mainMenu ').click();
    })
})

export { }