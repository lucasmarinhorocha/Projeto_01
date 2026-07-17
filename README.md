# GearOne - Sistema de Gestão Integrada do HUB

## Visão Geral

Sistema completo de gestão integrada desenvolvido com React, TypeScript e Node.js, projetado para gerenciar eventos, insumos, ocorrências técnicas, documentos e presença em ambientes de centro de convivência ou hub cultural.

## 🚀 Características Principais

- ✅ **Dashboard Executivo** - Visualização em tempo real de métricas e indicadores
- ✅ **Controle de Insumos** - Gestão completa do almoxarifado
- ✅ **Registro de Ocorrências** - Sistema de chamados técnicos com fotos
- ✅ **Gestão Documental** - Geração automática de documentos (Carta de Anuência, etc)
- ✅ **Sistema de Presença** - Check-in via QR Code com fallback manual
- ✅ **Autenticação JWT** - Sistema seguro com tokens
- ✅ **RBAC** - Controle de acesso baseado em funções (Coordenador, Recepção, Produção, Limpeza)
- ✅ **Offline-First** - Sincronização automática quando reconectar
- ✅ **LGPD Compliance** - Criptografia de dados e consentimento
- ✅ **Responsivo** - Design mobile-first com Material-UI

## 📋 Pré-requisitos

- Node.js 16+ 
- npm ou yarn
- PostgreSQL 12+
- Git

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/secult-gestao.git
cd secult-gestao
```

### 2. Configure variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
NODE_ENV=development
BACKEND_PORT=3001
FRONTEND_URL=http://localhost:3000
DATABASE_URL=postgresql://admin:senha@localhost:5432/secult_db
JWT_SECRET=sua_chave_secreta_super_segura
```

### 3. Instale dependências

```bash
npm install
```

### 4. Configure o banco de dados

```bash
# Crie o banco de dados
createdb secult_db

# Execute as migrations
npm run db:migrate
```

### 5. Inicie o projeto

```bash
# Terminal 1 - Backend
npm run backend-dev

# Terminal 2 - Frontend
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
projeto-secult/
├── docs/                          # Documentação técnica
│   ├── ARQUITETURA_TECNICA.md
│   ├── API_SPEC.md
│   └── DATABASE_SCHEMA.sql
│
├── src/
│   ├── components/               # Componentes React (UI)
│   │   ├── Auth/
│   │   ├── Common/
│   │   ├── Dashboard/
│   │   ├── Insumos/
│   │   ├── Ocorrencias/
│   │   ├── Documentos/
│   │   └── Presenca/
│   │
│   ├── models/                   # Tipos TypeScript e DTOs
│   │   └── types.ts
│   │
│   ├── services/                 # Lógica de negócio e API
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── offline-sync.ts
│   │   └── notifications.ts
│   │
│   ├── controllers/              # Lógica de componentes (MVC)
│   │   ├── DashboardController.ts
│   │   └── ...
│   │
│   ├── context/                  # Context API (Estado global)
│   │   └── AuthContext.tsx
│   │
│   ├── utils/                    # Funções utilitárias
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── storage.ts
│   │
│   ├── styles/                   # Estilos CSS
│   │   └── global.css
│   │
│   ├── App.tsx                   # Componente raiz
│   └── index.tsx                 # Entry point
│
├── backend/                      # (Será implementado separadamente)
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   └── package.json
│
├── public/
│   ├── index.html
│   ├── service-worker.js
│   └── manifest.json
│
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## 🔐 Autenticação

O sistema utiliza JWT (JSON Web Tokens) para autenticação. Após o login, o token é armazenado no `localStorage` e incluído automaticamente em todas as requisições.

### Credenciais de Teste

```
Email: coordenador@test.com
Senha: password123
Perfil: COORDENADOR
```

## 📊 Módulos

### 1. Dashboard Executivo
- Visualização de métricas em tempo real
- Gráficos de eventos e público
- Status de contratos e alvarás
- Exportação de relatórios (PDF/Excel)

### 2. Controle de Insumos
- Cadastro e consulta de itens
- Controle de quantidade e localização
- Solicitação de reposição
- Alertas de estoque mínimo

### 3. Ocorrências Técnicas
- Registro de problemas com fotos
- Atribuição a fornecedores
- Fluxo de resolução
- Histórico de ocorrências

### 4. Gestão Documental
- Gerador de Carta de Anuência
- Repositório de contatos e credenciais
- Automação de preenchimento
- Geração de PDFs

### 5. Sistema de Presença
- Check-in via QR Code
- Fallback manual de presença
- Sincronização com digital
- Consentimento LGPD

## 🛠️ Desenvolvimento

### Adicionar um novo componente

```typescript
// src/components/NovoModulo/NovoComponente.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export const NovoComponente: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5">Meu novo componente</Typography>
    </Box>
  );
};
```

### Adicionar uma nova rota

```typescript
// No App.tsx
<Route path="/novo-modulo" element={<ProtectedRoute><Layout><NovoComponente /></Layout></ProtectedRoute>} />
```

### Consumir uma API

```typescript
import { apiClient } from '@services/api';

const dados = await apiClient.get('/api/endpoint');
const resultado = await apiClient.post('/api/endpoint', { data });
```

## 🧪 Testes

```bash
# Executar testes unitários
npm test

# Executar testes com coverage
npm test -- --coverage

# Executar testes E2E (Cypress)
npm run test:e2e
```

## 📦 Build

```bash
# Build de produção
npm run build

# O build será criado na pasta `build/`
```

## 🚢 Deploy

### Deployment na Vercel (recomendado para Frontend)

```bash
npm install -g vercel
vercel
```

### Deployment do Backend na Heroku

```bash
heroku create seu-app-backend
git push heroku main
```

## 📝 Roadmap de Desenvolvimento

**Fase 1: Fundação (Sprints 1-4)** ✅
- Setup e arquitetura
- Autenticação e RBAC

**Fase 2: Dashboard (Sprints 5-8)** ⏳
- Métricas em tempo real
- Alertas e contratos

**Fase 3: Almoxarifado (Sprints 9-12)** ⏳
- Inventário digital
- Reposição e alertas

**Fase 4: Ocorrências (Sprints 13-16)** ⏳
- Registro mobile
- Gestão de chamados

**Fase 5: Documentos (Sprints 17-20)** ⏳
- Gerador inteligente
- Repositório centralizado

**Fase 6: Presença (Sprints 21-24)** ⏳
- Sistema QR Code
- Sincronização offline

**Fase 7: RNF + Deploy (Sprints 25-26)** ⏳
- LGPD compliance
- Testes e produção

## 🐛 Troubleshooting

### Erro: "Cannot find module '@models/types'"
Verifique se os path aliases no `tsconfig.json` estão corretos.

### Erro: "CORS policy"
Verifique a variável `CORS_ORIGIN` no `.env` do backend.

### IndexedDB não funciona
Verifique se o navegador está em modo privado/incógnito.

## 📚 Documentação Adicional

- [Arquitetura Técnica Completa](./docs/ARQUITETURA_TECNICA.md)
- [Especificação de APIs](./docs/API_SPEC.md)
- [Schema do Banco de Dados](./docs/DATABASE_SCHEMA.sql)
- [Guia de Deployment](./docs/DEPLOYMENT_GUIDE.md)

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Para suporte, abra uma issue no repositório ou entre em contato com o time de desenvolvimento.

---

**Desenvolvido com ❤️ para GearOne**
