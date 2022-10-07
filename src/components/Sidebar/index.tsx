import styles from './index.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80' />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/Iluiscarlos.png' />
                <div className={styles.description}>
                    <strong>Luís Carlos Kochenborger</strong>
                    <span> Estudante de programação no CRIE_TI Univates</span>
                </div>
            </div>
        </aside>
    )
}