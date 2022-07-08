import styles from './styles.module.css'

export const ChatMessage = (props)=> {
    const {author, text, datetime } = props

    const me = 'jane'
    const isUser = author?.name === me
    return (  
        <div className={`ghghgjh ${styles.message} ${isUser && styles.messageMe}`}>
            <div className={`${styles.messageImage} ${isUser && styles.messageMeImage}`}>
                <img src={author?.img} width="100%" alt="author image"/>
            </div>
            <div className={` ${styles.messageText} ${isUser && styles.mesagemEnviada} `} >
                {text}
                
            </div>
         
        </div>
    )
}