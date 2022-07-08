import { MainLayout } from "../layouts/MainLayout"
import styles from '../styles/individual.module.css'

import { ChatMessage } from "../components/ChatMessage"

import Mensagem from '../imagem/mensagem.png'

import Jane from '../imagem/jane.png'
import James from '../imagem/james.png'


export const IndividualScreen = () => { 

    function ParaProfile(){
        window.location.href = ' http://localhost:3000/profile'
    }
    function clian(){
        const minhamensagem = document.querySelector("input#minhamensagem").value
        if (minhamensagem.length == 0) {
            alert("O campo esta vazio")
        } else {
            alert(`você digitou isso ${minhamensagem}`)
            minhamensagem = ''
        }
    
    }
    
    // name, email,
    const messages = [
        {
            author: {
                img: Jane,
                name:'jane'
            }, 
            text:'Hello! Tudo bem?',
            datetime: ''
        },
        {
            author: {
                img: James,
                name:'james'
            },
            text:'Tudo bem! E você?',
            datetime:''
        }
    ]

    return (
    <MainLayout color="blue" >


    
        <div id="content">
            <div id="container">      
                <div className={styles.simelador}>
                    <div onClick={ParaProfile} className={styles.barra}>
                        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.292152 11.2128C-0.0973839 10.8188 -0.0973839 10.1822 0.292152 9.78722L9.53714 0.427512C10.0995 -0.142504 11.0144 -0.142504 11.5777 0.427512C12.14 0.997527 12.14 1.92265 11.5777 2.49267L3.66913 10.5005L11.5777 18.5063C12.14 19.0774 12.14 20.0025 11.5777 20.5725C11.0144 21.1425 10.0995 21.1425 9.53714 20.5725L0.292152 11.2128Z" fill="black"/>
                        </svg> 
                    </div>
                    <h2 className={styles.james}>James</h2>
                </div>
   
               
                <section className="wrappar">
                    {messages.map((message) => {
                        return <ChatMessage author={message.author} text={message.text}/>
                    })}
                </section>
                <div className={styles.logo}>
                    <input id='minhamensagem' className={styles.inputMensagem} type="text" placeholder="Digite a sua mensagem" />
                    <button onClick={clian}  className={styles.botaoMensagem}>Enviar</button>
                </div>
            </div> 
        </div>

    
    
    </MainLayout>
    )
}