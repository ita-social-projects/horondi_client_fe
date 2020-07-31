describe('news test', () => {
  it('Click to news button', () => {
    cy.visit('/');
    cy.get('[href="/news"]').should('exist').and('be.visible').click();
  });

  it('Go to news page', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/news');
    });
  });

  it('Check elements at the news page', () => {
    cy.get('h1').wait(100).should('exist').and('be.visible');

    cy.get('#root > div.makeStyles-root-1 > div > div:nth-child(1)')
      .should('exist')
      .and('be.visible');
    cy.get(
      '#root > div.makeStyles-root-1 > div > div:nth-child(1) > div > div.MuiCardHeader-root'
    )
      .should('exist')
      .and('be.visible');
    cy.get(
      '#root > div.makeStyles-root-1 > div > div:nth-child(1) > div > div.MuiCardContent-root'
    )
      .should('exist')
      .and('be.visible');
    cy.get('div > div:nth-child(1) a > button')
      .should('exist')
      .and('be.visible');
  });

  it('Click to news detail button', () => {
    cy.get(
      `#root > div.makeStyles-root-1 > div > div:nth-child(1) > div a > button`
    )
      .should('exist')
      .and('be.visible')
      .click();
  });

  it('Go to news detail page', () => {
    cy.location().should((location) => {
      expect(location.href).to.not.equal('http://localhost:3000/news');
    });
  });

  it('Check elements at the news detail page', () => {
    cy.get('h2').should('exist').and('be.visible');
    cy.get(':nth-child(2) > .MuiCardHeader-content > .MuiTypography-root')
      .should('exist')
      .and('be.visible');
    cy.get('.MuiCardContent-root > :nth-child(3)')
      .should('exist')
      .and('be.visible');
    cy.get('[title]').should('exist').and('be.visible');
    cy.get('#fullText').should('exist').and('be.visible');
    cy.get('#newsAuthor').should('exist').and('be.visible');
    cy.get('#newsAuthorAvatar').should('exist').and('be.visible');
  });
});
