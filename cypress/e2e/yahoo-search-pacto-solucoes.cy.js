describe('Busca Pacto Soluções no Yahoo', () => {

  it('Buscar "Pacto Soluções" no Yahoo', () => {
    
    cy.visit('https://br.search.yahoo.com')

    
    cy.get('input[name="p"]').type('Pacto Soluções')

   
    cy.get('input[name="p"]').type('{enter}')

    
    cy.url().should('include', 'search')

    
    cy.get('body').should('contain.text', 'Pacto')
  })

})
