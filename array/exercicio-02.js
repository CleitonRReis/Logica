/*
2. (INNER JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
jogador B.
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
iguais que o jogador A e B colocaram.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
1,2,3
*/

const rs = require('readline-sync');

var i = 0;

var vetor = []; 

var user1 = 0;

var user2 = 0;

var iguais = [];

var numeroDeValores = rs.questionInt('Informe quantos valores vocês desejam inserir: ');

while(i < numeroDeValores){

    user1 = rs.questionInt('Informe alguns valores usuário 1: ');

    //   vetor.push(user1);

    user2 = rs.questionInt('Informe alguns valores usuário 2: ');

    //   vetor.push(user2);

    user1.length == user2.length || user2.length == user1.length

    iguais = (`${user2}, `) + (`${user2}`);
        
    vetor.push(iguais);
    
    i++;

}

console.log(`Os valores iguais são: ${iguais}`);
console.log(vetor);