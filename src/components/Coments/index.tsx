import styles from './index.module.css'
import { Avatar } from '../Avatar'
import { ThumbsUp, Trash} from "phosphor-react";
import { useState } from 'react';


interface PostProps{
    content: string;
    deleteComment: (content: string) => void;
}
export function Coments({content, deleteComment}: PostProps){

    const [likes, setLike] = useState(0);

    function handleDeleteComment(){
        deleteComment(content);
    }

    function handlePlusLike(){
        setLike(likes +1)
    }

    return(
        <>
        <div className={styles.profileComent}>
        <Avatar hasborder={false} src="https://github.com/mariele-huff.png"></Avatar>
        <div className={styles.coments}>
            <div className={styles.selected}>
            <strong>Mariele Huff</strong>
            <button className={styles.deleteBtn} onClick={handleDeleteComment} title='Deletar um comentário'><Trash size={24} alt="TrashDelete"/>
            </button>
            </div>
            <p>Comentado há 2h</p>
            <span>{content}</span>
        </div>
        </div>
        <button className={styles.reactions} onClick={handlePlusLike}>
        <ThumbsUp size={18} />
        <strong>{likes}</strong>
        </button>

        </>
    )
}