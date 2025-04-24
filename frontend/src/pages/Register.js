import React, { useState } from "react";

const Register = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="h-screen flex bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Seção de Registro - Agora à esquerda */}
      <div
        className={`w-1/2 flex flex-col justify-center items-center p-8 transition-opacity duration-500 ${
          showRegister
            ? "block opacity-100 bg-gray-100 text-gray-800"
            : "hidden opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold">Criar Conta</h2>
        <p className="text-lg mb-6">Junte-se à nossa plataforma agora!</p>
        <form className="w-3/4 space-y-4">
          <input
            type="text"
            placeholder="Razão Social"
            className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
          />
          <input
            type="text"
            placeholder="CNPJ"
            className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 rounded bg-white text-gray-900 border border-gray-300"
          />
          <button className="w-full bg-cyan-500 text-white py-3 rounded shadow-lg hover:bg-cyan-600 transition">
            Registrar
          </button>
        </form>
        <p className="mt-4 text-gray-800">
          Já tem conta?{" "}
          <button
            onClick={() => setShowRegister(false)}
            className="text-cyan-300 hover:underline"
          >
            Fazer Login
          </button>
        </p>
      </div>

      {/* Seção de Login - Agora à direita */}
      <div
        className={`w-1/2 flex flex-col justify-center items-center p-8 transition-opacity duration-500 ${
          showRegister
            ? "hidden opacity-0"
            : "block opacity-100 bg-gray-100 text-gray-800"
        }`}
      >
        <h2 className="text-4xl font-bold">Entrar</h2>
        <p className="text-lg mb-6">Acesse sua conta agora!</p>
        <form className="w-3/4 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900"
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
    </div>
  );
};
export default Register;
