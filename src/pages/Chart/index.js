import React from 'react';
import './styles.css';

export default function ChartRequest(){
    return (
        <div className="container">
           <div className="timeline">
                <div className="item left">
                    <div className="content">
                        <h3>Abertura do pedido</h3>
                    </div>
                </div>
                <div className="item right">
                    <div className="content">
                        <h3>Impedido</h3>
                        <p>Situação está com o Wagner. Foi explicado via email.</p>
                    </div>
                </div>
                <div className="item left">
                    <div className="content">
                        <h3>Desvalidado Desenvolvimento</h3>
                    </div>
                </div>
                <div className="item right">
                    <div className="content">
                        <h3>Validado Desenvolvimento</h3>
                    </div>
                </div>
                <div className="item left">
                    <div className="content">
                        <h3>Validado Analista</h3>
                    </div>
                </div>
                <div className="item right">
                    <div className="content">
                        <h3>Validado Consultoria</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}