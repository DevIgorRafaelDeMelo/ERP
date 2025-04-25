const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Configuração do middleware
app.use(cors({ origin: "http://localhost:3000" })); // Altere para a URL correta do frontend
app.use(express.json());

const port = process.env.PORT || 5000;

// Função de validação de dados
const validarDados = (dados) => {
  const { nome, senha, cnpj, email } = dados;

  if (!nome || nome.length < 3) {
    return {
      status: false,
      message: "Nome inválido. Deve ter ao menos 3 caracteres.",
    };
  }

  if (!senha || senha.length < 6) {
    return {
      status: false,
      message: "Senha inválida. Deve ter ao menos 6 caracteres.",
    };
  }

  const regexCNPJ = /^\d{14}$/; // Apenas números
  if (!cnpj || !regexCNPJ.test(cnpj)) {
    return { status: false, message: "CNPJ inválido. Deve conter 14 números." };
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !regexEmail.test(email)) {
    return { status: false, message: "Email inválido." };
  }

  return { status: true };
};

// Endpoint de cadastro
app.post("/api/cadastro", (req, res) => {
  console.log("Recebido no backend:", req.body);
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Nenhum dado enviado na requisição." });
    }

    const validacao = validarDados(req.body);
    if (!validacao.status) {
      return res.status(400).json({ message: validacao.message });
    }

    console.log("Dados cadastrados com sucesso:", req.body);
    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    console.error("Erro interno no servidor:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
