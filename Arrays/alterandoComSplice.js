// Crie uma lista com os alunos:
// 'joao', 'ana', 'caio', 'lara', 'marjorie', 'leo';
// Porém, ana e caio mudaram de escola e rodrigo entrou nesta sala. Atualize a lista.

listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
console.log(listaEstudantes);
listaEstudantes.splice(1, 2, 'rodrigo');
// Primeiro definimos onde vai começar = 1.
// Depois definimos quantos serão excluidos depois dele = 2.
// Excluiremos Ana e Caio.
// O terceiro parâmetro é o elemento que será incluido.

console.log(listaEstudantes);

