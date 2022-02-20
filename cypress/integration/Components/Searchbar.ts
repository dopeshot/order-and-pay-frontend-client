/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("Searchbar", () => {
    it('Opens and Closes', () => {
        cy.get('[data-cy=searchbar]').click();
        cy.get('[data-cy=searchDropDown]').should("be.visible")
        cy.get('[data-cy=searchContainer]').click();
        cy.get('[data-cy=searchDropDown]').should('not.exist')


    })

    it("Can Search", function () {
        cy.get('[data-cy=searchbar]').click();
        cy.get('[data-cy=searchbar2]').type("Pizza");
        cy.get('[data-cy=result-0]').contains('Pizza Margherita');
        cy.get('[data-cy=result-1]').contains('Pizza Gorgonzola');
        cy.get('[data-cy=searchbar2]').clear();
        cy.get('[data-cy=searchContainer]').click();

    })
    it("Can handle advanced queries", function () {
        cy.get('[data-cy=searchbar]').click();
        cy.get('[data-cy=searchbar2]').clear();
        cy.get('[data-cy=searchbar2]').type("piz");
        cy.get('[data-cy=result-0]').contains('Pizza Margherita');
        cy.get('[data-cy=result-1]').contains('Pizza Gorgonzola');
        cy.get('[data-cy=searchbar2]').clear();
        cy.get('[data-cy=searchbar2]').type("brot");
        cy.get('[data-cy=result-0]').contains('Pizzabrot mit Knoblauch');
        cy.get('[data-cy=searchbar2]').clear();
        cy.get('[data-cy=searchbar2]').type("korb");
        cy.get('[data-cy=result-0]').contains('Korbinian Kuhn');
        cy.get('[data-cy=searchbar2]').clear();
        cy.get('[data-cy=searchContainer]').click();

    })
    it("Opens Menu Items", function () {
        cy.get('[data-cy=searchbar]').click();
        cy.get('[data-cy=searchbar2]').type("Pizza");
        cy.get('[data-cy=result-0]').click()
        cy.get('[data-cy=menuItem]').should("be.visible")
        cy.get('[data-cy=clickAway]').click();
    })


})

export { }