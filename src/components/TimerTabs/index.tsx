import  styles from './style.module.css'
import { Coffee, Target } from 'lucide-react';

export function TimerTabs() {
  return (
    <div className={styles.timerTabs}>
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
  );
}
