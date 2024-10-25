function alterarStatus(status) {
  // Aqui podemos enviar a escolha para o backend com uma requisição
  // fetch('/api/alterarStatus', { method: 'POST', body: JSON.stringify({ status }) });

  // Exibe mensagem na página sobre a ação escolhida
    // Mensagem que indica o status do usuário
    const mensagemStatus = document.getElementById('mensagemStatus');
    // Verifica o status e exibe a mensagem apropriada
    if (status === 'ativo') {
      mensagemStatus.textContent = "Usuário ativado com sucesso! ✓";
      mensagemStatus.style.color = "green";
    } else {
      mensagemStatus.textContent = "Usuário desativado com sucesso! ✗";
      mensagemStatus.style.color = "red";
    }
  }


