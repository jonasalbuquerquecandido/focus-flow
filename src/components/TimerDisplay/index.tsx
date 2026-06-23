import  styles from './style.module.css'


export function TimerDisplay() {
  return (
      <div className={styles.TimerDisplay}>
        <li>Foco</li>
        <li>25:00</li>
        <li>Descrição</li>
      </div>
  );
}
