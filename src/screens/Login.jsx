import { MainLayout } from "../layouts/MainLayout"
import styles from '../styles/login.module.css'
import Api from "../Api"


import Email from '../imagem/emeil.png'
import Password from '../imagem/password.png'
import { useEffect, useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { async } from "@firebase/util"

export const LoginScreen = (props) => {
    const [user, setUser] = useState()
    const [wrongUser, setWrongUser] = useState(false)

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        
        setUser((estadoAnterior)=> {
        return {
            ...estadoAnterior,
            [name]: value
        }
        })
    }
    const handleSubmit = async () => {
        const users = await Api.listUsers();
        console.log(users)
    }
    // console.log('user', user)
    // const handleSubmit = async () => {
    //     const auth = getAuth();
    //     try {
    //         const response = await signInWithEmailAndPassword(auth, user?.email, user?.password)
    //     } catch(e) {
    //         setWrongUser(true)
    //       }
        
        
    // }
    // useEffect(()=>{
    //     setTimeout(()=> setWrongUser(false), 3000)
    // }, [wrongUser])

    // function handleSubmit() {
    //     window.location.href="http://localhost:3000/discover"
    // }
  
    function catatro() {
        window.location.href="http://localhost:3000/register"
      }
    return (
    <MainLayout color="blue">
     <div className="content">
        <h1>Login</h1>
        <br/><br/>
        <div className="input-container">
        <img className=" imagem-input" src={Email} height="60" alt="imagem login"/>
        
        <input id="inputEmail" name="email" onChange={handleChange}  className={styles.input} type="text" placeholder="E-mail"/>
       
        </div>
        
        <br/><br/>
        <div className="input-container">
        <img className="imagem-input "src={Password} height="60" alt="imagem login"/>
        <input id="Senha" name="password" onChange={handleChange}  className={styles.input} type="password" placeholder="Senha"/>
        </div>


        <br/><br/>
        { wrongUser && <div>email ou senha incorretos! Tente novamente</div> }
        <div className={styles.Divbotao}>
            <button onClick={handleSubmit} className={styles.botalogi} >Entrar</button>
            <button className={styles.catastro} onClick={catatro}>Catastro</button>
        </div>
       
    </div>
    </MainLayout>
    )
}