import style from './style.module.css';
import { Bell, Sun } from 'lucide-react';

const name = 'Gustavo';

export function Header() {
  return (
   <header className={style.header}>
    <div className={style.header}>
        <h1>Seja bem-vindo <span>{name}</span>!</h1>
        <p>Vamos manter o foco e alcançar nossos objetivos!</p>
    </div>
    <div className={style.icons}>
        <Bell />
        <Sun />
    </div>
   </header>
  );
}