document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpfError');
    const cpf = cpfInput.value;

    // Limpeza de mensagem de erro
    cpfError.textContent = "";

    // Verificação de comprimento e números
    if (cpf.length !== 11) {
      cpfError.textContent = "O CPF deve conter 11 dígitos.";
      return;
    }

    // Validação do CPF (lógica simples)
    if (!isValidCPF(cpf)) {
      cpfError.textContent = "CPF inválido.";
    } else {
      alert("CPF válido!");
    }
  });

  // Função para validar o CPF
  function isValidCPF(cpf) {
    let sum = 0;
    let remainder;

    // Rejeita CPFs com todos os números iguais
    if (/^(\d)\1+$/.test(cpf)) return false;

    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
  }

  document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ageInput = document.getElementById('ageInput');
    const ageError = document.getElementById('ageError');
    const age = parseInt(ageInput.value);

    // Limpa mensagens de erro
    ageError.textContent = "";

    // Valida a idade
    if (isNaN(age) || age < 1 || age > 120) {
        ageError.textContent = "Por favor, insira uma idade válida entre 1 e 120.";
    } else {
        alert("Idade válida!");
    }
});
