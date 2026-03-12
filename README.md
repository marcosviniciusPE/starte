# starte
# 🚀 Starte | Plataforma de Acolhimento para Docentes do Senac

Bem-vindo ao repositório oficial do **Starte**, a plataforma desenvolvida para apoiar e acolher docentes que ingressam no Senac, centralizando informações importantes da instituição em um único ambiente digital.

> **Status do Projeto:** 🚧 Em Desenvolvimento (Front-end & Arquitetura)

---

# 🎯 Objetivo

Facilitar o processo de **integração e adaptação de novos docentes no Senac**, permitindo que:

- **Docentes:** Tenham acesso centralizado a documentos importantes como código de conduta, planos de curso, orientações institucionais e materiais de apoio.
- **Coordenação:** Compartilhe informações essenciais e acompanhe o processo de integração dos professores.
- **Instituição:** Reduza a dificuldade de adaptação causada pela alta rotatividade de docentes, tornando o onboarding mais organizado e eficiente.

---

# 🛠️ Tecnologias Utilizadas

- **Backend:** Python 3 + Django Framework  
- **Frontend:** HTML5, CSS3 (Modularizado), JavaScript  
- **Banco de Dados:** PostgreSQL (ou outro a definir)  
- **Versionamento:** Git & GitHub  

---

# 📘 Guia de Desenvolvimento (Protocolo da Equipe)

Este documento define o padrão de trabalho para manter o projeto organizado e funcional, considerando o uso de computadores compartilhados.

## ⚠️ A REGRA DE OURO

**A branch main é sagrada.** Ela contém a versão oficial e funcional do sistema.

1. Ninguém coda na **main**
2. Ninguém dá **push direto na main**
3. Todo código novo deve passar por **Revisão (Pull Request)** antes de entrar

---

# 🔄 1. Rotina Diária (Começando os Trabalhos)

Antes de começar a programar, garanta que seu ambiente está atualizado.

## 🅰️ CENÁRIO A: O PC NÃO tem a pasta do projeto

Se é a primeira vez na máquina.

```bash
git clone https://github.com/SEU-USUARIO/Starte.git
cd Starte
code .
```

---

## 🅱️ CENÁRIO B: A pasta "Starte" JÁ EXISTE no PC

Abra o VS Code na pasta do projeto e execute:

```bash
git checkout main
git pull origin main
```

---

## 🆘 DEU ERRO NO GIT PULL?

Se aparecer conflito de arquivos modificados, rode o comando abaixo.

⚠️ Atenção: ele apaga alterações locais.

```bash
git reset --hard origin/main
```

---

# 🌿 2. Criando sua Tarefa (Branches)

Nunca trabalhe diretamente na **main**.

Use o padrão:

```
categoria/nome-da-tarefa
```

Tudo **minúsculo e separado por hífen**.

| Categoria | Uso | Exemplo |
|--------|--------|--------|
| feature/ | Nova funcionalidade | feature/tela-login |
| fix/ | Correção de bug | fix/botao-entrar |
| style/ | Ajuste visual | style/cores-home |

Criar branch:

```bash
git checkout -b feature/nome-da-sua-tarefa
```

---

# 🚀 3. Salvando e Enviando (Push)

Quando terminar uma tarefa:

Adicionar alterações:

```bash
git add .
```

Criar commit:

```bash
git commit -m "Descrição breve da alteração"
```

Enviar para o GitHub:

```bash
git push origin feature/nome-da-sua-tarefa
```

⚠️ Nunca usar:

```bash
git push origin main
```

---

# 🛡️ 4. Entregando a Tarefa (Pull Request)

Para integrar seu código ao projeto:

1. Entre no repositório no **GitHub**
2. Clique em **Compare & Pull Request**
3. Escreva um **título claro**
4. Clique em **Create Pull Request**
5. Avise o **Tech Lead** para revisão

---

# 🛠️ 5. Correções no Pull Request

Se o Tech Lead pedir alterações:

Vá para sua branch:

```bash
git checkout feature/sua-tarefa
```

Faça as correções e envie novamente:

```bash
git add .
git commit -m "Correções solicitadas"
git push origin feature/sua-tarefa
```

O Pull Request será atualizado automaticamente.

---

# ⚡ Cheat Sheet (Resumo de Comandos)

| Ação | Comando |
|------|------|
| Baixar projeto | `git clone [link]` |
| Atualizar projeto | `git pull origin main` |
| Limpar alterações | `git reset --hard origin/main` |
| Criar branch | `git checkout -b tipo/nome-tarefa` |
| Trocar branch | `git checkout nome-da-branch` |
| Enviar branch | `git push origin tipo/nome-tarefa` |
| Verificar status | `git status` |

---

# 📌 Sobre o Projeto

**Starte** é uma plataforma desenvolvida para melhorar o processo de **onboarding e acolhimento de docentes no Senac**, reunindo informações essenciais em um único ambiente digital.

O objetivo é tornar a adaptação de novos professores mais rápida, organizada e eficiente.

---
