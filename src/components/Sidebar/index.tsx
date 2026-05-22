import style from './style.module.css';

export function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.logo}>
        <img src='./assets/logo.png' alt='Logo' />
        <h1>Focus Flow</h1>
      </div>

      <ul className={style.menu}>
        <li className={style.itens}>
          <i className='fas fa-home'></i>
          <a href='#'>Início</a>
        </li>
        <li className={style.itens}>
          <i className='fas fa-history'></i>
          <a href='#'>Histórico</a>
        </li>
        <li className={style.itens}>
          <i className='fas fa-tasks'></i>
          <a href='#'>Hábitos</a>
        </li>
        <li className={style.itens}>
          <i className='fas fa-chart-line'></i>
          <a href='#'>Dashboard</a>
        </li>
        <li className={style.itens}>
          <i className='fas fa-cog'></i>
          <a href='#'>Configurações</a>
        </li>
      </ul>

      <div>
        <i className='fas fa-moon'></i>
        Tema escuro
        <button>Ativar</button>
      </div>

      <div>
        <img src='./assets/profile.png' alt='Profile' />
        <div>
          Lucas Andrade
          <p>Status</p>
        </div>
      </div>
    </div>
  );
}
