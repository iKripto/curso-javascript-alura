/* Página de artigos da alura: 
É normal que em um artigo, palavras se repitam muitas vezes.
É possível escrever um programa que percorra um arquivo de texto e analise
onde determinadas palavras se repetem para ser revisada. */

/* O que são bibliotecas?
São pacotes de código reutilizável, que resolvem um problema ou necessidade sem precisar criar algo do zero. "Reinvetar a roda". */

const fs = require('fs')

const CaminhoArquivo = process.argv // Argv = Argument vector, vetor de argumentos.
// A única coisa que esse comando faz é pegar os valores que são passados pelo terminal e colocar em um array. Eles são passados pra esse array na ordem que são executados.

// Podemos manipular para poder acessar o arquivo de texto digitando no terminal:
// node CriandoPrimeiraBiblioteca/src/index.js arquivos/texto-web.txt

const link = CaminhoArquivo[2];
fs.readFile(link, 'utf-8', (erro, texto) => {console.log(texto)}) //Detalhe importante: Como estamos lidando com arquivo de texto, precisamos passar para função qual é o encoding, qual o tipo de encomendamento. No Brasil é 'utf-8', que usa a escrita latina.

console.log(CaminhoArquivo);