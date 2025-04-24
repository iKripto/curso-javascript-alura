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

console.log(estudante.endereco);


// O typeof em JavaScript é um operador que retorna uma string indicando o tipo de dado de uma variável ou valor.
for (let chave in estudante){
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && 'tipo' !== 'function'){
        console.log(' chave ' + chave + ' tem o valor ' + estudante[chave]);
    }
}

// Em JavaScript, ${variavel} é usado dentro de uma template string (ou template literal) para interpolar (inserir) o valor de uma variável ou expressão dentro de uma string.