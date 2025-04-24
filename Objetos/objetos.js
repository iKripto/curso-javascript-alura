const listaCpfs = ['', '', '', '', '', '', '', ''];

const infoPessoas = ['nome', 'joão', 'idade', '12'];
console.log(infoPessoas[1]);

const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'javascript',
}

console.log(estudante);
console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os primeiros digitos do cpf do estudante são: ${estudante.cpf.substring(0, 3)}`)
