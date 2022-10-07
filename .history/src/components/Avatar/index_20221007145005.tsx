import styles from './index.module.css'

interface src{
    src: string;
}

export function Avatar({hasborder = true, src}){
    return(
        <img className={hasborder ? styles.avatarWithBorder : styles.avatar} src={src}/>
    )
};