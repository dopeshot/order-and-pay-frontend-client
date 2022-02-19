/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("MenuItem", () => {
    it('Exists', () => {

        cy.contains("Gebackener Mozzarella").click()
        cy.get("#menuItem").should("be.visible")

    })



    it("Scrolls Away", function () {
        cy.get("#menuItem").scrollTo(0, -3000)
        cy.get("menuItem").should("not.exist")
    })

    /* TODO: Needs fixing

    it('Can Type', function () {
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.wait(200)
        cy.get('#noteFormInput').type("Hier werden Wünsche Wahr...");
        cy.get('#clickAway').click()
    });
    it('Displays Error Message', function () {
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.wait(200)
        cy.get('#noteFormInput').type("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
        cy.get('.h-full.pt-2 > .self-end > .svg-inline--fa > path').click();
        cy.get('[data-cy=note-input-error] > .text-sm').should('be.visible');
        cy.get('#clickAway').click()
    })
    */
})

export { }