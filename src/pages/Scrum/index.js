import React,  { useState, useEffect } from 'react';
import './styles.css';

import { useHistory, Link } from 'react-router-dom';

import Card from'./Column/index';
import api from '../../services/api';
import kundenLogo from '../../assets/img/kundenLogo.png';
import { MdKeyboardBackspace } from 'react-icons/md'

export default function Scrum(){

    const history = useHistory();
    
    const [liberado, setLiberado] = useState([]);
    const [validadoDesenvolvimento, SetValidadoDesenvolvimento] = useState([]);
    const [validadoAnalista, SetValidadoAnalista] = useState([]);
    const [atualizadoCliente, SetAtualizadoCliente] = useState([]);
    const [impedido, SetImpedido] = useState([]);

    useEffect( async () => {
       await api.get('/scrum').then(response => handleData(response.data));        
    }, []);

    function handleData(data){
        if(data.length > 0){
            const l = data.filter(item => item.event_description.includes('Liberado') || item.event_description.includes('Desvalidado Desenvolvimento') || item.event_description.includes('Analisado'));
            const vd = data.filter(item => item.event_description.includes('Validado Desenvolvimento') || item.event_description.includes('Desvalidado Analista'));
            const va = data.filter(item => item.event_description.includes('Validado Analista')||item.event_description.includes('Desvalidado Consultoria'));
            const ac = data.filter(item => item.event_description === 'Atualizado Cliente');
            const i = data.filter(item => item.event_description === 'Impedido');
            
            setLiberado(l);
            SetValidadoDesenvolvimento(vd);
            SetValidadoAnalista(va);
            SetAtualizadoCliente(ac);
            SetImpedido(i);
        }
    }
    return (
        <div className="container-scrum">
            <header>
                <div className="header-back">
                <Link 
                    to='/'
                    onClick={() => history.push('/')}
                >
                    <MdKeyboardBackspace size={36}/>
                </Link>
                    <h1>Scrum</h1>
                </div>
                <img src={kundenLogo} alt="kunden logo" />
            </header>
            <div className="container-info-columns">
                <div className="column">
                    <div className="column-title">
                        <span>Liberado</span>
                    </div>
                    <div className="requests">
                        <Card data={liberado}/>
                    </div>
                </div>
                <div className="column">
                    <div className="column-title">
                        <span>Validado Desenvolvimento</span>
                    </div>
                    <div className="requests">
                        <Card data={validadoDesenvolvimento}/>
                    </div>
                </div>
                <div className="column">
                    <div className="column-title">
                        <span>Validado Analista</span>
                    </div>
                    <div className="requests">
                        <Card data={validadoAnalista}/>
                    </div>
                </div>
                <div  className="column">
                    <div className="column-title">
                        <span>Atualizado no Cliente</span>
                    </div>
                    <div className="requests">
                        <Card data={atualizadoCliente}/>
                    </div>
                </div>
                <div  className="column">
                    <div className="column-title">
                        <span>Impedido</span>
                    </div>
                    <div className="requests">
                        <Card data={impedido}/>
                    </div>
                </div>
           </div>
        </div>
    )
}