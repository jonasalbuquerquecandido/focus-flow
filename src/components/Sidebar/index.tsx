import styles from './style.module.css';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { UserCard } from '../UserCard';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <Navigation/>
      <UserCard/>
    </div>
  );
}
