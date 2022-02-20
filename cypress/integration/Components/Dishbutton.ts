/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("Dishbutton", () => {
    it('Exists', function () {

        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=orderButtonMinus]').should('be.visible');
        cy.get('[data-cy=orderButtonCount]').should('be.visible');
        cy.get('[data-cy=orderButtonPlus]').should('be.visible');
        cy.get('[data-cy=orderButton]').should('be.visible');
        cy.get('[data-cy=clickAway]').click();

    });

    it('Plus and Minus works', function () {

        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=orderButtonCount]').should('have.text', '1');
        cy.get('[data-cy=orderButtonPlus]').click();
        cy.get('[data-cy=orderButtonCount]').should('have.text', '2');
        cy.get('[data-cy=orderButtonMinus]').click();
        cy.get('[data-cy=orderButtonCount]').should('have.text', '1');
        cy.get('[data-cy=orderButtonMinus]').click();
        cy.get('[data-cy=orderButtonMinus]').click();
        cy.get('[data-cy=orderButtonCount]').should('have.text', '1');
        for (let n = 0; n < 6; n++) {
            cy.get('[data-cy=orderButtonPlus]').click();
        }
        cy.get('[data-cy=orderButtonCount]').should('have.text', '7');
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 38,50 € hinzufügen');
        cy.get('[data-cy=clickAway]').click();

    });
})

export { }