import { MainLayout } from "../layouts/MainLayout"
import '../styles/discover.css'


import {Card} from '../components/Card'

import Homemnumaescata from '../imagem/Homemnumaescata.png'
import Joao from '../imagem/joao.png'
import Carrovelho from '../imagem/carrovelho.png'
import Desenho from '../imagem/desenho.png'
import Jon from '../imagem/jon.png'
import Homeemsima from '../imagem/homeemsima.png'
import Simon from '../imagem/simon.png'
import Clem from '../imagem/clem.png'


import Arte from '../imagem/arte.png'
import Menina from '../imagem/menina.png'
import Casa from '../imagem/casa.png'
import Bolo from '../imagem/bolo.png'
import Estrada from '../imagem/estrada.png'

import Apaixonados from '../imagem/apaixonados.png'
import Cachoro from '../imagem/cachoro.png'
import Chova from '../imagem/chuva.png'
import Estacionamento from '../imagem/estacionamento.png'
import Mar from '../imagem/mar.png'

const exemplo = { 
    src: Arte, 
    alt:'imagem de arte' 
}

const garrafa = {
    cor: 'azul',
    formato: 'cilindro',
}

const images = [
    { src: Arte, alt:'imagem de arte'},
    {src: Menina, alt:'A imagem não apareceu'},
    {src: Casa, alt: 'A imagem não apareceu'},
    {src: Bolo, alt: 'A imagem não apareceu'},
    {src: Estrada, alt: 'A imagem não apareceu'},

    { src: Apaixonados, alt:'imagem de arte'},
    {src: Cachoro, alt: 'A imagem não apareceu'},
    {src: Chova, alt: 'A imagem não apareceu'},
    {src: Estacionamento, alt: 'A imagem não apareceu'},
    {src: Mar, alt:'A imagem não apareceu'},
   
]

const cards = [
    {image:Homemnumaescata, user: {image: Joao,name: 'Ridhwan Nordin'} },
    {image:Carrovelho, user: {image: Clem,name: 'Clem Onojeghuo'} },
    {image:Desenho, user: {image: Jon,name: 'Jon Tyson'} },
    {image:Homeemsima, user: {image: Simon,name: 'Simon Zhu' ,username:'@smnzhu'} },
]


export const DiscoverScreen = (props) => {
 
    return (
        <MainLayout color="blue" >
            <div className="discover">
                <h2>Discover</h2>
                <p>What’s new today</p>
            </div>
            <div className="cards">
                {
                    cards.map((card)=>{
                        return <Card {...card}/>                    
                    })
                }
                {/* <div className="card" >
                    <div className="card-image">
                        <img src={Homemnumaescata} className="card-img-top" alt="tudo bem!!!"/>
                    </div>
                    <div className="card-text">
                        <div className="card-avatar">
                            <img src={Joao} height="100px" alt="tudo bem!!!"/>
                        </div>
                        <div className="card-info">
                            <h4>Ridhwan Nordin</h4>
                            <h6>@ridzjcob</h6>
                        </div>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-image">
                        <img src={Carrovelho} className="card-img-top" alt="tudo bem!!!..."/>
                    </div>
                    <div className="card-text">
                        <div className="card-avatar">
                            <img src={Clem} alt="tudo bem!!!"/>
                        </div>
                        <div className="card-info">
                            <h4>Clem Onojeghuo</h4>
                            <h6>@clemono2</h6>
                        </div>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-image">
                        <img src={Desenho} className="card-img-top" alt="tudo bem!!!..."/>
                    </div>
                    <div className="card-text">
                        <div className="card-avatar">
                            <img src={Jon} alt="tudo bem!!!"/>
                        </div>
                        <div className="card-info">
                            <h4>Jon Tyson</h4>
                            <h6>@jontyson</h6>
                        </div>
                    </div>
                </div>

                <div className="card" >
                    <div className="card-image">
                        <img src={Homeemsima} className="card-img-top" alt="tudo bem!!!..."/>
                    </div>
                    <div className="card-text">
                        <div className="card-avatar">
                            <img src={Simon} height="249px" alt="tudo bem!!!"/>
                        </div>
                        <div className="card-info">
                            <h4>Simon Zhu</h4>
                            <h6>@smnzhu</h6>
                        </div>
                    </div>
                </div> */}

            </div>   
            <div className="photos"> 
                
                {images.map((image)=>{
                    const {src, width, height, alt} = image
                    if(!src) return <p>não achei a imagem :(</p>
                    return <img src={src} width={width || '250'} height={height || '464'} alt={alt}/>
                })}
           
                        
        </div> 

        <button  className="fb">see more</button>

       

   
        </MainLayout>
    )
}