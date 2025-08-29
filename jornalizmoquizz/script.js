 // Emojis flutuando nas laterais da tela
const icones = ["📷", "🎙️", "📰", "🔍", "✏️", "📡"];
const totalEmojis = 120; // Aumentado para maior frequência
const range = 300; // Aumentado para maior espaço de queda

for (let i = 0; i < totalEmojis; i++) {
    const icon = document.createElement("div");
    icon.className = "icon";
    icon.textContent = icones[Math.floor(Math.random() * icones.length)];

    let left;
    const rand = Math.random();
    if (rand < 0.5) {
        // Lado esquerdo
        left = Math.random() * range;
    } else {
        // Lado direito
        left = window.innerWidth - Math.random() * range;
    }

    icon.style.left = left + "px";
    icon.style.top = Math.random() * window.innerHeight + "px";
    icon.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(icon);
}

// Objeto com as respostas corretas
const respostasCorretas = {
    q1: "a",
    q2: "d",
    q3: "c",
    q4: "b",
    q5: "d",
    q6: "c"
};

// Função para verificar as respostas e exibir a pontuação final
function verificarRespostas() {
    let acertos = 0;
    const total = Object.keys(respostasCorretas).length;
    const resultado = document.getElementById("result");
    const botaoRetry = document.getElementById("retry");
    
    // Contabiliza acertos
    for (const questao in respostasCorretas) {
        const resposta = document.querySelector(`input[name="${questao}"]:checked`);
        if (resposta && resposta.value === respostasCorretas[questao]) {
            acertos++;
        }
    }
    
    // Exibe o resultado final e o botão de tentar novamente
    if (acertos === total) {
        resultado.textContent = `🎉 Parabéns! Você acertou todas as ${total} perguntas. Você conseguiu!`;
    } else {
        resultado.textContent = `✅ Acertos: ${acertos} | ❌ Erros: ${total - acertos}`;
    }
    
    botaoRetry.style.display = "inline-block";
}

// Função para reiniciar o quiz
function tentarNovamente() {
    document.getElementById("quiz-form").reset();
    document.getElementById("result").textContent = "";
    document.getElementById("retry").style.display = "none";
    window.scrollTo({top: 0, behavior: "smooth"});
    
    // Remove as classes de feedback visual
    document.querySelectorAll('label').forEach(label => {
        label.classList.remove('selected', 'correct', 'incorrect');
    });
}

// Adiciona evento de mudança para feedback visual instantâneo a cada resposta
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', (event) => {
        const questao = event.target.name;
        const respostaSelecionada = event.target.value;
        const labelsDaQuestao = document.querySelectorAll(`input[name="${questao}"]`);
        
        // Remove classes de todas as opções da mesma pergunta antes de adicionar a nova
        labelsDaQuestao.forEach(input => {
            input.parentElement.classList.remove('selected', 'correct', 'incorrect');
        });
        
        const labelSelecionada = event.target.parentElement;
        labelSelecionada.classList.add('selected');
        
        // Adiciona classe de cor para indicar acerto ou erro
        if (respostaSelecionada === respostasCorretas[questao]) {
            labelSelecionada.classList.add('correct');
        } else {
            labelSelecionada.classList.add('incorrect');
        }
    });
});