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

var user1 = 0;

var user2 = 0;

var i = 0;

var cont = 0;

var vetor1 = [];

var vetor2 = [];

var contVetor1 = 0;

var iguais = [];

console.log(`\n================== JOGADOR 1 ==================\n`);

while (i < 5) {

    user1 = rs.questionInt(`Informe pelo menos 5 números. Número: ${i + 1}: `);
    vetor1.push(user1)
    i++;
}

console.log(`\n================== JOGADOR 2 ==================\n`);

while (cont < 5) {
    user2 = rs.questionInt(`Informe pelo menos 5 números. Número: ${cont + 1}: `);
    vetor2.push(user2)
    cont++;
}

//vetor1 = [0,2,1] - vetor2 = [3,5,0,1]
//vetor1[0] == vetor2[0]
//vetor[0] == vetor2[1]
//vetor[0] == vetor2[2]



while (contVetor1 < vetor1.length) {
    var contVetor2 = 0;
    while (contVetor2 < vetor2.length) {
        if (vetor1[contVetor1] == vetor2[contVetor2]) {
            iguais.push(vetor1[contVetor1]);
            break;

        }
        contVetor2++;
    }

    contVetor1++;
}
console.log(`\nOs valores iguais são: ${iguais}\n`);