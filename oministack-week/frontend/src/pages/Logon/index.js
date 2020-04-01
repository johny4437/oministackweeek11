import React,{ useState }from 'react'
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './style.css';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api';


export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
        const response = await api.post('login',{ id });

        localStorage.setItem('ongID', id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile')
    } catch (error) {
        alert("Falha no Login::.");
    }

  };

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt ="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Logon</h1>
                    <input 
                    type="text"
                     placeholder="Seu ID"
                     value={id}
                     onChange={e => setId(e.target.value)}
                     />
                    <button  className="button " type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não Tenho Cadastro
                    </Link>

                </form>
                
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
       
    );
}