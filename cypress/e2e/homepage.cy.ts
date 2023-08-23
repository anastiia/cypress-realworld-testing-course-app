describe('homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('main headline', () => {
    it('h1 contains correct test', () => {
      cy.getByData('hero-heading').contains('Testing Next.js Applications with Cypress')
    })
  
    it('list of features are correct', () => {
      cy.get('dt').find('p').contains('4 Courses') 
      cy.get('dt').find('p').contains('25+ Lessons') 
      cy.get('dt').find('p').contains('Free and Open Source') 
    })
  })

  context('courses', () => {
    it('Testing Your First Next.js Application', () => {
      cy.getByData('course-title').contains('Testing Your First Next.js Application')
      cy.getByData('lesson-0').find('a').contains('App Install and Overview')
      cy.getByData('lesson-1').find('a').contains('Installing Cypress and writing our first test')
      cy.getByData('lesson-2').find('a').contains('Setting up Data Before Each Test')
      cy.getByData('course-0').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-your-first-application')
    })

    it('Testing Foundations', () => {
      cy.getByData('course-title').contains('Testing Your First Next.js Application')
      cy.getByData('lesson-0').find('a').contains('Testing is a Mindset')
      cy.getByData('lesson-1').find('a').contains('Knowing What to Test')
      cy.getByData('lesson-2').find('a').contains('Manual vs Automated Testing')
      cy.getByData('course-1').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-foundations')
    })

    it('Cypress Fundamentals', () => {
      cy.getByData('course-title').contains('Cypress Fundamentals')
      cy.getByData('lesson-0').find('a').contains('How to Write a Test')
      cy.getByData('lesson-1').find('a').contains('Cypress Runs in the Browser')
      cy.getByData('lesson-2').find('a').contains('Command Chaining')
      cy.getByData('course-2').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/cypress-fundamentals')
    })
  })

})
  
