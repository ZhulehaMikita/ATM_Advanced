/// <reference types="cypress" />
const pageSwitcher = require('../../step_definitions/page_switcher');
const credentials = require('../../step_definitions/data/credentials.json');

describe('Advanced actions using Cypress', () => {
  
  beforeEach(() => {
    cy.viewport(1920, 1080)
    
    cy.intercept('http://localhost:8080/api/v1/superadmin_personal/widget/17', (req) => {  
      req.reply(res => {     
        res.body.name = 'Test case name has been changed'
      }); 
    }).as('widget')

    pageSwitcher.setState('Login')
    cy.visit(pageSwitcher.getUrl())
    cy.get(pageSwitcher.getElement('Login field')).type(credentials.admin.login)
    cy.get(pageSwitcher.getElement('Password field')).type(credentials.admin.password)
    cy.get(pageSwitcher.getElement('Login button')).click()
    pageSwitcher.setState('Dashboards')
    cy.get(pageSwitcher.getElement('First dashboard')).click()
  });

  it('Drag and drop test', () => {
    cy.contains('LAUNCH STATISTICS AREA')
    .trigger('mousedown')
    .trigger('mousemove', { clientX: 450, clientY: 425 })
    .trigger('mouseup', { force: true })
    cy.get(pageSwitcher.getElement('Second widget')).should('have.attr', 'style').should('contain', 'translate(10px, 10px)')
    cy.get(pageSwitcher.getElement('First widget')).should('have.attr', 'style').should('contain', 'translate(10px, 375px)')

    cy.contains('LAUNCH STATISTICS AREA')
    .trigger('mousedown')
    .trigger('mousemove', { clientX: 450, clientY: -425 })
    .trigger('mouseup', { force: true })
    cy.get(pageSwitcher.getElement('Second widget')).should('have.attr', 'style').should('contain', 'translate(10px, 302px)')
    cy.get(pageSwitcher.getElement('First widget')).should('have.attr', 'style').should('contain', 'translate(10px, 10px)')
  });

  it('Resizing test', () => {
    cy.get(pageSwitcher.getElement('Resizing option'))
    .trigger('mousedown')
    .trigger('mousemove', { clientX: 1100, clientY: 525})
    .trigger('mouseup', { force: true })
    
    cy.get(pageSwitcher.getElement('First widget'))
    .should('have.attr', 'style')
    .and('include', 'width: 783px')
    .and('include', 'height: 793px')

    cy.get(pageSwitcher.getElement('First widget content'))
    .should('have.css', 'width')
    .and('eq', '781px')

    cy.get(pageSwitcher.getElement('First widget content'))
    .should('have.css', 'height')
    .and('eq', '731px');

    cy.get(pageSwitcher.getElement('Second widget')).should('have.attr', 'style').should('contain', 'translate(10px, 813px)')
    
    cy.get(pageSwitcher.getElement('Resizing option'))
    .trigger('mousedown')
    .trigger('mousemove', { clientX: 760, clientY: -525})
    .trigger('mouseup', { force: true })
   
    cy.get(pageSwitcher.getElement('First widget'))
    .should('have.attr', 'style')
    .and('include', 'width: 443px')
    .and('include', 'height: 282px')

    cy.get(pageSwitcher.getElement('First widget content'))
    .should('have.css', 'width')
    .and('eq', '441px')
    
    cy.get(pageSwitcher.getElement('First widget content'))
    .should('have.css', 'height')
    .and('eq', '222px')

    cy.get(pageSwitcher.getElement('Second widget')).should('have.attr', 'style').should('contain', 'translate(10px, 302px)')
  });

  it('Scrolling test', () => {
    cy.get(pageSwitcher.getElement('Scrollable window element')).scrollTo('bottom')
    cy.contains('All rights reserved').should('be.visible')

    cy.get(pageSwitcher.getElement('First widget')).scrollIntoView()
    cy.contains('LAUNCH STATISTICS AREA').should('be.visible')
  });

  it('Interception test', () =>{
    cy.wait('@widget').its('response.body.name').should('eq', 'Test case name has been changed')
  })
})