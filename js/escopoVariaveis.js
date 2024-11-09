

var variavelGlobal = "Oi, eu sou global";

variavelGlobal = "oi, eu agora nao sou mais global, sou o universo todo"; // aceita, pois ele pode ser alterado a qualquer momento

function funcao() {
  // este é um escopo, fica dentro de {}

  console.log(variavelGlobal); // aceita detro da função

  if (true) {
    // este é outro escopo

    let variavelLimitada = 10;
    console.log(variavelLimitada); // aceita, pois está no mesmo escopo, ou seja, foi declarado aqui
    console.log(variavelGlobal); // aceita dentro do if

    variavelLimitada = 20; // aceita, pois ele pode ser alterado
  }

  if (true) {
    // este é outro escopo

    const variavelConstante = 10;
    console.log(variavelConstante); // aceita, pois está no mesmo escopo, ou seja, foi declarado aqui
    console.log(variavelGlobal); // aceita dentro do if

    variavelConstante = 20; // da erro, pois o valor nao pode ser alterado
  }

  console.log(variavelLimitada); /* nao aceita, pois aqui ele nao exite, está fora do escopo do if */
}

console.log(variavelGlobal); // aceita na função que ele foi declarada.

/* RESUMINDO
        VARIAVEL VAR: PODE SER CHAMADA EM QUALQUER ESCOPO, E SEU VALOR PODE SER ALTERADO.
        VARIAVEL LET: SOMENTE PODE SER CHAMADA DENTRO DO SEU ESCOPO, E SEU VALOR PODE SER ALTERADO.
        VARIAVEL CONST: SOMENTE PODE SER CHAMADA DENTRO DO SEU ESCOPO, E SEU VALOR NÃO PODE SER ALTERADO.

   VANTAGENS:
        VARIÁVEIS QUE SÓ EXISTEM NO SEU ESCOPO, PODEM SER DECLARADAS COM O MESMO NOME EM OUTROS ESCOPOS, POIS
        NENHUMA CONHEÇA A OUTRA.

        JÁ A VAR NÃO, UMA VEZ DECLARADA, NÃO PODE DECLARAR OUTRA VARIAVEL COM O MESMO NOME.
 */
