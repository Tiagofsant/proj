// -----------------------------------------------------------

function MudaTexto() {
  document.getElementById("demonstrativo").innerHTML =
    "Deu certo! Parágrafo alterado!";
}

// -----------------------------------------------------------

function escopo() {
  var variavelGlobal = 10;

  variavelLet = 720;

  const variavelConst = 30;

  function exemplo() {
    let variavelLet = 20;

    variavelGlobal = 553;
    variavelLet = 720;

    variavelConst = 1500;

    alert(variavelConst);
  }

  exemplo();
}
