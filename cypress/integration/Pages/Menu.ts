
import cypress from "cypress"


const baseUrl = Cypress.config().baseUrl
before(() => {
    cy.visit("/menu")
})

describe("Renders homepage", () => {
    it("Renders correctly", () => {
        cy.get("#page").should("be.visible")
        cy.get("#searchbar").should("be.visible")
        cy.get("#categories").should("be.visible")
        cy.get("#menuComponent").should("be.visible")
        cy.get("#orderButton").should("be.visible")
    })
    it("Opens the 'Alles Anzeigen' page ", () => {
        cy.get('#showAll').click();
        cy.url().should('eq',baseUrl+ '/categories')
        cy.visit("/menu")
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
})
  