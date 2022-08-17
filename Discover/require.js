/*
Função global require():
Responsável por invocar módulos do NodeJS; módulos built-in, externos ou criados.
*/

//console.log(require('path')) //path é um objeto (módulo) nativo que contém várias funções.
const path = require('path')

console.log(path.basename(__filename)) //através da função basename, descobrimos o nome base do arquivo atual.

