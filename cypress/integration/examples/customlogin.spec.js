describe("should custom login", () => {

  it("should fill username", () => {
    cy.visit("http://zero.webappsecurity.com/login.html", { timeout: 5000 });
    cy.login('username', 'password')
    cy.get('h2').contains('Cash Accounts');
  })

})