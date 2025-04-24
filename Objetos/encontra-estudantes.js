const estudantes = require('./estudantes.json');

function buscaInformacao (lista, chave, valor){
    return lista.find((estudantes) => item[chave] === valor); // Serve para encontrar.

}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);