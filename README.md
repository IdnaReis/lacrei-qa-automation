# 🧪 Desafio QA — Lacrei Saúde

**Analista:** Idna Reis  
**Data:** Abril/2026  
**Ambiente:** https://paciente-staging.lacreisaude.com.br

---

## 📋 Sobre o Projeto

Projeto de Quality Assurance desenvolvido como parte do desafio técnico da Lacrei Saúde, uma health tech dedicada à comunidade LGBTQIAPN+.

O objetivo foi garantir a qualidade dos principais fluxos da plataforma, validando aspectos funcionais, acessibilidade, desempenho, responsividade e automação.

---

## 🚀 Como Configurar o Ambiente

### Pré-requisitos
- Node.js 18+
- npm 9+
- Git

### Instalação
```bash
git clone https://github.com/IdnaReis/lacrei-qa-automation.git
cd lacrei-qa-automation
npm install
```

---

## ▶️ Como Executar os Testes

### Testes Manuais
Acesse o ambiente de staging:

https://paciente-staging.lacreisaude.com.br

### Testes Automatizados — Interface gráfica
```bash
npx cypress open
```

### Testes Automatizados — Terminal
```bash
npx cypress run --headless
```

---

## 📁 Organização da Documentação

```
lacrei-qa-automation/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   └── e2e/
│       └── lacrei/
│           ├── cadastro.feature
│           └── cadastro.js
├── cypress.config.js
└── README.md
```



---

## 🔒 Checklist de Segurança

- ✅ Ambiente de staging utilizado — dados reais não expostos
- ✅ Credenciais de teste não salvas no repositório
- ✅ node_modules não versionado
- ✅ Testes executados em ambiente isolado

---

## 📊 Resultados dos Testes

| Tipo | Resultado |
|------|-----------|
| Testes Funcionais | 9 casos executados |
| Acessibilidade Lighthouse | 96/100 ✅ |
| Performance Lighthouse | 15/100 🔴 |
| Responsividade Mobile | Aprovado ✅ |
| Bugs encontrados | 4 bugs documentados |

---

## 🐛 Bugs Encontrados

| ID | Título | Prioridade |
|----|--------|------------|
| BUG01 | Mensagem de erro genérica no login | 🟡 Médio |
| BUG02 | Mensagem genérica na recuperação de senha | 🟡 Médio |
| BUG03 | Performance crítica — LCP 13.2s | 🔴 Alto |
| BUG04 | Atributos ARIA proibidos | 🔴 Alto |

---

## 📎 Links

- 📋 [Documentação completa no Notion](https://www.notion.so/Desafio-QA-Lacrei-Sa-de-349573f9cc6a80729274ff4440ba7c8d?source=copy_link)
- 💼 [LinkedIn](https://linkedin.com/in/idna-reis)
- 🐙 [GitHub](https://github.com/IdnaReis)

---

## 💙 Sobre a Analista

Idna Reis — QA Analyst com 18 anos de experiência prática em validação de sistemas, homologação e testes manuais. Atualmente em formação especializada em QA pela Qazando.

> *"Qualidade é cuidado — cada teste realizado representa uma pessoa que terá uma experiência mais segura."*

