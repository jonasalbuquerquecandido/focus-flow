import style from './style.module.css';
import { Logo } from '../Logo/logo';
import { Navigation } from '../Navigation/Navigation'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { UserCard } from '../UserCard/UserCard'

export function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo/>
      <Navigation/>
      <ThemeSwitcher/>
      <UserCard/>
    </div>
  );
}
