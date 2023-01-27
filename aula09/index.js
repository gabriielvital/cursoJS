// String, number, undefined, null, boolean, symbol
const nome = 'Gabriel';     // string
const nome1 = "Gabriel";    // string
const nome2 = `Gabriel`;    // string
const num1 = 10;    // number
const num2 = 10.52; // number
let nomeAluno;  // undefined = não aponta para local nenhuma na memória
let sobrenomeAluno = null;  // Nulo -> não aponta pra local nenhuma na memória
const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof aprovado, aprovado)

let a1 = 2;
let b1 = a1;
console.log(a1, b1); // 2, 2

a1 = 3;
console.log(a1, b1); // 3, 3