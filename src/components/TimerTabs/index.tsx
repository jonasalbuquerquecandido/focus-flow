import styles from './style.module.css';
import { Coffee, Target } from 'lucide-react';

export function TimerTabs() {
  return (
    <div className={styles.tabs}>
      <button>
        <Target className={styles.icon}/>
        <p>Foco</p>
      </button>
      <button>
        <Coffee className={styles.icon}/>
        <p>Pausa curta</p>
      </button>
      <button>
        <Coffee className={styles.icon}/>
         <p>Pausa longa</p>
      </button>
    </div>
  );
}
