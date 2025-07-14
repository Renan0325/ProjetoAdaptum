# 🗂️ Projeto CRUD de Regiões

Este é um sistema completo de **cadastro e gerenciamento de regiões**, desenvolvido com foco em **boas práticas**, **interface intuitiva** e **arquitetura escalável**.

O sistema permite a **criação, listagem, edição, ativação e inativação** de regiões, respeitando regras como unicidade por UF + Nome e controle de status. Toda a aplicação é dividida em duas camadas — **backend em .NET** e **frontend em React.js**, integradas via API RESTful.

Este projeto tem como objetivo demonstrar a capacidade de entregar uma solução funcional, bem estruturada e qualidade de código.


---

## ✅ Funcionalidades Implementadas

- ✔️ Cadastro de nova região (UF + Nome)
- ✔️ Validação para evitar duplicidade por UF + Nome (mesmo inativas)
- ✔️ Listagem ordenada por UF e Nome
- ✔️ Edição de regiões com preenchimento automático do formulário
- ✔️ Ativação e inativação de regiões com confirmação visual
- ✔️ Scroll ou paginação para longas listas
- ✔️ Feedback de sucesso e erro com SweetAlert2

---

## 🚀 Tecnologias Utilizadas

### 🖥️ **Frontend** (React + Bootstrap)
- React com Vite
- Axios para chamadas HTTP
- Bootstrap 5 para layout e responsividade
- SweetAlert2 para feedback visual
- Componentização 
- Paginação personalizada com controle de estado

### 🛠️ **Backend** (.NET + PostgreSQL)
- ASP.NET Core Web API (C#)
- Entity Framework Core com Code First
- PostgreSQL com migrations
- LINQ para consultas ordenadas e validações
- Injeção de dependência (`RegionService`)
- ViewModels e DTOs
- Configuração de CORS para frontend React

### ✅ **Testes**
- xUnit com cobertura da `RegionService`
- Banco de dados InMemory para isolamento
- Validação de criação, duplicação, edição, ativação e ordenação

---

## Banco de dados utilizado POSTGRESQL.
- Foi utilizado o banco de dados POSTGRESQL para a realização de manipulação dos dados vigentes.

## 📁 Estrutura do Projeto
/backend
├── Controllers
├── Services
├── Models
├── Data
├── ViewModels
└── Program.cs

/frontend
├── src
│ ├── api
│ ├── services
│ ├── components
│ ├── pages
│ ├── App.jsx
│ └── main.jsx



