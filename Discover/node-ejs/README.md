# Parte 1
## Como redenrizar um arquivo .ejs
Iniciou um projeto NodeJS com **npm**
Criou arquivo HTML normal e mudou a extensão para .ejs
Criou servidor EJS instalando as bibliotecas necessárias **ejs** e **express**
Criado arquivo server.js
## Organização do projeto
Criou arquivos para cada seção da página, todos sob o diretório **views**
**head.ejs**
**header.ejs**
**footer.ejs**
Cada parte antes na página principal foi transportada para os arquivos acima.
Incluiu no **index.ejs** o carregamento de cada arquivo através do comando:
```
<%- include('head'); %>
<%- include('header'); %>
<%- include('footer'); %>
```
Automaticamente o arquivo principal carregou as funções.
Criada a página **about.ejs**
Adicionados links para as páginas ao **header.ejs**
Adicionada rota para a página about.ejs no arquivo **server.js**

### Views e partials
Para melhor organização dos arquivos de páginas e partes de páginas
Criados masi 2 diretórios no views: 
**pages** para armazenar as páginas index e about e, 
**partials** para armazenar head, header e footer