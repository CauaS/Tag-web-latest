import React from 'react';
import './styles.css';

import HandleIcon from '../HandleIcons/index';

export default function CardRequestInfo({ type, qtd }) {
    
    return (        
       <div className="card">           
            <HandleIcon type={type}/>          
            <span className="type">{type.toLowerCase()}</span>
            <span className="record">{qtd}</span>
       </div>
    )
}