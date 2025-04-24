const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'javascript',
    bolsista: true,
    telefone: [18998013190, 18997711254],
    endereco: [{
        rua: 'Pedro Alvares Cabral',
        numero: '90',
        complemento: 'apto 45',
    }]
}

estudante.endereco.push = {rua: "Joao", numero: "50", complemento: "nao"};
console.log(estudante.endereco);
const listaEnderecoComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
console.log(listaEnderecoComComplemento)