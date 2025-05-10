import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Desafio01 from './pages/desafios/Desafio01';
// Adicione os outros desafios conforme for criando

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafio/1" element={<Desafio01 />} />
        {/* Adicione os outros desafios conforme for criando */}
      </Routes>
    </Router>
  );
}

export default App;
