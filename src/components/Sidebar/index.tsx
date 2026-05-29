import profile from '../../assets/profile.png';
import style from './style.module.css';
import logo from '../../assets/logoFlow.png';

export function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src={logo} alt='Logo' />
        <h1>Focus Flow</h1>
      </div>

      <ul className={style.menu}>
        <li className={style.itens}>
          <i className='fas fa-bolt'></i>
          <a href='#'>Foco</a>
        </li>
        <li className={style.itens}>
          <i className='fas fa-history'></i>
          <a href='#'>Histórico</a>
        </li>
        <li className={style.itens}>
          <i className="fa-solid fa-heart"></i>
          <a href='#'>Hábitos</a>
        </li>
        <li className={style.itens}>
          <i className="fa-solid fa-chart-pie"></i>
          <a href='#'>Dashboard</a>
        </li>
        <li className={style.itens}>
          <i className='fas fa-cog'></i>
          <a href='#'>Configurações</a>
        </li>
      </ul>

      <div className={style.theme}>
        <i className='fa-regular fa-moon'></i>
        <p className={style.themeText}>Modo Escuro</p>
        <button>Ativar</button>
      </div>

      <div className={style.profile}>
        <img src={profile} alt='Profile' />
        <div className={style.profileInfo}>
          <p className={style.name}>John Doe</p>
          <p className={style.status}>Status</p>
        </div>
        <button className={style.moreinformation}>
         <i className='fas fa-ellipsis-v'></i>
        </button>
      </div>
    </div>
  );
}
