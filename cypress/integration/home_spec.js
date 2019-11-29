describe('Home page', function() {
  it('finds home content', function() {
    cy.visit('https://root.hoon.io')
    cy.contains('Bridging the gap between ideas and technology')
  })
})
