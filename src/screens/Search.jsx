import { MainLayout } from "../layouts/MainLayout"

export const SearchScreen = (props) => {
    console.log('login prop', props)
    return (
        <MainLayout color="blue" >
                
            <div id="content"/>
                <div id="container"/>
                
                    
                    <div className="simelador">
                        <div className="barra">
                            <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292152 11.2128C-0.0973839 10.8188 -0.0973839 10.1822 0.292152 9.78722L9.53714 0.427512C10.0995 -0.142504 11.0144 -0.142504 11.5777 0.427512C12.14 0.997527 12.14 1.92265 11.5777 2.49267L3.66913 10.5005L11.5777 18.5063C12.14 19.0774 12.14 20.0025 11.5777 20.5725C11.0144 21.1425 10.0995 21.1425 9.53714 20.5725L0.292152 11.2128Z" fill="black"/>
                            </svg> 
                        </div>
                    
                    
                        <h2 className="james">James</h2>
                    </div>
                    <section className="wrappar"/>
                    <div className="mor"/>
                            {/* <img src="img/leticia.png" alt=""/> */}
                            <p  className="pete"/>Really love your most recent photo. I’ve been
                                <br/>
                                trying to capture the same
                                thing for a few months   <br/>and would
                                love some tips!
                            <p/>
                        <div/>
                        <div className="lado"/>
                            {/* <img src="img/belita.png" alt=""/> */}
                            <p className="belita"/> fast 50mm like f1.8 would help with the <br/> I’ve
                                been using primes as they tend <br/> to get a
                                bit sharper images.
                            <p/>
                        <div/>
                        <div className="mor">
                            {/* <img src="img/leticia.png" alt=""/> */}
                            <p className="nei"> Thank you! That was very helpful!
                            </p>
                        </div> 
                    <section/>
                    
                <div/>
            <div/>
            
        </MainLayout>
    )
}