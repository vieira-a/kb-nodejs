/*
Process é outra função global que mostra tudo o que está sendo executado no Node.
*/

//console.log(process)

/* 
Retorna os processos da execução atual em forma de array. 
console.log(process.argv) 
*/

const firstName = process.argv[2]

const lastName = process.argv[3]

console.log(`Meu nome é ${firstName} ${lastName}`)

