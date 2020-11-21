import  { describe, it }  from "mocha";

describe("screenshot", () => {

  it("should open website", () => {
    cy.visit("http://devexpress.github.io/testcafe/example", { timeout: 5000 });
  })

  it('fullpage', () => {
    cy.screenshot({ capture : "fullPage" })
  })

  it('single element', () => {
    cy.get('header').screenshot()
  })

  it('single (second) element', () => {
    cy.get('#populate').screenshot()
  })

})