import { MainLayout } from "../layouts/MainLayout"
// import '../layouts/photos.css'

import Animal from '../imagem/oliveira.png'
export const PhotosScreen = (props) => {
    
    return (
        <MainLayout color="blue" >  
            <div className="soma">
                <h2>AngeloPantazis</h2>   
                <p>@angelopantazis</p>  

                <img src={Animal} className="cahoro" alt=""/>

            </div> 
          
        </MainLayout>
    )
}