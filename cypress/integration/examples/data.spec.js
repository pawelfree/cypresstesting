describe("Write / Read JSON data", () => {

  it("should write to JSON", () => {
    cy.writeFile('./cypress/screenshots/log.json', { name: "Mike", age: 25 })
  })

  it("should write to text", () => {
    cy.writeFile('./cypress/screenshots/log.txt', 'Hello world');
  })

  it('should read from JSON', () => {
    cy.readFile('./cypress/screenshots/log.json').its('age').should('equal',25)
  })

  it('should read from txt', () => {
    cy.readFile('./cypress/screenshots/log.txt').should('equal', 'Hello world')
  })

  it('should read browser doc content type', () => {
    cy.visit('https://www.example.com')
    cy.document().its('contentType').should('eq', 'text/html')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

})