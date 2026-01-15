# 📬 Smart Inbox – Frontend

Interface web do projeto **Smart Inbox**, responsável por permitir que o usuário envie emails (texto ou arquivo) e visualize a classificação e a resposta automática gerada pela IA.

---

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface
- **TypeScript** – Tipagem estática para maior segurança
- **Vite** – Build tool rápida e moderna
- **Tailwind CSS** – Estilização utilitária e responsiva
- **Lucide React** – Ícones modernos
- **Yarn** – Gerenciador de pacotes

---

## 🎯 Funcionalidades

- Inserção de texto de email manualmente
- Upload de arquivos `.txt` ou `.pdf`
- Envio do conteúdo para o backend
- Exibição da categoria do email:
  - **Produtivo**
  - **Improdutivo**
- Exibição da resposta automática sugerida pela IA
- Interface simples, responsiva e intuitiva

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
yarn install
yarn dev
```

O projeto será iniciado em: http://localhost:5173

## 🔗 Integração com o Backend

O frontend consome a API do backend através de requisições HTTP.

Exemplo de endpoint utilizado:

POST /analyze

Certifique-se de que o backend esteja rodando localmente ou hospedado na nuvem e que a URL esteja corretamente configurada no frontend.

## 🎨 Design

O layout foi desenvolvido utilizando Tailwind CSS, priorizando:

Clareza visual

Boa hierarquia de informações

Experiência fluida para o usuário
