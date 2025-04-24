// Desafio:
// Calcular a média entre as seguintes notas:
// 10, 6.5, 8, 7.5;

const notas = [10, 6.5, 8, 7.5];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

notas.push(7) // push insere um elemento no vetor.
console.log (notas) // É possível alterar os índices de um array, mesmo que seja um const.