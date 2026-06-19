import style from './style.module.css';
import profile from '../../assets/profile.png'

export function UserCard() {
  return (
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
  );
}
