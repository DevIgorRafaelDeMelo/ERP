import React, { useState } from "react";
import Alert from "./Alert";
import logo from "../img/logo.jpeg";

const Register = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cnpj: "",
    senha: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando dados:", formData);

    try {
      const response = await fetch("http://localhost:5000/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Erro ao enviar os dados");
      }

      setAlertMessage(data.message);
    } catch (error) {
      console.error("Erro ao conectar:", error.message);
      setAlertMessage(error.message || "Erro ao conectar ao servidor.");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    // Capturar os dados do formulário
    const formData = new FormData(e.target); // Obtem os campos do formulário
    const cnpj = formData.get("cnpj"); // Extrai o valor do campo "cnpj"
    const senha = formData.get("senha"); // Extrai o valor do campo "senha"

    try {
      // Envio dos dados para o backend
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cnpj, senha }), // Dados enviados em JSON
      });

      // Verifica a resposta do backend
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro ao autenticar. Tente novamente.");
      }

      // Caso o login seja bem-sucedido
      alert(
        `Login bem-sucedido! Bem-vindo, ${data.usuario?.nome || "Usuário"}!`
      );
    } catch (error) {
      // Trata erros no envio ou resposta
      console.error("Erro ao conectar ao backend:", error.message);
      alert(`Erro: ${error.message}`);
    }
  };
  return (
    <div className="h-screen flex">
      {/* Exibição do alerta */}
      {alertMessage && (
        <Alert message={alertMessage} onClose={() => setAlertMessage("")} />
      )}
      {/* Seção lateral ocupando 50% da tela */}
      <div className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white p-8 rounded-lg shadow-md font-poppins">
        {/* Área para o logo */}
        <div className="mb-6">
          <img
            src={logo}
            alt="Logo da Systen 64"
            className="w-48 h-48 object-contain rounded-xl"
          />
        </div>

        {/* Título e descrição */}
        <h1 className="text-5xl font-extrabold text-center">
          Bem-vindo à Systen 64
        </h1>
        <p className="text-lg mt-6 text-center leading-relaxed text-gray-200">
          Cadastre-se para acessar nossas ferramentas exclusivas e potencializar
          a gestão da sua empresa!
        </p>
      </div>
      {/* Área de Cadastro/Login ocupando 50% da tela */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-gray-100 text-gray-800 rounded-lg shadow-lg">
        {showRegister ? (
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold">Criar Conta</h2>
            <p className="text-lg mb-6">Junte-se à nossa plataforma agora!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Razão Social"
                className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
                value={formData.nome}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="cnpj"
                placeholder="CNPJ"
                className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
                value={formData.cnpj}
                onChange={handleChange}
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
                value={formData.senha}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded shadow-lg hover:bg-cyan-600 transition"
              >
                Registrar
              </button>
            </form>
            <p className="mt-4 text-gray-800">
              Já tem conta?{" "}
              <button
                onClick={() => setShowRegister(false)}
                className="text-cyan-500 hover:underline"
              >
                Fazer Login
              </button>
            </p>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold">Entrar</h2>
            <p className="text-lg mb-6">Acesse sua conta agora!</p>
            <form onSubmit={handleSubmitLogin} className="space-y-4">
              <input
                type="text"
                name="cnpj"
                placeholder="CNPJ"
                className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900"
                required
              />
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900"
                required
              />
              <button className="w-full bg-cyan-500 text-white py-3 rounded shadow-lg hover:bg-cyan-600 transition">
                Login
              </button>
            </form>
            <p className="mt-4 text-gray-800">
              Não tem conta?{" "}
              <button
                onClick={() => setShowRegister(true)}
                className="text-cyan-500 hover:underline"
              >
                Criar Conta
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
