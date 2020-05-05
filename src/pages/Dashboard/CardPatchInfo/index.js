import React from 'react';
import './styles.css';

import HandleIcon from '../HandleIcons/index';

export default function CardPatchInfo({ rate, type, qtd }) {
    return (        
       <div className="card-patch">       
            <HandleIcon type={rate} size={38} /> 
            <span className="description">
                <HandleIcon type={type} size={38} />    
            </span>    
            <span className="number-patch">{rate === 'patch' ? '213' : qtd }</span>
            <div className="footer-patch">
                <span className="line"/>    
                <span className="observation">
                    { rate === 'patch' 
                      ? 'Total de pedidos:' 
                      : type }: <strong>{qtd}</strong>
                </span>
            </div>
       </div>
       
    )
}