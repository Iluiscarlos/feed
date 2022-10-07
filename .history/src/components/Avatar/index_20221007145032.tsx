import styles from './index.module.css'

interface PostProps{
    src: string;
}

export function Avatar({hasborder = true, src}: PostProps){
    return(
        <img className={hasborder ? styles.avatarWithBorder : styles.avatar} src={src}/>
    )
};