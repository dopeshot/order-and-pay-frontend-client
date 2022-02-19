/// <reference types="Cypress" />

import { getMenu } from "../../../src/overmind/menu/effects"

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")

})
describe("Basket", () => {
    it('Exists', () => {

        cy.visit("/basket")

        cy.get('#container > .font-bold').should('be.visible');
        cy.get('.text-xl > .font-bold').should('be.visible');
        cy.get('.text-xl > .font-bold').should('have.text', '0,00 €');
        cy.get('.w-full > .container').should('be.visible');

        cy.get('#mainMenu > .svg-inline--fa').click();

    })

    it("Adds and removes simple Items", function () {
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-0 > .px-5 > :nth-child(2) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#orderButton > p').click();
        cy.get('#basket').click();
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1)').should('have.text', 'Gebackener Mozzarella');
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1)').should('have.text', 'Gemüseteller');
        cy.get('.font-thin').should('have.text', '2 Items');
        cy.get(':nth-child(1) > .items-center > .bg-red > .svg-inline--fa > path').click();
        cy.get(':nth-child(1) > .items-center > .bg-red > .svg-inline--fa').click();
        cy.get('.font-thin').should('have.text', '4 Items');
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa').click();
        cy.get('.bg-button-grey').click();
        cy.get('.font-thin').should('have.text', '0 Items');
        cy.get('#mainMenu').click();

    })


    it('Adds Items correctly', function () {

        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(1)').click();
        cy.get('.flex-col > :nth-child(1) > input').check();
        cy.get(':nth-child(2) > input').check();
        cy.get('#orderButton > p').click();
        cy.get('#section-2 > .px-5 > :nth-child(2) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get(':nth-child(2) > input').check();
        cy.get('#menu-button').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get('#orderButton > p').click();
        cy.get('#basket').click();
        cy.get(':nth-child(1) > :nth-child(1) > .text-xs').should('have.text', 'Klein, Salami,  Ananas, ');
        cy.get(':nth-child(2) > :nth-child(1) > .text-xs').should('have.text', 'Groß, Ananas, ');
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa').click();
        cy.get('.bg-button-grey > .svg-inline--fa').click();
        cy.get('#mainMenu > .svg-inline--fa').click();

    });

    it("Merges Equal Items together", function () {

        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .gap-1').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-2 > .px-5 > :nth-child(3) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('.flex-col > :nth-child(1) > input').check();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-2 > .px-5 > :nth-child(3) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get('.flex-col > :nth-child(1) > input').check();
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('#orderButton > p').click();
        cy.get('#section-2 > .px-5 > :nth-child(3) > #dishCard > .flex-2\\/4 > .gap-1').click();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get('.flex-col > :nth-child(1) > input').check();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('#orderButton > p').click();
        cy.get('#basket').click();
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1)').should('have.text', 'Gebackener Mozzarella');
        cy.get(':nth-child(1) > .items-center > .p-2').should('have.text', '4');
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1)').should('have.text', 'Pizza Chickenfleisch');
        cy.get(':nth-child(2) > .items-center > .p-2').should('have.text', '7');
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get(':nth-child(1) > .items-center > .bg-button-grey > .svg-inline--fa > path').click();
        cy.get('.bg-button-grey').click();
        cy.get('.bg-button-grey').click();
        cy.get('.bg-button-grey').click();
        cy.get('.bg-button-grey').click();
        cy.get('.bg-button-grey').click();
        cy.get('.bg-button-grey').click();
        cy.get('.bg-button-grey').click();
        cy.get('.font-thin').should('have.text', '0 Items');
        cy.get('#mainMenu > .svg-inline--fa').click();

    })
});

export { }