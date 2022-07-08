import { MainLayout } from "../layouts/MainLayout"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import '../styles/registro.css'



import Senha from '../imagem/senhas.png'
import Senhas from '../imagem/senha.png'
import Email from '../imagem/email.png'

import { useState } from "react"
export const RegisterScreen = () => {
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
    const auth = getAuth();
    try {
      const response = await createUserWithEmailAndPassword(auth, user?.email, user?.password)
    } catch(e) {
      setWrongUser(true)
    }
    
  }

 

  function login(){
    window.location.href="http://localhost:3000/login"
  }
 
  return (
    <MainLayout>
      
        <div onClick={login} className="seta">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
            d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z"
            fill="black" fillOpacity="0.8" />
          </svg>
        </div>

        <h2>Register</h2>
        <br/><br/>
        <div className="input-container">
          <img className="imagem-input" src={Senha} height="60" alt="" />
          <input name="username" className="impute" type="text" placeholder="Nome" onChange={handleChange}/>
        </div>
        <br/><br/>
        <div className="input-container">
          <img className="imagem-input" src={Email} height="60" alt="" />
          <input name="email" className="impute" type="text" placeholder="E-mail" onChange={handleChange} />
        </div>
        <br/><br/>
        <div className="input-container">
          <img className="imagem-input" src={Senhas} height="60" alt="" />
          <input name="password" className="impute" type="password" placeholder="Senha" onChange={handleChange}/>
        </div>
        
        { wrongUser && <div>email ou senha incorretos! Tente novamente</div> }
        <br/><br/>
        <button onClick={handleSubmit} className="mae">Register</button>        
    </MainLayout>
  )
}