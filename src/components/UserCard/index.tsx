import styles from './style.module.css';
import profile from '../../assets/profile.png'

export function UserCard() {
  return (
    <div className={styles.profile}>
      <img src={profile} alt='Profile' />
      <div className={styles.profileInfo}>
        <p className={styles.name}>John Doe</p>
        <p className={styles.status}>Status</p>
      </div>
      <button className={styles.moreinformation}>
        <i className='fas fa-ellipsis-v'></i>
      </button>
    </div>
  );
}
