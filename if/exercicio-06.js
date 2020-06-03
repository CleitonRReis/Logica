var rs = require('readline-sync')

var sexo = 0;
var n1 = 0;
var res = 0;
var alt = 0; 

var sexo = rs.question('m = Masculino ou f = Feminino: ');

res = (62.1 * alt - 44.7);

if(sexo == 'f'){
    console.log('Para saber seu peso ideal, insira os dados abaixo: ');
    var alt = rs.questionFloat('Digite sua altura, por favor: ');
    if(isNaN(res)){}
    // console.log((62.1 * altura - 44.7))
    console.log(`Seu peso ideal é: ${res}`);
    
 }else{
     console.log('Para saber seu peso ideal, insira os dados abaixo: ');
     var alt = rs.questionFloat('Digite sua altura, por favor: ');
    //  if(isNaN(res)){}
     console.log('Seu peso ideal é: ') + 72.7 * altura - 44.7;
}