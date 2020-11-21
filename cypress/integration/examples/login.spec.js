import  { describe, it }  from "mocha";

describe("login", () => {

  it('should change time', () => {
    const date = new Date('2020-01-01').getTime();
    cy.clock(date);
    cy.log(date)
  })

  it("should fill username", () => {
    cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 5000 });
    cy.clearCookies({ log: true })
    cy.clearLocalStorage('item', {log: true})
    cy.get('#user_login').as('username')
    cy.get('@username').clear()
    cy.get('@username').type('Some invalid name');
  })

  it('should fill password', () => {
    cy.get('#user_password').as('password')
    cy.get('@password').clear()
    cy.get('@password').type('Some invalid name');
  })

  it('should click on remember', () => {
    cy.get('input[type="checkbox"]').click()
  })

  it('should submit form', () => {
    cy.contains('Sign in').click()
  })

  it('should display error', () => {
    cy.get('.alert-error').should('be.visible').and('contain','are wrong')
  })

})