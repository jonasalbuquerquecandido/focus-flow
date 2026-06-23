import styles from './style.module.css';
import { Coffee, Play, RotateCcw, Target } from 'lucide-react';

export function Hero() {
  return (
    <div className={styles.focusContainer}>
      <div>
        <ul className=''>
          <li>
            <Target />
            <a href='#'>Foco</a>
          </li>
          <li>
            <Coffee />
            <a href='#'>Pausa curta</a>
          </li>
          <li>
            <Coffee />
            <a href='#'>Pausa longa</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Foco</li>
          <li>00:00</li>
          <li>Descrição</li>
        </ul>
      </div>
      <div>
        <ul className={styles.controler}>
          <li>
            <a href='#'></a>Iniciar
            <Play />
          </li>
          <li>
            <a href='#'></a>
            <RotateCcw />
          </li>
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  );
}
