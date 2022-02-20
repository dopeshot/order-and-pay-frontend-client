/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("Checkboxes", () => {
    it('Exists', function () {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=option-name-0]').should('have.text', 'Salami');
        cy.get('[data-cy=option-name-1]').should('have.text', 'Ananas');
        cy.get('[data-cy=checkbox-0]').should('have.attr', 'type', 'checkbox');
        cy.get('[data-cy=checkbox-1]').should('have.attr', 'type', 'checkbox');
        cy.get('[data-cy=clickAway]').click();
    });
    it('Can be checked and unchecked', function () {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=checkbox-0]').should('not.be.checked');
        cy.get('[data-cy=checkbox-1]').should('not.be.checked');
        cy.get('[data-cy=checkbox-0]').check();
        cy.get('[data-cy=checkbox-1]').check();
        cy.get('[data-cy=checkbox-0]').should('be.checked');
        cy.get('[data-cy=checkbox-1]').should('be.checked');
        cy.get('[data-cy=checkbox-0]').uncheck();
        cy.get('[data-cy=checkbox-1]').uncheck();
        cy.get('[data-cy=checkbox-0]').should('not.be.checked');
        cy.get('[data-cy=checkbox-1]').should('not.be.checked');
        cy.get('[data-cy=clickAway]').click();
    });
    it('Calculates Price correctly', function () {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 5,50 € hinzufügen');
        cy.get('[data-cy=checkbox-0]').check();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 6,50 € hinzufügen');
        cy.get('[data-cy=checkbox-1]').check();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 7,50 € hinzufügen');
        cy.get('[data-cy=checkbox-0]').uncheck();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 6,50 € hinzufügen');
        cy.get('[data-cy=checkbox-1]').uncheck();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 5,50 € hinzufügen');
        cy.get('[data-cy=dropDown-0]').click();
        cy.get('[data-cy=option-2]').click();
        cy.get('[data-cy=checkbox-0]').check();
        cy.get('[data-cy=dropDown-0]').click();
        cy.get('[data-cy=option-0]').click();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 4,50 € hinzufügen');
        cy.get('[data-cy=clickAway]').click();
    });


})

export { }