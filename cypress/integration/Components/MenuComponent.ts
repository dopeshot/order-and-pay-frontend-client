
before(() => {
    cy.visit("/menu")
})
describe("MenuComponent", () => {
    it('Exists', () => {
    cy.get('#menuComponent').should("be.visible")
    })

    it("Renders Correctly", function() {
        cy.get("#0_dishCard_Id").contains("coke")
        cy.contains("coke").should("be.visible")
        cy.scrollTo(0, 1000)
        cy.contains("Alcohol").should("be.visible")
        cy.get("#scrollCats").should("be.visible")
    })
});