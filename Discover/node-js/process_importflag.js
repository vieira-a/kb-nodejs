/**
 Importa a função do arquivo process_exportflag.js
 Executa a função passando a flag como argumento
 */

const getFlagPosition = require('./process_exportflag');

console.log(`Olá ${getFlagPosition('--name')}. ${getFlagPosition('--greeting')}`)

/*
Executar: node process_importflag.js --name "Anderson" --greeting "Tudo certo?!"
Saída: Olá Anderson. Tudo certo?!
*/

/**
 * Ou pode ser assim:
 * 
 const flagName = getFlagPosition('--name')
 const flagGreeting = getFlagPosition('--greeting')
 console.log(`Olá ${flagName}. ${flagGreeting}`)
 * 
 */