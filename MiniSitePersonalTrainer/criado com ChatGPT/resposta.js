document.addEventListener("DOMContentLoaded", function () {
    // Recupera os dados armazenados no localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Verifica se há dados disponíveis
    if (userData) {
        // Exibe as informações recuperadas na página
        document.getElementById("nome").textContent = userData.nome;
        document.getElementById("biotipo").textContent = userData.biotipo;
        document.getElementById("imc").textContent = userData.imc;
        document.getElementById("imcClassificacao").textContent = userData.imcClassificacao;
        document.getElementById("periodizacao").textContent = userData.periodizacao;
        document.getElementById("tipo").textContent = userData.tipo;
        document.getElementById("frequencia").textContent = userData.frequencia;
        document.getElementById("objetivo").textContent = userData.objetivo;
        document.getElementById("nivel").textContent = userData.nivel;
        document.getElementById("saude").textContent = userData.saude || "Nenhuma";
        document.getElementById("deficiencia").textContent = userData.deficiencia || "Nenhuma";

        // Define a data e hora atual
        const dataHoraAtual = new Date().toLocaleString("pt-BR", {
            dateStyle: "short",
            timeStyle: "short"
        });
        document.getElementById("dataHora").textContent = dataHoraAtual;

        // Define uma mensagem motivacional com base no objetivo do usuário
        let mensagemMotivacional;
        switch (userData.objetivo) {
            case "Ganho de Massa Muscular":
                mensagemMotivacional = "Mantenha-se firme! O crescimento muscular vem com consistência e esforço.";
                break;
            case "Perda de Gordura":
                mensagemMotivacional = "Cada treino é um passo para a sua melhor versão. Continue se esforçando!";
                break;
            case "Manutenção":
                mensagemMotivacional = "Você está cuidando bem de si mesmo! Continue mantendo o equilíbrio.";
                break;
            case "Melhora da Performance":
                mensagemMotivacional = "Desafie-se a cada dia! A performance melhora com cada pequeno avanço.";
                break;
            default:
                mensagemMotivacional = "Vamos em frente! Mantenha-se motivado e atinja seus objetivos.";
        }
        document.getElementById("motivacao").textContent = mensagemMotivacional;
    }

    // Botão para iniciar um novo usuário
    document.getElementById("newUserButton").addEventListener("click", function () {
        localStorage.removeItem("userData"); // Limpa os dados do usuário atual
        window.location.href = "index.html"; // Redireciona para o formulário inicial
    });
});
