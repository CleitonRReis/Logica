/*
6. Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
que foram cadastrados no total.
*/

var rs = require('readline-sync');

var total;

var idade = 0;

vartotal = 0;

var nome = '';//rs.question('Insira qualquer nome. Quando quiser parar, digite "Final": ');

while(nome != "Final"){
    nome = rs.question('Insira qualquer nome. Quando quiser parar, digite "Final": ');
    idade = rs.questionInt('Digite a idade da pessoa acima: ');
    if(nome == "Final"){
       break;

    }else{
        total = (`${nome}  ${idade}`);
    }
    
}
console.log(total );
// console.log(`${nomes}, ${idades} anos.`);