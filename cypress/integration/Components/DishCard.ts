
before(() => {
    cy.visit("/menu")
})
describe("DishCard", () => {
    it('Exists', () => {
    cy.get('#0_dishCard_Id').should("be.visible")
    })

    it("Renders Correctly", function() {
        cy.get("#0_dishCard_Id").should("have.class", "dish")
        cy.get("#0_dishCard_Id").contains("coke")
        cy.get("#0_dishCard_Id").contains("soda")
        cy.get("#0_dishCard_Id").contains("1,50 €")
    })
})

export {}