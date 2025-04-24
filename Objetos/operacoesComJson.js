const estudante = require('./estudante.json'); // Converte o JSON para Objeto.

const stringEstudante = JSON.stringify(estudante) // Converte o Objeto para um String.
console.log(stringEstudante);
console.log(typeof(stringEstudante)); // verifica o tipo do objeto (confirma que é string).

const objEstudante = JSON.parse(stringEstudante); // converte a string para um objeto.
console.log(objEstudante);
console.log(typeof(objEstudante));// verifica o tipo do objeto (confirma que é objeto).
console.log(estudante.nome); // após se tornar um objeto, podemos voltar a trabalhar com ele desta forma.