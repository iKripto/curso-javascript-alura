const estudante = require('./estudante.json');
console.log(estudante)
// vai converter o json para um objeto em javascript para que possa trabalhar.

console.log(require('./estudante.json'));

const chaves = Object.keys(estudante);
console.log(chaves);
console.log(Object.keys(estudante));