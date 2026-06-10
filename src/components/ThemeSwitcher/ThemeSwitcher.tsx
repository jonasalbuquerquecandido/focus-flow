import style from './style.module.css'

export function ThemeSwitcher() {
  return (
    <div className={style.theme}>
      <i className='fa-regular fa-moon'></i>
      <p className={style.themeText}>Modo Escuro</p>
      <button>Ativar</button>
    </div>
  );
}
