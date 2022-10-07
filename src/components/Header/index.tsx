import styles from './index.module.css'
import logotipo from '../../assets/logo-crie-ti 1.png'
export function Header() {
    return (
        <header className={styles.header}>
            <img src={logotipo} alt="Logotipo do CRIE TI" />
        </header>
    )
}