import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  //Verifica se o servidor está rodando corretamente
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.text()) // Use `.json()` se a resposta for JSON
      .then((data) => console.log("Resposta do servidor:", data))
      .catch((error) => console.error("Erro ao conectar:", error));
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
