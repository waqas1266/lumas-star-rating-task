// https://on.cypress.io/api

describe('categoryStarRating', () => {
    it('should open the root url', () => {
        cy.visit('/')
        cy.contains('h1', 'Category Rating')
    })

    it('should open the root url and check category-stars children', () => {
        cy.visit('/')
        cy.get('.category-items').should('have.length', 1).children().should('have.length', 3)
    })

    it('should click the 3rd star and verify rating', () => {
        cy.visit('/')
        cy.get('.category-items .rating-stars:first-child .star:nth-child(3)').click()
        cy.contains('.category-items .rating-stars:first-child .rating', '3/5')
    })

  it('should click the 3rd star and verify rating and reset it', () => {
    cy.visit('/')
    cy.get('.category-items .rating-stars:first-child .star:nth-child(3)').click()
    cy.contains('.category-items .rating-stars:first-child .rating', '3/5')
    cy.get('.action-buttons button:nth-child(2)').click()
    cy.contains('.category-items .rating-stars:first-child .rating', '0/5')
  })

  it('should click the submit button and check for the Validation', () => {
    cy.visit('/');
    cy.get('.action-buttons button:nth-child(1)').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Please select the rating for at least one category');
    });
  });
})
