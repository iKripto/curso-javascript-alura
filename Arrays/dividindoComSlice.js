const listaEstudantes = [
'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
// ^ Pega a primeira metade da lista usando o .slice() e define como a primeira metade, lembrando que o computador sempre começa a contar do 0.
console.log(sala1);

const sala2 = listaEstudantes.slice(listaEstudantes.length/2);
// Passamos apenas um parâmetro, que é o de começar, então a máquina entende que é para ir do meio para o final.
console.log(sala2);


// Deveria ter um valor repetido, que é o valor do meio?
// Quando não damos um parâmetro para começar, o javascript não conta o último elemento até o meio. Ou seja, ele para de contar antes do número que pedimos para ele contar.
