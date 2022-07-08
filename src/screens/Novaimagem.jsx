import { MainLayout } from "../layouts/MainLayout"
import'../styles/novaimagem.css'

import Novaimag from "../../src/assets/novaimagem/novaimagema1.png"
import Banana from "../../src/assets/novaimagem/novaimagema2.png"
import Flha from "../../src/assets/novaimagem/novaimagema3.png"


const listaImagems = [
    Novaimag,Banana, Flha,
]   

export const NovaimagemScreen = (props) => {

    function apaPrinsipal() {
        window.location.href = ' http://localhost:3000/cachoros'

    }
 
    return (
        <MainLayout color="blue" >
            
            <div className="npl">
            
                <div className="imagem-seguntario">
                    {listaImagems.map((imagem)=>{                       
                        return <img src={imagem} />
                    })}                               
                </div>

                <div>
                <button onClick={apaPrinsipal} className="botão-segontario">SEE MORE</button>
                </div>
                
            </div>
          
        </MainLayout>
    )
}