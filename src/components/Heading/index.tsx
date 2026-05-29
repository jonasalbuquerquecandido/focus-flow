import style from './style.module.css';
const name = 'Gustavo';

export function Heading() {
  return (
   <header className={style.header}>
    <div>
        <h2>Seja bem-vindo {name}!</h2>
        <p>Vamos manter o foco e alcançar nossos objetivos!</p>
    </div>
    <div>
        <i className="fa-regular fa-bell"></i>
        <i className="fa-solid fa-chart-line"></i>
    </div>
   </header>
  );
}