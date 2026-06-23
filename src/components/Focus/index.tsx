import  styles from './style.module.css'

import { TimerControls } from '../TimerControls';
import { TimerDisplay } from '../TimerDisplay';
import { TimerTabs } from '../TimerTabs';


export function Focus() {
  return (
    <section className={styles.focus}>
      <TimerTabs />

      <TimerDisplay />

      <TimerControls />
    </section>
  );
}
