import { MainLayout } from "../layouts/MainLayout"
import '../styles/profile.css'

import Fotodoperfil from '../imagem/ellipse.png'

import Mulherlinda from '../imagem/mulherlinda.png'
import AFilha from '../imagem/afilha.png'
import Rita from '../imagem/rita.png'

import Moça from '../imagem/moça.png'
import Atia from '../imagem/atia.png'
import Mulher from '../imagem/mulher.png'


const images = [
    { src: Mulherlinda, alt:'imagem de arte'},
    {src: AFilha, alt:'A imagem não apareceu'},
    {src: Rita, alt: 'A imagem não apareceu'},

    {src: Moça, alt: 'A imagem não apareceu'},
    {src: Atia, alt: 'A imagem não apareceu'},
    {src: Mulher, alt:'imagem de arte'},
     
]



export const ProfileScreen = (props) => {
    function paraChats(){
        window.location.href=" http://localhost:3000/chats"
    }
    function mensagemIndividual(){
        window.location.href = ' http://localhost:3000/individual'
    }
   

    return (
        <MainLayout color="blue" >
        <div id="content">
            <div className="wrapper">
            
                <div className="photos">
                    <img  src={Fotodoperfil}   alt="fggggfh"/>
                </div>
                <div className="letra">
                    <h2>Jane</h2>                 
                    <p className="San">San francisco, ca</p>
                </div> 
                <div className="buttons-container">
                    <a><button className="follow-jane">follow jane</button></a>
                    <br/><br/>
                    <button className="outlined-baixo" onClick={mensagemIndividual} className="outlined">message </button>
                </div>
                {/* <div className="photos">
                    <div className="column">
                        <img src={Mulherlinda} width="250" height="464" alt=""/>
                        <img src={AFilha} width="250" height="464" alt=""/>
                        <img src={Rita} width="250" height="464" alt=""/>            
                    </div>
                    <div className="column">  
                        <img src={Moça} width="250" height="464" alt=""/>
                        <img src={Atia}  width="250" height="464" alt=""/>     
                        <img src={Mulher} width="250" height="464" alt=""/>
                
                    </div>
                </div>  */}

                <div className="photos">
                    {images.map((image)=>{
                        const {src, width, height, alt} = image
                        if(!src) return <p>não achei a imagem :(</p>
                        return <img src={src} width={width || '250'} height={height || '464'} alt={alt}/>
                    })}
                </div>

                <div className="baixoa">
                    <button onClick={paraChats} className="baixo">see more</button>
                </div>
                                                  
            </div>
        </div>

       

      
        </MainLayout>
    )
}