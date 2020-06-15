/*
5. Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
Exemplo de tela de saída:
*/

//Variável quando declarada dentro do looping sempre vai sobreescrever.

var rs = require('readline-sync');

var numeroFatorial = rs.questionInt('Insira um número pata saber o fatorial dele: ');

var fatorial = 1;

for(var i = 1; i <= numeroFatorial; i++){
    fatorial = i * fatorial;
    
}
console.log(fatorial);