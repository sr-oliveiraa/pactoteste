
## Instalação

```bash
npm run install
```

## Executar Testes

**Cypress:**
```bash
npm run cypress
```

**Playwright:**
```bash
npm run playwright
```

## Testes

1. Busca "Pacto Soluções" no Yahoo
2. Verifica data de atualização dos termos de segurança da UOL

## Estrutura

```
cypress/e2e/yahoo-search-pacto-solucoes.cy.js
cypress/e2e/uol-termos-seguranca.cy.js

tests/playwright/yahoo-search-pacto-solucoes.spec.js
tests/playwright/uol-termos-seguranca.spec.js

cypress.config.js
playwright.config.js
package.json
```

