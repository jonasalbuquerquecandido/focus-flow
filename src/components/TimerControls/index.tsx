import  styles from './style.module.css'
import { Play, RotateCcw, } from 'lucide-react';

export function TimerControls() {
  return (
    <div className={styles.timerControls}>

      <ul className={styles.timerControls}>
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
  );
}
