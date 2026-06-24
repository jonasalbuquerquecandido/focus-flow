import { Book } from 'lucide-react';
import styles from './style.module.css';

export function Habits() {
  return (
    <div className={styles.habits}>
      <div>
        <p>Hábitos</p>
        <a href='#'>Ver todos</a>
      </div>
      <ul>
        <li>
          <Book />
          <p>Beber água</p>
          <button></button>
        </li>

        <li>
          <Book />
          <p>Estudar 2h por dia</p>
          <button></button>
        </li>

        <li>
          <Book />
          <p>Exercício físico</p>
          <button></button>
        </li>

        <li>
          <Book />
          <p>Ler 20 páginas</p>
          <button></button>
        </li>
      </ul>
    </div>
  );
}
