// ========== QUIZ SOBRE SUSTENTABILIDADE ==========
// Array com perguntas, alternativas e respostas corretas
const perguntas = [
    {
        texto: "O que é conservação do solo?",
        alternativas: [
            "Remover todas as plantas do terreno",
            "Práticas que protegem o solo contra erosão e degradação",
            "Usar agrotóxicos em excesso",
            "Queimar a vegetação nativa"
        ],
        correta: 1
    },
    {
        texto: "Qual técnica ajuda a evitar a erosão do solo?",
        alternativas: [
            "Desmatamento",
            "Plantio em morros sem terraceamento",
            "Plantio direto com cobertura vegetal",
            "Queimadas frequentes"
        ],
        correta: 2
    },
    {
        texto: "Por que a agricultura familiar é importante para a conservação do solo?",
        alternativas: [
            "Porque usa muitos agrotóxicos",
            "Porque geralmente adota práticas sustentáveis e diversificadas",
            "Porque destrói grandes áreas de floresta",
            "Porque não produz alimentos"
        ],
        correta: 1
    },
    {
        texto: "Qual destes é um problema causado pela má conservação do solo?",
        alternativas: [
            "Aumento da fertilidade",
            "Erosão e perda de nutrientes",
            "Mais infiltração de água",
            "Crescimento mais rápido das plantas"
        ],
        correta: 1
    },
    {
        texto: "O que o tema 'Agro forte, futuro sustentável' defende?",
        alternativas: [
            "Produzir sem se preocupar com o meio ambiente",
            "Equilíbrio entre produção agrícola e preservação ambiental",
            "Acabar com toda a agricultura",
            "Usar apenas agrotóxicos"
        ],
        correta: 1
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respostaSelecionada = null;

// Elementos do DOM
const perguntaDiv = document.getElementById("pergunta");
const alternativasDiv = document.getElementById("alternativas");
const proximoBtn = document.getElementById("proximo-btn");
const resultadoDiv = document.getElementById("resultado");

// Função para carregar uma pergunta
function carregarPergunta() {
    if (perguntaAtual < perguntas.length) {
        const pergunta = perguntas[perguntaAtual];
        perguntaDiv.textContent = pergunta.texto;
        
        // Limpar alternativas anteriores
        alternativasDiv.innerHTML = "";
        respostaSelecionada = null;
        
        // Criar botões para cada alternativa
        pergunta.alternativas.forEach((alt, index) => {
            const btnAlt = document.createElement("div");
            btnAlt.textContent = alt;
            btnAlt.classList.add("alternativa");
            btnAlt.dataset.index = index;
            
            btnAlt.addEventListener("click", () => {
                // Remover seleção das outras alternativas
                document.querySelectorAll(".alternativa").forEach(el => {
                    el.classList.remove("selecionada");
                });
                btnAlt.classList.add("selecionada");
                respostaSelecionada = index;
            });
            
            alternativasDiv.appendChild(btnAlt);
        });
        
        proximoBtn.textContent = perguntaAtual === perguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
    } else {
        mostrarResultado();
    }
}

// Função para verificar resposta e avançar
function verificarResposta() {
    if (respostaSelecionada === null) {
        alert("Por favor, selecione uma resposta!");
        return;
    }
    
    // Verificar se acertou
    if (respostaSelecionada === perguntas[perguntaAtual].correta) {
        pontuacao++;
    }
    
    perguntaAtual++;
    
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

// Função para mostrar resultado final
function mostrarResultado() {
    perguntaDiv.style.display = "none";
    alternativasDiv.style.display = "none";
    proximoBtn.style.display = "none";
    
    const percentual = (pontuacao / perguntas.length) * 100;
    let mensagem = "";
    
    if (percentual === 100) {
        mensagem = "🌱 Excelente! Você é um especialista em conservação do solo!";
    } else if (percentual >= 60) {
        mensagem = "🌾 Bom trabalho! Continue aprendendo sobre sustentabilidade!";
    } else {
        mensagem = "🌿 Que tal revisar o conteúdo do site? A conservação do solo é muito importante!";
    }
    
    resultadoDiv.innerHTML = `
        <div style="background-color: #e8f5e9; padding: 20px; border-radius: 10px;">
            <h3>🎯 Resultado do Quiz</h3>
            <p>Você acertou <strong>${pontuacao}</strong> de <strong>${perguntas.length}</strong> perguntas.</p>
            <p>${mensagem}</p>
            <button id="reiniciar-quiz" class="btn">🔄 Refazer quiz</button>
        </div>
    `;
    
    const reiniciarBtn = document.getElementById("reiniciar-quiz");
    if (reiniciarBtn) {
        reiniciarBtn.addEventListener("click", reiniciarQuiz);
    }
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    respostaSelecionada = null;
    
    perguntaDiv.style.display = "block";
    alternativasDiv.style.display = "block";
    proximoBtn.style.display = "block";
    resultadoDiv.innerHTML = "";
    
    carregarPergunta();
}

// Evento do botão próximo
proximoBtn.addEventListener("click", verificarResposta);

// Iniciar o quiz
carregarPergunta();

// ========== ACESSIBILIDADE ==========
// Controle do painel de acessibilidade
const btnAcessibilidade = document.getElementById("acessibilidade-btn");
const painelAcessibilidade = document.getElementById("painel-acessibilidade");
let painelAberto = false;

btnAcessibilidade.addEventListener("click", () => {
    if (painelAberto) {
        painelAcessibilidade.style.display = "none";
        painelAberto = false;
    } else {
        painelAcessibilidade.style.display = "flex";
        painelAberto = true;
    }
});

// Aumentar fonte
const aumentarFonteBtn = document.getElementById("aumentar-fonte");
let tamanhoFonte = 16;

aumentarFonteBtn.addEventListener("click", () => {
    if (tamanhoFonte < 24) {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

// Diminuir fonte
const diminuirFonteBtn = document.getElementById("diminuir-fonte");

diminuirFonteBtn.addEventListener("click", () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

// Alto contraste
const altoContrasteBtn = document.getElementById("alto-contraste");
let contrasteAtivo = false;

altoContrasteBtn.addEventListener("click", () => {
    if (contrasteAtivo) {
        document.body.classList.remove("alto-contraste");
        contrasteAtivo = false;
        altoContrasteBtn.textContent = "🎨 Alto contraste";
    } else {
        document.body.classList.add("alto-contraste");
        contrasteAtivo = true;
        altoContrasteBtn.textContent = "🎨 Modo normal";
    }
});

// Fechar painel ao clicar fora (opcional)
document.addEventListener("click", (event) => {
    if (!btnAcessibilidade.contains(event.target) && !painelAcessibilidade.contains(event.target)) {
        painelAcessibilidade.style.display = "none";
        painelAberto = false;
    }
});
