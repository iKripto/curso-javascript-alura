const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'javascript',
}

console.log(estudante.nome) // Imprime "José silva"

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'))

console.log(estudante['nome'])
console.log(estudante['cpf']) // Você precisa usar aspas, pois o objeto cria uma chave string para chamar aquele objeto.