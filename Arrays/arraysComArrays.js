/* Crie uma lista com os seguintes nomes de estudantes: 
'João', 'Juliana', 'Caio', 'Ana'
Crie uma lista com as seguintes médias: 
10, 8, 7.5, 9 
Crie uma lista que contém as duas listas acima. */

estudantes = ['João', 'Juliana', 'Caio', 'Ana'];
medias = [10, 8, 7.5, 9 ];

const lista = [estudantes, medias];
console.log(lista);

// Um array pode armazenar arrays.
// Podemos acessar seus valores manipulando como uma matriz.

console.log(`A primeira aluna do gênero feminino e sua média são: ${lista[0][1]}, ${lista[1][1]}.`);