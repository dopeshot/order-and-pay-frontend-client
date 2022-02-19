/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("Dishbutton", () => {
    it('Exists', function () {

        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('.h-14 > .flex > :nth-child(1) > .svg-inline--fa > path').should('be.visible');
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa > path').should('be.visible');
        cy.get('#orderButton > p').should('be.visible');
        cy.get('[style="height: 40rem;"]').click();

    });

    it('Plus and Minus works', function () {

        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('.flex > p').should('have.text', '1');
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('.flex > p').should('have.text', '2');
        cy.get('.h-14 > .flex > :nth-child(1) > .svg-inline--fa > path').click();
        cy.get('.flex > p').should('have.text', '1');
        cy.get('.h-14 > .flex > :nth-child(1) > .svg-inline--fa').click();
        cy.get('.h-14 > .flex > :nth-child(1) > .svg-inline--fa').click();
        cy.get('.flex > p').should('have.text', '1');
        cy.get('.h-14 > .flex > :nth-child(3) > .svg-inline--fa > path').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('.h-14 > .flex > :nth-child(3)').click();
        cy.get('.flex > p').should('have.text', '7');
        cy.get('#orderButton > p').should('have.text', 'Für 45,50 € hinzufügen');
        cy.get('[style="height: 40rem;"]').click();

    });
})

export { }