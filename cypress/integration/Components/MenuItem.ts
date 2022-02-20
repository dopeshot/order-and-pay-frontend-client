/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("MenuItem", () => {
    it('Exists', () => {
        cy.contains('[data-cy=cat-0_dish-0]').click()
        cy.get('[data-cy=menuItem]').should("be.visible")
    })
    it("Scrolls Away", function () {
        cy.get('[data-cy=menuItem]').scrollTo(0, -3000)
        cy.get('[data-cy=menuItem]').should("not.exist")
    })
    it("Clicks Away", function () {
        cy.get('[data-cy=cat-0_dish-0]').click();
        cy.get('[data-cy=clickAway]').click();
        cy.get('[data-cy=menuItem]').should("not.exist")
    })



    it('Can Type', function () {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.wait(200)
        cy.get('[data-cy=noteFormInput]').type("Hier werden Wünsche Wahr...");
        cy.get('[data-cy=clickAway]').click();
    });
    it('Displays Error Message', function () {
        cy.get('[data-cy=cat-2_dish-0]').click();
        cy.wait(200)
        cy.get('[data-cy=noteFormInput]').type("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
        cy.get('[data-cy=submitForm]').click();
        cy.get('[data-cy=note-input-error]').should('be.visible');
        cy.get('[data-cy=clickAway]').click();
    })

})

export { }