describe('subscribe with email', () => {
  beforeEach(() => {
   cy.visit('http://localhost:3000')
  })

  it('subscribe success', () => {
    cy.getByData('email-input').should('exist').type('correct@example.com')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('exist').contains('correct@example.com')
  })

  it('subscribe with bad email', () => {
    cy.getByData('email-input').should('exist').type('wrong')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist')
    cy.get('input:invalid').eq(0).should('have.length', 1)
    cy.getByData('email-input').then(($input) => {
        expect($input[0].validationMessage).contains('Адрес электронной почты должен содержать символ "@"')
    })
  })

  it('subscribe with existing email', () => {
    cy.getByData('email-input').should('exist').type('john@example.com')
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist')
    cy.getByData('server-error-message').should('exist').contains('already exists. Please use a different email address.')
  })
})