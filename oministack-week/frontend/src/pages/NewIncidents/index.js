import React from 'react';
import {Link} from  'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './style.css'
import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar o herói para resolver isso. </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                <form >
                    <input placeholder="Titulo do caso"/>
                    <textarea  placeholder="Descriçao"/>
                    <input placeholder="Valor em reais"/>
                     
                    <button className="button" type="submit">Cadastrar</button>
                    
                </form>
            </div>
        </div>
    );
}