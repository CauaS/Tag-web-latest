import React from 'react';
import './styles.css';

import HandleIcon from '../HandleIcons/index';

export default function CardPatchInfo({ type }) {
    return (        
       <div className="card-patch">       
            <HandleIcon type={type} /> 
            <span className="description">Patch atual</span>    
            <span className="number-patch">213</span>
            <div className="footer-patch">
                <span className="line"/>
                <span className="observation">Total de pedidos: <strong>213</strong></span>
            </div>
       </div>
       
    )
}