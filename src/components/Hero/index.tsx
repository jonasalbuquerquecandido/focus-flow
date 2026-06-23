import  styles  from './style.module.css';
import { Coffee, Target } from 'lucide-react';

export function Hero() {
  return (
    <div className={styles.focusContainer}>
      <div>
        <ul>
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
    </div>
  );
}
