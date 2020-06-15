/*
3. (OBRIGATÓRIO) Escreva um programa javascript para escrever o seguinte padrão na
tela, com N linhas:
*
* *
* * *
* * * *
* * * * *
Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).
*/

var rs = require('readline-sync');

var caracterCoringa = rs.question('Inasira qualquer número: ');

var i = 0;

var caracter = '*';

while (i <= caracterCoringa) {
    console.log(caracter);
    caracter = caracter + '*'
    i++;
}