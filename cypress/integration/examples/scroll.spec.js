describe("Scroll on page", () => {

  it("should open website", () => {
    cy.visit("http://devexpress.github.io/testcafe/example", { timeout: 5000 });

    cy.get('#submit-button').scrollIntoView();

    cy.get('header').scrollIntoView();
  })

})