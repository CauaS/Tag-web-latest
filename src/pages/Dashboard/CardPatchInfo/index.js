import React from 'react';
import './styles.css';

import HandleIcon from '../HandleIcons/index';

export default function CardPatchInfo({ type, qtd }) {

    console.log(type);
    return (        
       <div className="card-patch">       
            <HandleIcon type={type} size={40} /> 
            <span className="description">{type}</span>    
            <span className="number-patch">{qtd}</span>
            <div className="footer-patch">
                <span className="line"/>    
                <span className="observation">
                    Total de pedidos: <strong>213</strong>
                </span>
            </div>
       </div>
       
    )
}