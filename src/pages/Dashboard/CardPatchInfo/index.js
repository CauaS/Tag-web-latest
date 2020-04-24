import React from 'react';
import './styles.css';
import { FaTag } from 'react-icons/fa';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

export default function CardPatchInfo({ type }) {

    function handleIcon(){
        switch(type){
            case 'up': return (
                            <div className="mini-card" style={{background: '#71E76F'}}>
                                    <AiOutlineArrowUp size={50} color='#fff'/>
                            </div>
                        )
            case 'down': return (
                            <div className="mini-card" style={{background: '#FF9587'}}>
                                    <AiOutlineArrowDown size={50} color='#fff'/>
                            </div>
                        )
            case 'patch': return (
                        <div className="mini-card" style={{background: '#6FA6E7'}}>
                            <FaTag size={40} color='#fff' />
                        </div> 
                    )                        
        }
    }
    return (        
       <div className="card-patch">       
            {handleIcon()}   
            <span className="description">Patch atual</span>    
            <span className="number-patch">213</span>
            <div className="footer-patch">
                <span className="line"/>
                <span className="observation">Total de pedidos: <strong>213</strong></span>
            </div>
       </div>
       
    )
}