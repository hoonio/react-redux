describe('Home page', function() {
  it('finds content homeyes', function() {
    cy.visit('https://test.hoonio.com')
    cy.contains('Bridging the gap between ideas and technology')
  })
})
