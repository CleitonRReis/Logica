/*
1. (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
input do usuário de string para inteiro.
*/

var rs = require('readline-sync');

var n1 = rs.questionInt('Digite o primeiro número: ');

var n2 = rs.questionInt('Digite o segundo número: ');

var i = 1;


while (i <= n2 && i ) {
    if (n1 % 5 == 0) {
        console.log('Ping');
        if (n2 % 7 == 0) {
            console.log('Pong');

        } 
        i++;
    } else if(n1 % 5 == 0 && n2 % 7 == 0){
        console.log('Ping Pong')
    }else{
        console.log('Ping Pong');
    }
    
}