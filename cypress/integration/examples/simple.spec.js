import  { describe, it }  from "mocha";

describe("Browser action", () => {

  it("should load url", () => {
    cy.visit("http://books.toscrape.com", {timeout: 5000 });
    cy.url().should('include', 'toscrape')
    cy.log('before reload')
    cy.reload()
    cy.log('after reload')
    cy.url().should('include', 'toscrape')
  })

  it('should click', () => {
    cy.get('a').contains('Travel').click()
    cy.get('h1').contains('Travel')
  })

  it('should display number of results', () => {
    cy.get('.product_pod').its('length').should('eq', 11);
  })

  it('should challenge Poetry Click', () => {
    cy.get('a').contains('Poetry').click()
    cy.get('h1').contains('Poetry')
  })

  it('should challenge Olio Click', () => {
    cy.get('a').contains('Olio').click()
    cy.get('.price_color').contains('23.88')
  })

})