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
    },
    {
        rua: 'Dona Clotilde',
        numero: '92',
        complemento: null,

    }]
}

// Método object.keys - Serve para pesquisar em um objeto.

const ChavesObjct = Object.keys(estudante)
console.log(ChavesObjct)

if (!ChavesObjct.includes('endereco')){
    console.error('É necessário um endereço no cadastro!')
}