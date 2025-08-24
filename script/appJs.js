// Função para calcular média nas clase que não de exame

function calcularMedia() {
  const mediaDoEstudante = document.querySelector(".media");
  const status = document.querySelector(".status");
  const classification = document.querySelector(".classification");
  const information = document.querySelector(".info");
  const btnSemExame = document.querySelector(".btnSemExame");

  btnSemExame.addEventListener("click", function () {
    const notaDoPrimeiroTrimestre = Number(
      document.querySelector("#notaPrimeiroTrim").value
    );
    const notaDoSengundoTrimestre = Number(
      document.querySelector("#notaSegundoTrim").value
    );
    const notaDoTerceiroTrimestre = Number(
      document.querySelector("#notaTerceiroTrim").value
    );

    if (
      notaDoPrimeiroTrimestre > 20 ||
      notaDoSengundoTrimestre > 20 ||
      notaDoTerceiroTrimestre > 20
    ) {
      alert("Dados fora do contexto escolar");
      return;
    }

    const media =
      (notaDoPrimeiroTrimestre +
        notaDoSengundoTrimestre +
        notaDoTerceiroTrimestre) /
      3;

    if (
      !notaDoPrimeiroTrimestre ||
      !notaDoSengundoTrimestre ||
      !notaDoTerceiroTrimestre
    ) {
      alert("Notas não encontradas. Por favor insire notas");
      return;
    } else if (
      notaDoPrimeiroTrimestre < 0 ||
      notaDoSengundoTrimestre < 0 ||
      notaDoTerceiroTrimestre < 0
    ) {
      alert("Por favor adiciona nota válida");
      return;
    } else if (media >= 9.5 && media <= 13) {
      mediaDoEstudante.textContent = `${media.toFixed(1)}`;
      classification.textContent = "Suficiente";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (media >= 14 && media <= 16) {
      mediaDoEstudante.textContent = `${media.toFixed(1)}`;
      classification.textContent = "Bom";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (media >= 17 && media <= 19) {
      mediaDoEstudante.textContent = `${media.toFixed(1)}`;
      classification.textContent = "Muito Bom";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (media === 20) {
      mediaDoEstudante.textContent = `${media.toFixed(1)}`;
      classification.textContent = "Excelente";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (media <= 9.4 && media >= 7.5) {
      mediaDoEstudante.textContent = `${media.toFixed(1)}`;
      classification.textContent = "Mau";
      status.textContent = "Reprovado";
      information.textContent = "Recurso se Aplicável";
    } else {
      mediaDoEstudante.textContent = `${media.toFixed(1)}`;
      classification.textContent = "Péssimo";
      status.textContent = "Reprovado";
      information.textContent = "Sem Alternativa";
    }
  });
}

calcularMedia();

// Fsunção para Cacular media dos Estudante da classe de Exame

function calcularMediaClasseDeExame() {
  const btnExame = document.querySelector(".btnExame");
  const mediaDoEstudante = document.querySelector(".media");
  const status = document.querySelector(".status");
  const classification = document.querySelector(".classification");
  const information = document.querySelector(".info");

  btnExame.addEventListener("click", function (e) {
    e.preventDefault();
    const notaTrimestre1 = Number(
      document.querySelector("#notaTrimestre1").value
    );
    const notaTrimestre2 = Number(
      document.querySelector("#notaTrimestre2").value
    );
    const notaTrimestre3 = Number(
      document.querySelector("#notaTrimestre3").value
    );
    const notaExameFinal = Number(
      document.querySelector("#notaExameFinal").value
    );

    if (
      notaTrimestre1 > 20 ||
      notaTrimestre2 > 20 ||
      notaTrimestre3 > 20 ||
      notaExameFinal > 20
    ) {
      alert("Dados fora do contexto escolar");
      return;
    }

    const mediaFinal =
      (notaTrimestre1 + notaTrimestre2 + notaTrimestre3 + notaExameFinal) / 4;

    if (
      !notaTrimestre1 ||
      !notaTrimestre2 ||
      !notaTrimestre3 ||
      !notaExameFinal
    ) {
      alert("Notas não encontradas. Por favor insire notas");
      return;
    } else if (
      notaTrimestre1 < 0 ||
      notaTrimestre2 < 0 ||
      notaTrimestre3 < 0 ||
      notaExameFinal < 0
    ) {
      alert("Por favor adiciona nota válida");
      return;
    } else if (mediaFinal >= 9.5 && mediaFinal <= 13.9) {
      mediaDoEstudante.textContent = `${mediaFinal.toFixed(1)}`;
      classification.textContent = "Suficiente";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (mediaFinal >= 14 && mediaFinal <= 16.9) {
      mediaDoEstudante.textContent = `${mediaFinal.toFixed(1)}`;
      classification.textContent = "Bom";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (mediaFinal >= 17 && mediaFinal <= 19) {
      mediaDoEstudante.textContent = `${mediaFinal.toFixed(1)}`;
      classification.textContent = "Muito Bom";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (mediaFinal === 20) {
      mediaDoEstudante.textContent = `${mediaFinal.toFixed(1)}`;
      classification.textContent = "Excelente";
      status.textContent = "Aprovado";
      information.textContent = "Sem recurso pra fazer";
    } else if (mediaFinal <= 9.4 && mediaFinal >= 7.5) {
      mediaDoEstudante.textContent = `${mediaFinal.toFixed(1)}`;
      classification.textContent = "Mau";
      status.textContent = "Reprovado";
      information.textContent = "Recurso se Aplicável";
    } else {
      mediaDoEstudante.textContent = `${mediaFinal.toFixed(1)}`;
      classification.textContent = "Péssimo";
      status.textContent = "Reprovado";
      information.textContent = "Sem Alternativa";
    }
  });
}

calcularMediaClasseDeExame();

//botão de limpar os campos

function limparDados() {
  document.querySelector(".btnLimpar").addEventListener("click", function (e) {
    e.preventDefault();
    //Limpar dados da Tabela do Reultados
    document.querySelector(".media").textContent = "";
    document.querySelector(".status").textContent = "";
    document.querySelector(".classification").textContent = "";
    document.querySelector(".info").textContent = "";
    //Limpar dados dos inputs
    document.querySelector("#notaPrimeiroTrim").value = "";
    document.querySelector("#notaSegundoTrim").value = "";
    document.querySelector("#notaTerceiroTrim").value = "";

    document.querySelector("#notaTrimestre1").value = "";
    document.querySelector("#notaTrimestre2").value = "";
    document.querySelector("#notaTrimestre3").value = "";
    document.querySelector("#notaExameFinal").value = "";
  });
}

limparDados();

// Calcular o Indece de Massa Corporal
function calcularIMC() {
  const btnIMC = document.querySelector(".btnIMC");
  btnIMC.addEventListener("click", function (e) {
    e.preventDefault();
    const imcValor = document.querySelector(".imcValor");
    const imcClassificar = document.querySelector(".imcClassificar");
    const altura = Number(document.querySelector("#altura").value);
    const peso = Number(document.querySelector("#peso").value);
    const imc = peso / (altura * altura);

    if (altura <= 0 || peso <= -1) {
      alert("Por favor coloca os dados válidos");
      return;
    } else if (imc < 18.5) {
      imcValor.textContent = `${imc.toFixed(1)} Kg/m²`;
      imcClassificar.textContent = " Abaixo do peso (Magreza)";
    } else if (imc >= 18.5 && imc <= 24.9) {
      imcValor.textContent = `${imc.toFixed(1)} Kg/m²`;
      imcClassificar.textContent = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
      imcValor.textContent = `${imc.toFixed(1)} Kg/m²`;
      imcClassificar.textContent = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
      imcValor.textContent = `${imc.toFixed(1)} Kg/m²`;
      imcClassificar.textContent = "Obesidade no grau I";
    } else if (imc >= 35.0 && imc <= 39.9) {
      imcValor.textContent = `${imc.toFixed(1)} Kg/m²`;
      imcClassificar.textContent = "Obesidade no grau II (severa)";
      imcClassificar.style.color = "#8a0303";
    } else {
      imcValor.textContent = `${imc.toFixed(1)} Kg/m²`;
      imcClassificar.textContent = "Obesidade no grau III (mórbida)";
      imcClassificar.style.color = "#8a0303";
    }
  });
}

calcularIMC();

function limparIMC() {
  document.querySelector(".btnlimpar").addEventListener("click", function () {
    document.querySelector(".imcValor").textContent = "";
    document.querySelector(".imcClassificar").textContent = "";
    document.querySelector("#altura").value = "";
    document.querySelector("#peso").value = "";
  });
}

limparIMC();

//interpretador de Números impar e par

function interpretarNumero() {
  const btnNumero = document.querySelector(".btnNumero");
  const numero = document.querySelector(".numero");
  const explication = document.querySelector(".explicacao");

  btnNumero.addEventListener("click", function () {
    const number = Number(document.querySelector("#number").value);
    const interprete = number % 2;
    const resto = number % 2;

    if (interprete === 0) {
      numero.textContent = `${number} é um nº par`;
      numero.style.fontSize = "0.9rem";
      explication.textContent = `O nº ${number} é par porque é divisível por 2 (resto é ${resto} )`;
      explication.style.fontSize = "0.9rem";
    } else {
      numero.textContent = `${number} é um nº ímpar`;
      explication.textContent = `O nº ${number} é ímpar porque não é divisível por 2 (resto é ${resto} )`;
      numero.style.fontSize = "0.9rem";
      explication.style.fontSize = "0.9rem";
    }
  });
}

interpretarNumero();

function reset() {
  btnreset = document
    .querySelector(".btnLimparNumero")
    .addEventListener("click", function () {
      document.querySelector(".numero").textContent = "";
      document.querySelector(".explicacao").textContent = "";
      document.querySelector("#number").value = "";
    });
}

reset();
