import  { describe, it }  from "mocha";

describe("keyboard simulation", () => {
  it("should submit searchbox", () => {
    cy.visit("http://zero.webappsecurity.com/index.html", { timeout: 5000 });

    cy.get('#searchTerm').type('some text {enter}');
    cy.get('h2').contains('Search Results:')

  })

})