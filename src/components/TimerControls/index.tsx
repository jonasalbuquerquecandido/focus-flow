import styles from './style.module.css';
import { Play, RotateCcw } from 'lucide-react';

export function TimerControls() {
  return (
    <div className={styles.controls}>
      <button className={styles.play}>
        <Play />
        <p>Iniciar</p>
      </button>
      <button className={styles.rotate}>
        <RotateCcw />
      </button>
    </div>
  );
}
