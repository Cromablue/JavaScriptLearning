import { Link } from 'react-router-dom';
import desafios from '../data/desafios';

export default function Home() {
  return (
    <div>
      <h1>Lista de Desafios JavaScript</h1>
      <ul>
        {desafios.map((desafio) => (
          <li key={desafio.id}>
            <Link to={`/desafio/${desafio.id}`}>{desafio.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
