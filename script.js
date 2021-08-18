function enviar() {
  var nome = document.getElementById("nome");

  if (nome.value == "" || email.value == "" || telefone.value == "") {
    alert("Você não preencheu todos os campos");
  } else {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}
