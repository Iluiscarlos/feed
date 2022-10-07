import styles from './index.module.css'

export function Avatar({hasborder = true, src}){
    return(
        <img className={hasborder ? styles.avatarWithBorder : styles.avatar} src={src}/>
    )
};