import  { describe, it }  from "mocha";

describe("page title", () => {

  it("should get title", () => {
    cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 5000 });
    cy.title().should('include', 'Zero - Log in')
  })

})