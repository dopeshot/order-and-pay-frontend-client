/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("Dishbutton", () => {
    it('Exists', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get(':nth-child(2) > .flex-col > :nth-child(1) > .flex > :nth-child(1)').should('have.text', 'Salami');
        cy.get(':nth-child(2) > .flex-col > :nth-child(2) > .flex > :nth-child(1)').should('have.text', 'Ananas');
        cy.get('.flex-col > :nth-child(1) > input').should('have.attr', 'type', 'checkbox');
        cy.get(':nth-child(2) > input').should('have.attr', 'type', 'checkbox');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[style="height: 40rem;"]').click();
        /* ==== End Cypress Studio ==== */
    });



    /* ==== Test Created with Cypress Studio ==== */
    it('Can be checked and unchecked', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').click();
        cy.get('.flex-col > :nth-child(1) > input').should('not.be.checked');
        cy.get(':nth-child(2) > input').should('not.be.checked');
        cy.get('.flex-col > :nth-child(1) > input').check();
        cy.get(':nth-child(2) > input').check();
        cy.get('.flex-col > :nth-child(1) > input').should('be.checked');
        cy.get(':nth-child(2) > input').should('be.checked');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[style="height: 40rem;"]').click();
        /* ==== End Cypress Studio ==== */
    });

    it('Calculates Price correctly', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').click();
        cy.get('#orderButton > p').should('have.text', 'Für 5,50 € hinzufügen');
        cy.get('.flex-col > :nth-child(1) > input').check();
        cy.get('#orderButton > p').should('have.text', 'Für 6,50 € hinzufügen');
        cy.get(':nth-child(2) > input').check();
        cy.get('#orderButton > p').should('have.text', 'Für 7,50 € hinzufügen');
        cy.get('.flex-col > :nth-child(1) > input').uncheck();
        cy.get('#orderButton > p').should('have.text', 'Für 6,50 € hinzufügen');
        cy.get(':nth-child(2) > input').uncheck();
        cy.get('#orderButton > p').should('have.text', 'Für 5,50 € hinzufügen');
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get('.flex-col > :nth-child(1) > input').check();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(1)').click();
        cy.get('#orderButton > p').should('have.text', 'Für 4,50 € hinzufügen');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[style="height: 40rem;"]').click();
        /* ==== End Cypress Studio ==== */
    });


})

export { }