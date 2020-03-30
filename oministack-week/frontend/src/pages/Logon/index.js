import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import './style.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt ="Be The Hero"/>
                <form>
                    <h1>Faça Seu Logon</h1>
                    <input type="text" placeholder="Seu ID"/>
                    <button  className="button " type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não Tenho Cadastro
                    </a>

                </form>
                
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
       
    );
}
export default Logon;