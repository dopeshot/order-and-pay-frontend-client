/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("DropDown", () => {
    it('Exists', function () {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=dropDown-0]').should('have.text', ' Mittel 0,00 €');
        cy.get('[data-cy=clickAway]').click();
    });


    it('Calculates Price correctly', function () {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.get('[data-cy=dropDown-0]').click();
        cy.get('[data-cy=option-0]').click();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 3,50 € hinzufügen');
        cy.get('[data-cy=dropDown-0]').click();
        cy.get('[data-cy=option-2]').click();
        cy.get('[data-cy=orderButtonPrice]').should('have.text', 'Für 7,50 € hinzufügen');
        cy.get('[data-cy=clickAway]').click();
    });
})

export { }