import React from 'react';
import './styles.css';

import Card from'./Column/index';

import kundenLogo from '../../assets/img/kundenLogo.png';

export default function Scrum(){
    
    return (
        <div className="container-scrum">
            <header>
                <h1>Scrum</h1>
                <img src={kundenLogo} alt="kunden logo" />
            </header>
            <div className="container-info-columns">
                <div className="column">
                    <div className="column-title">
                        <span>Liberado</span>
                    </div>
                    <div className="requests">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
                <div className="column">
                    <div className="column-title">
                        <span>Validado Desenvolvimento</span>
                    </div>
                    <div className="requests">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
                <div className="column">
                    <div className="column-title">
                        <span>Validado Analista</span>
                    </div>
                    <div className="requests">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
                <div  className="column">
                    <div className="column-title">
                        <span>Atualizado no Cliente</span>
                    </div>
                    <div className="requests">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
                <div  className="column">
                    <div className="column-title">
                        <span>Impedido</span>
                    </div>
                    <div className="requests">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
           </div>
        </div>
    )
}