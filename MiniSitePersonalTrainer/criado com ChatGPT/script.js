document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta dos dados do formulário
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value) / 100; // Converter para metros
    const peso = parseFloat(document.getElementById("peso").value);
    const biotipo = document.getElementById("biotipo").value;
    const periodizacao = document.getElementById("periodizacao").value;
    const tipo = document.getElementById("tipo").value;
    const frequencia = document.getElementById("frequencia").value;
    const objetivo = document.getElementById("objetivo").value;
    const nivel = document.getElementById("nivel").value;
    const saude = document.getElementById("saude").value;
    const deficiencia = document.getElementById("deficiencia").value;

    // Cálculo do IMC
    const imc = (peso / (altura * altura)).toFixed(2);
    let imcClassificacao;
    if (imc < 18.5) {
        imcClassificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        imcClassificacao = "Peso normal";
    } else if (imc < 29.9) {
        imcClassificacao = "Sobrepeso";
    } else {
        imcClassificacao = "Obesidade";
    }

    // Dados a serem salvos no localStorage
    const userData = {
        nome,
        idade,
        altura,
        peso,
        biotipo,
        periodizacao,
        tipo,
        frequencia,
        objetivo,
        nivel,
        saude,
        deficiencia,
        imc,
        imcClassificacao
    };

    // Armazenar os dados no localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redireciona para a página de resultado
    window.location.href = "resposta.html";
});
