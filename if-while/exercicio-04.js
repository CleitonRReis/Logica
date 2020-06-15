/*
4. (OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000.
*/

var rs = require('readline-sync');

var n1 = rs.questionInt('\nInsisra o número 1000 para ver a soma de todos os múltipos de de 3 e 5: ');

var i = 1;
var multiplosDe3 = 0;
var multiplosDe5 = 0;

while(i <= n1){
    
    if(i % 3 == 0){
        multiplosDe3 += i;      
    
    }if(i % 5 == 0){
        multiplosDe5 += i;
    }
    i++;
}

console.log(multiplosDe3);
console.log(multiplosDe5);
console.log(multiplosDe3 + multiplosDe5);