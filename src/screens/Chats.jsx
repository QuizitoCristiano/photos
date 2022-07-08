import { MainLayout } from "../layouts/MainLayout"
import '../styles/chats.css'

import James from '../assets/img/james.png'
import Beht from '../assets/img/beht.png'
import Rew from '../assets/img/rew.png'
import Will from '../assets/img/will.png'

export const ChatsScreen = (props) => {
    return (
        <MainLayout color="blue" >
            <div id="content">    
                <div className="wrappar">
                    <h2 className="fonte">Chats</h2>
                    <div className="sima"></div>
                    <div className="chates">
                        <img src={James} alt=""/>

                        <div className="filho">
                            <h3 className="nome-prinsipal">James</h3>
                            <p className="paragrafo">I know... I’m trying to get the funds.</p>
                        </div>
                    </div>
                    <div className="sima"></div>
                    <div className="chates">
                        <img src={Will} alt=""/>
                        <div className="filho">
                            <h3 className="nome-prinsipal">Will Kenny</h3>
                            <p className="paragrafo">I know... I’m trying to get the funds.</p>
                        </div>
                    </div>
                    <div className="sima"></div>
                    <div className="chates">
                        <img src={Beht} alt=""/>
                        <div className="filho">
                            <h3 className="nome-prinsipal">Beth Williams</h3>
                            <p className="paragrafo">I know... I’m trying to get the funds.</p>
                        </div>
                    </div>
                    <div className="sima"></div>
                    <div className="chates">
                        <img src={Rew} alt=""/>
                        <div className="filho">
                            <h3 className="nome-prinsipal">Rev Shawn</h3>
                            <p className="paragrafo">I know... I’m trying to get the funds.</p>
                        </div>
                    </div>
                    <div className="sima"></div>  
                </div>
            </div>
        </MainLayout>
    )
}