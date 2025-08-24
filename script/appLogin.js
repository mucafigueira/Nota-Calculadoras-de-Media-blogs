// Formulario de Login

const btnLogin = document.querySelector(".btnLogin");
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();

  const usuario = document.querySelector("#usuario").value;
  const password = Number(document.querySelector("#password").value);

  if (!usuario || !password) {
    alert("Por favor introduza as credenciais");
  } else if (usuario === "nota" && password === 2235) {
    alert("Acesso autorizado");
    window.location.href = "home.html";
  } else {
    alert("Credecnciais erradas: Acesso negado");
  }
});
