/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("DropDown", () => {
    it('Exists', function () {
        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#menu-button > .flex').should('have.text', ' Mittel 0,00 €');
        cy.get('[style="height: 40rem;"]').click();
    });


    it('Calculates Price correctly', function () {
        cy.get('#section-2 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(1)').click();
        cy.get('#orderButton > p').should('have.text', 'Für 3,50 € hinzufügen');
        cy.get('#menu-button > .flex').click();
        cy.get('.py-1 > :nth-child(3)').click();
        cy.get('#orderButton > p').should('have.text', 'Für 7,50 € hinzufügen');
        cy.get('[style="height: 40rem;"]').click();
    });
})

export { }