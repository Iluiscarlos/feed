import styles from './index.module.css'
import { Avatar } from '../Avatar'

export function Publication() {
    return (
    <aside className={styles.publication}>
        <header>
        <div className={styles.profile}>
        <Avatar hasborder={true} src='https://github.com/Iluiscarlos.png'></Avatar>
            
            <div className={styles.description}>
            <strong>Luís Carlos Kochenborger</strong>
                <span>Estudante de programação | CRIE_TI | React | Typescript</span>
            </div>
        </div>
            <time className={styles.hours} title='29 de setembro ás 11:13' dateTime='2022-09-29 13:00:00'>
                Públicado há 1h
            </time>
    </header>
        <div className={styles.feed}>
            <div className={styles.content}>
                <p>Oii Pessoal!</p>
                <p>Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀</p>
                <a href='https://github.com/Iluiscarlos'><p>https://github.com/Iluiscarlos</p></a>
                <strong>#novoprojeto #git #frontend</strong>
            </div>
        </div>
        <div className={styles.feedback}>
            <strong>Deixe seu feedback</strong>
            <textarea></textarea>
            <button type="submit">Publicar</button>
        </div>
    </aside>    
    )
};