/*
Arquivo que irá exportar uma função getFlag()
Receberá um argumento tipo String
Buscar dentro do array process.argv a flag desejada e retornar o valor da flag
*/

function getFlagPosition(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}
module.exports = getFlagPosition;