/*
    Gabriel Barbosa tem 25 anos, pesa 91 kg
    tem 1.92 de altura e seu IMC é de XXXX
    Gabriel nasceu em 1980
*/

const nome = 'Gabriel';
const sobrenome = 'Barbosa';
const idade = 25;
const peso = 91;
const altura = 1.91;
let imc;
imc = peso / Math.pow(altura,2);
let anoNascimento;
anoNascimento = 1997
console.log(nome , sobrenome , 'tem' , idade , 'anos, pesa' , peso , 'kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome , 'nasceu em' , anoNascimento + '.');