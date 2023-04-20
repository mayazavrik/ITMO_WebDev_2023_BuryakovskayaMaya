import DOM from '../../src/constants/dom'
describe('Create Todo', () => {
    it('user open main page and create task', () => {
      cy.visit('http://127.0.0.1:5173/');
      cy.get(`#${DOM.Button.CREATE_TASK}`)
        .should('exist')
        .should('contain.text', '+ Create Task').click();
    });
  });