//@ts-nocheck

import cypress from "cypress"

describe("Renders homepage", () => {
    it("renders correctly", () => {
        cy.visit("/menu");
        cy.get("#container").should("exist")
    })
})
  