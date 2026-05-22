import styles from './style.module.css'

type ContainerProps = {
    children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
    return (
        <h1 className={styles.heading}>{children}</h1>
    )
}