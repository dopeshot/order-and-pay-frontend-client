/// <reference types="Cypress" />

before(() => {
    cy.visit("/menu")
})
describe("Category Buttons", () => {
    it('Exists', () => {
    cy.get('#categories').should("be.visible")
    })

    it("Button Scolls work", function() {

        cy.get("#categoryButton_2").click()
        cy.get('#categoryButton_2').invoke('text').as('button2').then(() =>{
            cy.get("#menuComponent").contains(this.button2).should("be.visible")
        })
        

        cy.get("#categoryButton_0").click()
        cy.get('#categoryButton_0').invoke('text').as('button0').then(() =>{
            cy.get("#menuComponent").contains(this.button0).should("be.visible")
        })
    })
});

export {}