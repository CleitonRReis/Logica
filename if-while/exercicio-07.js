/*
7. Escreva um programa que apresente quatro opções:
(a) consulta saldo, (b) saque e (c) depósito e (d) sair.
O saldo deve iniciar em R$ 0,00.
A cada saque ou depósito o valor do saldo deve ser atualizado.
*/

var rs = require('readline-sync');

var saldo = 0.00;

var pergunta = '';//rs.question('Digite "a" para ver o saldo, "b" para saque ou "c" para efetuar um depósito: ');

while(saldo != "a" && saldo != "b" && saldo != "c"){
    pergunta = rs.question('Digite "a" para ver o saldo, "b" para saque ou "c" para efetuar um depósito: ');

    if(pergunta == "a"){
        console.log(`Seu saldo é: ${saldo}`)
    }
}