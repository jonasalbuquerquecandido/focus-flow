import style from './style.module.css';
const name = 'Gustavo';

export function Heading() {
  return (
   <header className={style.header}>
    <div className={style.heading}>
        <h1>Seja bem-vindo <span>{name}</span>!</h1>
        <p>Vamos manter o foco e alcançar nossos objetivos!</p>
    </div>
    <div className={style.icons}>
        <i className="fa-regular fa-bell"></i>
        <i className="fa-solid fa-chart-line"></i>
    </div>
   </header>
  );
}