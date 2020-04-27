import React from 'react';
import './styles.css';

import { MdAttachMoney } from 'react-icons/md';
import { AiFillFileText, AiFillWarning,AiOutlineArrowUp, AiOutlineArrowDown,AiOutlinePercentage } from 'react-icons/ai';
import { FaToolbox } from 'react-icons/fa';
import { BsFillPersonFill, BsClock } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa';

export default function handleIcon({type, size }){
    switch(type){
        case 'ERRO': return (
                        <div className="mini-card" style={{background: '#F63030'}}>
                                <AiFillWarning size={size} color='#fff'/>
                        </div>
                    )
        case 'FISCAL': return (
                        <div className="mini-card" style={{background: '#d279d2'}}>
                                <AiOutlinePercentage size={size} color='#fff'/>
                        </div>
                        )
        case 'RECURSOS HUMANOS': return (
                        <div className="mini-card" style={{background: '#BCBCBC'}}>
                                <BsFillPersonFill size={size} color='#fff'/>
                        </div>
                    )
        case 'ESPECIFICAÇÃO': return (
                        <div className="mini-card" >
                                <MdAttachMoney size={size} color='#fff' />
                        </div>
                    )
        case 'ABONADO': return (
                        <div className="mini-card" style={{background: '#EE8524'}}>
                                <BsClock size={size} color='#fff' />
                        </div>
                    )
        case 'INFRAESTRUTURA': return (
                        <div className="mini-card" style={{background: '#FAE637'}}>
                                <FaToolbox size={size} color='#fff'  />
                        </div>
                    )
        case 'PROJETO': return (
                        <div className="mini-card"  style={{background: '#6FA6E7'}}>
                                <AiFillFileText size={size} color='#fff'/>
                        </div>
                    )
         case 'up': return (
                        <div className="mini-card" style={{background: '#71E76F'}}>
                                <AiOutlineArrowUp size={size} color='#fff'/>
                        </div>
                    )
        case 'down': return (
                        <div className="mini-card" style={{background: '#FF9587'}}>
                                <AiOutlineArrowDown size={size} color='#fff'/>
                        </div>
                    )
        case 'patch': return (
                    <div className="mini-card" style={{background: '#6FA6E7'}}>
                        <FaTag size={size} color='#fff' />
                    </div> 
                ) 
        default: return null                        
    }
}