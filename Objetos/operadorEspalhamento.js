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
        complemento: false,

    }]
}

function exibirTelefones(telefone1, telefone2){
    console.log('Ligar para ' + telefone1);
    console.log('Ligar para ' + telefone2);
}

exibirTelefones(estudante.telefone[0], estudante.telefone[1]);
exibirTelefones(...estudante.telefone) // ... -> Operador de espalhamento. Ele vai abrir/espalhar os arrays, sem precisar acessar informação uma por uma.

const dadosEnvio = {
    destinatario: estudante.nome,
    endereco: estudante.endereco[0],
}

console.log(dadosEnvio);