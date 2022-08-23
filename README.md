# Sobre

Este repositório tem como objetivo armazenar anotações e exemplos acerca do "Curso Rocketseat Ignite 4.0 Trilha NodeJS".

## Conceitos do NodeJS

Node.js é um ambiente de execução server side.
[Documentação](https://nodejs.org/en/docs/)

### REPL
O "prompt" do Node. Usado para escrever instruções de JavaScript puro no terminal. Não existe interação com o DOM.

### Funções globais (global)

- [x] __dirname : imprime o diretório atual
- [x] __filename : imprime o nome do arquivo atual
- [x] console : exibe informações no console
- [x] global : função que exibe todos os objetos do Node
- [x] module.export() : função para exportar módulos criados para ser utilizado por outro arquivo
- [x] process : mostra todos os processos executados pelo Node na execução de um arquivo
- [x] require : responsável por invocar módulos do NodeJS; módulos built-in, externos ou criados.

**Exercícios da seção**
- Ver arquivos process_exportflag.js e process_importflag

### NPM - Node Package Manager
#### Como iniciar um novo projeto com NodeJs

**npm init -y** cria um package.json, arquivo que contém todas as dependências de modulos do Node.
**npm update** atualiza as alterações manuais que podem ser realizadas no arquivo package.json.
**npm install cfonts** para instalar módulo cfonts. Os próprios módulos carregam suas dependências; só instalamos o módulo principal, os módulos e suas dependências são instaladas numa pasta **node_modules** que é criada.
Não é necessário subir no git a pasta node_modules. 
**npm install** instala todas as dependêcias de acordo com o contido no arquivo package.json.
O arquivo package-lock.json não deve ser alterado. Serve para o mapeamento de módulos.
Execução de script
Instalação de forma global
Atualização de módulos

**Exercício da seção**
Criado um aplicativo para interação com o usuário, utilizando:
**process.stdout** para escrever saidas na tela
**process.stdin** para requisitar interação
**process.on** para criar funções que 'escutem'
**Assincronismo** função aguardando callback

- [] Criar um array com perguntas
- [] Criar função para "chamar" as perguntas do array utilizando o **process.stdout.write**

### Timers
Funções utilizadas para automatizar execução de instruções no JS.
**setTimeout** configura o tempo que aplicação aguarda até a execução da tarefa;
**clearTimeout** cancela o tempo configurado;
**setInterval** configura o intervalo de execução de uma tarefa;
**clearInterval** cancela o intervalo configurado
