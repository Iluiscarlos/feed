import { ChangeEvent, FormEvent, useState } from "react";
import styles from './index.module.css'
import { Coments } from '../Coments'
import { Avatar } from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: "paragraph" | "link";
    content: string;
}

interface PostProps{
    author: Author;
    content: Content[];
    publishedAt: string;
}

export function Post({ author, content, publishedAt }: PostProps) {
    const [comments, setComments] = useState(["Que legal, adorei sua postagem!"]);
    const [newComment, setNewComment] = useState('')

    console.log(comments);

    const publishDateFormatted = format(new Date(publishedAt), "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBr,
    });

    const publishDateRelativeToNow = formatDistanceToNow(new Date(publishedAt), {
        locale: ptBr,
        addSuffix: true,
    });

    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault();
        setComments([...comments, newComment] );
      
        setNewComment('')
       }
      
       function handleNewCommentChange( event : ChangeEvent<HTMLTextAreaElement>) {
        setNewComment(event.target.value);
       }

       function deleteComment(commentToDelete: string) {
        const newCommentListWithoutDelete = comments.filter((comment) => {
          return comment !== commentToDelete;
        });
        setComments(newCommentListWithoutDelete);
      }

    return (
        <aside className={styles.post}>
            <header>
                <div className={styles.profile}>
                    <Avatar hasborder={true} src={author.avatarUrl}></Avatar>

                    <div className={styles.description}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time className={styles.hours} title={publishDateFormatted} dateTime={new Date(publishedAt).toISOString()}>
                    Publicado {publishDateRelativeToNow}
                </time>
            </header>
            <div className={styles.feed}>
                <div className={styles.content}>
                    {content.map(line => {
                        switch (line.type) {
                            case 'paragraph':
                                return <p>{line.content}</p>;
                            case 'link':
                                return <p><a href='#'>{line.content}</a></p>
                            default:
                                return ""
                        }
                    })
                    }
                </div>
            </div>
            <form onSubmit={handleCreateNewComment}>
                <div className={styles.feedback}>
                    <strong>Deixe seu feedback</strong>
                    <textarea name="comment" value={newComment} onChange={handleNewCommentChange} placeholder='Escreva um comentário...'></textarea>
                    <button type="submit">Publicar</button>
                </div>
            </form>
            <div className={styles.comments}>
        {comments.map((comment) => {
          return (<Coments content={comment} deleteComment={deleteComment} />)
        })}
      </div>
        </aside>
    )
};