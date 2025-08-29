 function verificarRespostas() {
  // Objeto com as respostas corretas do quiz.
  const respostasCorretas = {
    q1: 'a',
    q2: 'd',
    q3: 'c',
    q4: 'b',
    q5: 'd',
    q6: 'c',
  };

  let acertos = 0;
  let erros = 0;
  const totalPerguntas = Object.keys(respostasCorretas).length;

  // Itera sobre cada pergunta para verificar a resposta do usuário.
  for (let i = 1; i <= totalPerguntas; i++) {
    const nomePergunta = `q${i}`;
    const respostaUsuario = document.querySelector(`input[name="${nomePergunta}"]:checked`);

    // Verifica se a pergunta foi respondida.
    if (respostaUsuario) {
      if (respostaUsuario.value === respostasCorretas[nomePergunta]) {
        acertos++;
      } else {
        erros++;
      }
    }
  }

  // Pega os elementos do HTML para exibir o resultado.
  const resultado = document.getElementById('result');
  const botaoTentarNovamente = document.getElementById('retry');

  // Exibe o resultado e o botão "Tentar Novamente".
  if (acertos === totalPerguntas) {
    resultado.textContent = `🎉 Parabéns! Você acertou todas as ${totalPerguntas} perguntas!`;
  } else {
    resultado.textContent = `✅ Acertos: ${acertos} | ❌ Erros: ${erros} | Total: ${totalPerguntas}. Tente novamente para melhorar!`;
    botaoTentarNovamente.style.display = 'block';
  }
}

// Esta função é para o botão "Tentar Novamente", ela reseta o formulário e os resultados.
function tentarNovamente() {
  document.getElementById('quiz-form').reset();
  document.getElementById('result').textContent = '';
  document.getElementById('retry').style.display = 'none';
}