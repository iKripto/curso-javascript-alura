const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'javascript',
}

console.log(estudante['telefone']); // "undefined" - telefone não foi declarado.
estudante.telefone = '18998013183';
console.log(estudante); // Adiciona a informação "telefone" no array/vetor.

estudante.nome = 'Mateus';
console.log(estudante); // Nome de "José Silva" foi alterado para "Mateus".