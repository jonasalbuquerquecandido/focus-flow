import style from './style.module.css';

export function Navigation() {
  return (
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
        <i className='fa-solid fa-heart'></i>
        <a href='#'>Hábitos</a>
      </li>
      <li className={style.itens}>
        <i className='fa-solid fa-chart-pie'></i>
        <a href='#'>Dashboard</a>
      </li>
      <li className={style.itens}>
        <i className='fas fa-cog'></i>
        <a href='#'>Configurações</a>
      </li>
    </ul>
  );
}
