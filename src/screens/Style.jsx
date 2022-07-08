import { MainLayout } from "../layouts/MainLayout"

export const StyleScreen = (props) => {
    console.log('login prop', props)
    return (
        <MainLayout color="blue" >
            <div>
            Tela de login
            </div>
            <h2>Bem vindo ao programa</h2>
        </MainLayout>
    )
}