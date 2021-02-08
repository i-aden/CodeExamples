// https://docs.cypress.io/api/introduction/api.html

describe('Has a h2 with "Observer"', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains("h2", "Observer")
  })
})
