import  styles from './style.module.css'


export function TimerDisplay() {
  return (
      <div className={styles.timer}>
        <span>Foco</span>
        <h1>25:00</h1>
        <p>Descrição</p>
      </div>
  );
}
