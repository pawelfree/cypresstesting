import  { describe, it }  from "mocha";

describe("should test selectbox", () => {

  it("should open website", () => {
    cy.visit("http://devexpress.github.io/testcafe/example", { timeout: 5000 });
  })

  it("should select option in selectbox", () => {
    cy.get('#preferred-interface').select('JavaScript API')
    cy.get('#preferred-interface').should('have.value', 'JavaScript API');
    cy.get('#preferred-interface').select('Both')
    cy.get('#preferred-interface').should('have.value', 'Both');
  })
})