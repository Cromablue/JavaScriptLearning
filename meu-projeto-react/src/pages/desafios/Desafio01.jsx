import { useState } from 'react';

export default function Desafio01() {
  const [texto, setTexto] = useState('Clique aqui');

  const trocarTexto = () => {
    setTexto((prev) => (prev === 'Clique aqui' ? 'Você clicou!' : 'Clique aqui'));
  };

  return (
    <div>
      <h2>Desafio 01: Trocar o texto de um botão ao clicar</h2>
      <button onClick={trocarTexto}>{texto}</button>
    </div>
  );
}
