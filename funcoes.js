const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'javascript',
    bolsista: true,
    telefone: [18998013190, 18997711254],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7));
