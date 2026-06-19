import logo from '../../assets/logoFlow.png';
import style  from './style.module.css';

export function Logo(){
    return (
     <div className={style.logo}>
        <img src={logo} alt='Logo' />
        <h1>Focus Flow</h1>
      </div>
    )
}