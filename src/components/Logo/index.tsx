import logo from '../../assets/logoFlow.png';
import styles  from './style.module.css';

export function Logo(){
    return (
     <div className={styles.logo}>
        <img src={logo} alt='Logo' />
        <h1>Focus Flow</h1>
      </div>
    )
}