const notas = [10, 6, 8, 5.5, 10];
console.log(notas);
notas.pop(); // Remove o último número.

console.log(notas)

const media = (notas[0], notas[1], notas[2], notas[3]) / notas.length;
console.log(media)
console.log(media.toFixed(2)); // Adic./Remov. casas decimais e arredonda. Conferir documentação.

