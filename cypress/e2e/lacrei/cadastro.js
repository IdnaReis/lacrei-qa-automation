import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que o usuário acessa a página de cadastro', () => {
  cy.visit('/cadastro')
})

When('preenche o campo Nome com {string}', (nome) => {
  cy.get('input[name="first_name"]').type(nome)
})

When('preenche o campo Sobrenome com {string}', (sobrenome) => {
  cy.get('input[name="last_name"]').type(sobrenome)
})

When('preenche o campo Email com {string}', (email) => {
  cy.get('input[name="email"]').type(email)
})

When('confirma o Email com {string}', (email) => {
  cy.get('input[name="email_confirmation"]').type(email)
})

When('preenche o campo Senha com {string}', (senha) => {
  cy.get('input[name="password"]').type(senha)
})

When('clica no botão Criar conta', () => {
  cy.contains('button', 'Criar conta').click()
})

Then('o sistema envia um email de confirmação', () => {
  cy.contains('confirmar').should('exist')
})

Then('exibe mensagem de boas-vindas', () => {
  cy.contains('Olá').should('exist')
})

When('clica no botão Criar conta sem preencher nenhum campo', () => {
  cy.contains('button', 'Criar conta').click()
})

Then('o sistema exibe mensagem {string}', (mensagem) => {
  cy.contains(mensagem).should('exist')
})