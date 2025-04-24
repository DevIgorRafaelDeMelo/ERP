import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-8">
        {/* Logo e Nome da Marca */}
        <div className="mb-8">
          <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg">
            ERP Solution
          </h1>
          <p className="text-xl mt-4 font-light text-gray-300">
            Transforme a gestão do seu negócio com{" "}
            <span className="font-semibold text-white">
              tecnologia inteligente
            </span>
            .
          </p>
        </div>

        {/* Botões estilizados */}
        <div className="flex space-x-4 mt-6">
          <button className="px-8 py-4 rounded-full bg-white text-cyan-600 font-bold shadow-lg transition transform hover:scale-110 hover:bg-gray-200 tracking-wide">
            🚀 Ver Demonstração
          </button>
          <Link to="/register">
            <button className="px-8 py-4 rounded-full bg-cyan-500 text-white font-bold shadow-lg transition transform hover:scale-110 hover:bg-cyan-600 tracking-wide">
              🔥 Contratar Agora
            </button>
          </Link>
        </div>

        {/* Seção de Destaque */}
        <div className="mt-12 max-w-3xl text-gray-300 text-lg leading-relaxed">
          <p className="drop-shadow-md">
            Nosso ERP oferece{" "}
            <span className="text-white font-medium">soluções inovadoras</span>{" "}
            para{" "}
            <span className="text-white font-medium">otimizar processos</span>,
            <span className="text-white font-medium">
              aumentar produtividade
            </span>{" "}
            e{" "}
            <span className="text-white font-medium">
              facilitar sua administração empresarial
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
