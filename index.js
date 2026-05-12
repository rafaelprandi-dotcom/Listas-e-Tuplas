// ==========================================
// 1. MANIPULAÇÃO DE ARRAYS (FRUTAS)
// ==========================================
const frutas = ["maçã", "banana", "laranja", "uva", "manga"];

console.log("--- EXERCÍCIO 01: FRUTAS ---");
console.log("Lista completa:", frutas);
console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);
console.log(""); // Linha em branco para organizar o log

// ==========================================
// 2. OPERAÇÕES MATEMÁTICAS (SOMA)
// ==========================================
const numeros = [2, 5, 7, 10, 3, 8];
let soma = 0;

for (let numero of numeros) {
  soma += numero;
}

console.log("--- EXERCÍCIO 02: SOMA ---");
console.log("Soma de todos os números:", soma);
console.log("");

// ==========================================
// 3. BUSCA DE VALORES (MAIOR NÚMERO)
// ==========================================
const numeros2 = [12, 45, 7, 23, 89, 34, 56, 9, 77, 31];
const maiorNumero = Math.max(...numeros2);

console.log("--- EXERCÍCIO 03: MAIOR VALOR ---");
console.log("O maior número da lista é:", maiorNumero);
console.log("");

// ==========================================
// 4. DADOS ESTRUTURADOS (ALUNO E PRODUTO)
// ==========================================
const aluno = ["João", 20, "Turma A"];
const produto = ["Caneta", 2.50, 100];

console.log("--- EXERCÍCIO 04: INFO ---");
console.log("Informações do aluno:", aluno);
console.log(`O produto ${produto[0]} custa R$ ${produto[1].toFixed(2)} e temos ${produto[2]} unidades.`);
console.log("");

// ==========================================
// 5. MATRIZES (FILMES)
// ==========================================
const filmes = [
  ["Matrix", 1999, "Ficção Científica"],
  ["Titanic", 1997, "Romance"],
  ["Os Vingadores", 2012, "Ação"]
];

console.log("--- EXERCÍCIO 05: FILMES ---");
for (let filme of filmes) {
  console.log(`Nome: ${filme[0]} | Ano: ${filme[1]} | Gênero: ${filme[2]}`);
}