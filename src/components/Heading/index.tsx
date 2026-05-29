import style from './style.module.css';
const name = 'Gustavo';

export function Heading() {
  return (
   <header className={style.header}>
    <h2>Seja bem-vindo {name}!</h2>
   </header>
  );
}