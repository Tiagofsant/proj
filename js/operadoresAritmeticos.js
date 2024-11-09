let valor = 53;
let divide = 31;

// camel case para nomear
let soma = 100 + 50; // resultado sera 150

let multiplica = soma * 3; // ou seja, 150 * 3 = 450

let divisao = multiplica / 30; // ou seja, 450 / 30;

let restoDivisao = multiplica % divide; // ou seja, 450 / 31 =

let incremento = ++divide; // ou seja, 31 + 1 = 32

let decremento = --divide; // ou seja, 31 - 1 = 30

let restoDivisaoZero = multiplica % 30; // ou seja, 450 / 30 = 0, pois nao sobrou resto na divisão


//  cada nome escrito aqui vai buscar o valor das suas respectivas variáveis
let equacao = (soma + incremento) * valor;


/* funcção para preencher todos os dados, esta sendo execultanda dentro do onClick do botão na pagina incial.
sem isto, todo esse bloco de codigo seria execultado no momento que a pagina é atualizada */

function calcular(){
    document.getElementById("aritmetico1").innerHTML = "Soma: " + soma;
    document.getElementById("aritmetico2").innerHTML = "Multiplicação: " + multiplica;
    document.getElementById("aritmetico3").innerHTML = "Divisão: " + divisao;
    document.getElementById("aritmetico4").innerHTML = "Resto da Divisão: " + restoDivisao;
    document.getElementById("aritmetico5").innerHTML = "Incremento: " + incremento;
    document.getElementById("aritmetico6").innerHTML = "Decremento: " + decremento;
    document.getElementById("aritmetico7").innerHTML = "Resto da divisão com retorno zerado: " + restoDivisaoZero;
    document.getElementById("aritmetico8").innerHTML = "Equação com Parenteses: " + equacao;
}

