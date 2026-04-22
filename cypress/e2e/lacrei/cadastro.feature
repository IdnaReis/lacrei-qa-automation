# language: pt

Funcionalidade: Cadastro da pessoa usuária na Lacrei Saúde

  Cenário: Cadastro com dados válidos
    Dado que o usuário acessa a página de cadastro
    Quando preenche o campo Nome com "Teste Lacrei"
    E preenche o campo Sobrenome com "QA"
    E preenche o campo Email com "testelacrei@gmail.com"
    E confirma o Email com "testelacrei@gmail.com"
    E preenche o campo Senha com "Teste@123"
    E clica no botão Criar conta
    Então o sistema envia um email de confirmação
    E exibe mensagem de boas-vindas

  Cenário: Cadastro com campos vazios
    Dado que o usuário acessa a página de cadastro
    Quando clica no botão Criar conta sem preencher nenhum campo
    Então o sistema exibe mensagem "Este campo é obrigatório"