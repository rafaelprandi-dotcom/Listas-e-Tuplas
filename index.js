// Criando a lista
const frutas = ["maçã", "banana", "laranja", "uva", "manga"];

// Mostrando a lista completa
console.log("Lista completa de frutas:", frutas);

// Mostrando apenas a primeira fruta
console.log("Primeira fruta:", frutas[0]);

// Mostrando apenas a última fruta
console.log("Última fruta:", frutas[frutas.length - 1]);

// Criando a lista
const numeros = [2, 5, 7, 10, 3, 8];

// Inicializando a soma
let soma = 0;

// Percorrendo a lista e somando
for (let numero of numeros) {
  soma += numero;
}

console.log("Soma de todos os números:", soma);

const numeros2 = [12, 45, 7, 23, 89, 34, 56, 9, 77, 31];

// Descobrindo o maior número
const maiorNumero = Math.max(...numeros2);

console.log("O maior número da lista é:", maiorNumero);

const aluno = ["João", 20, "Turma A"];

console.log("Informações do aluno:", aluno);

const produto = ["Caneta", 2.50, 100];

console.log(`O produto ${produto[0]} custa R$${produto[1].toFixed(2)} e temos ${produto[2]} unidades em estoque.`);

const filmes = [
    ["Matrix", 1999, "Ficção Científica"],
    ["Titanic", 1997, "Romance"],
    ["Os Vingadores", 2012, "Ação"]
  ];
  
  // Percorrendo a lista
  for (let filme of filmes) {
    console.log(`Nome: ${filme[0]}, Ano: ${filme[1]}, Gênero: ${filme[2]}`);
  }