/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("Searchbar", () => {
    it('Opens and Closes', () => {
        cy.get('#searchbar').click();
        cy.get('#searchDropDown').should("be.visible")
        cy.get('#searchContainer').click();
        cy.get('#searchDropDown').should('not.exist')


    })

    it("Can Search", function () {
        cy.get('#searchbar').click();
        cy.get('#searchbar2').type("Pizza");
        cy.get('#searchDropDown > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Pizza Margherita');
        cy.get('#searchDropDown > :nth-child(2) > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Pizza Gorgonzola');
        cy.get('#searchbar2').clear();
        cy.get('#searchContainer').click();

    })
    it("Can handle advanced queries", function () {
        cy.get('#searchbar').click();
        cy.get('#searchbar2').clear();
        cy.get('#searchbar2').type("piz");
        cy.get('#searchDropDown > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Pizza Margherita');
        cy.get('#searchDropDown > :nth-child(2) > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Pizza Gorgonzola');
        cy.get('#searchbar2').clear();
        cy.get('#searchbar2').type("brot");
        cy.get('#searchDropDown > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Pizzabrot mit Knoblauch');
        cy.get('#searchbar2').clear();
        cy.get('#searchbar2').type("korb");
        cy.get('.p-5 > #dishCard > .flex-2\\/4 > .text-lg').should('have.text', 'Korbinian Kuhn');
        cy.get('#searchbar2').clear();
        cy.get('#searchContainer').click();

    })
    it("Opens Menu Items", function () {
        cy.get('#searchbar').click();
        cy.get('#searchbar2').type("Pizza");
        cy.get('#searchDropDown > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-lg').click()
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.float-left').should('have.text', 'Pizza Margherita');
        cy.get('[style="height: 40rem;"]').click();
        /* ==== End Cypress Studio ==== */
    })


})

export { }