describe('termos de segurança UOL', () => {

  it('Verificar data de atualização dos termos de segurança', () => {
    cy.visit('https://www.uol.com.br', { timeout: 120000 })

    cy.get('a').contains('Termos', { timeout: 30000 }).click()

    cy.url({ timeout: 30000 }).should('include', 'termo')

    cy.get('body').should('contain.text', '2024')
  })

})
