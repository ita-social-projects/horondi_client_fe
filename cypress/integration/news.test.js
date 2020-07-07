describe('news test', () => {
  it('Click to news button', () => {
    cy.visit('/');
    cy.get('[href="/news"] > .MuiButtonBase-root')
      .should('exist')
      .and('be.visible')
      .click();
  });

  it('Go to news page', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:3000/news');
    });
  });

  it('Check elements at the news page', () => {
    cy.get('.makeStyles-newsTitle-34')
      .wait(100)
      .should('exist')
      .and('be.visible');

    cy.get('.makeStyles-NewsPageItem-35').should('exist').and('be.visible');
  });

  it('Click to news detail button', () => {
    cy.get(
      `:nth-child(1) > .MuiPaper-root > .makeStyles-newsFooter-44
         > a > .MuiButtonBase-root > .MuiButton-label`
    )
      .should('exist')
      .and('be.visible')
      .click();
  });

  it('Go to news detail page', () => {
    cy.location().should((location) => {
      expect(location.href).to.eq(
        'http://localhost:3000/news/5f0434835ac2ec33594276cd'
      );
    });
  });

  it('Check elements at the news detail page', () => {
    cy.get('.makeStyles-ArticleTitle-49').should('exist').and('be.visible');
    cy.get(':nth-child(2) > .MuiCardHeader-content > .MuiTypography-root')
      .should('exist')
      .and('be.visible');
    cy.get('.MuiCardContent-root > :nth-child(3)')
      .should('exist')
      .and('be.visible');
    cy.get('.makeStyles-imagesContainer-50 > .MuiCardMedia-root')
      .should('exist')
      .and('be.visible');
    cy.get('.makeStyles-newsText-52').should('exist').and('be.visible');
    cy.get(
      `.makeStyles-newsAuthorFooter-54 > .MuiCardHeader-root >
         .MuiCardHeader-content > .MuiTypography-root`
    )
      .should('exist')
      .and('be.visible');
    cy.get('.makeStyles-newsAuthorFooter-54 > .MuiCardMedia-root')
      .should('exist')
      .and('be.visible');
  });
});
