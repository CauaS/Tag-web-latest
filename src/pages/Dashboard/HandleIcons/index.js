import React from 'react';
import './styles.css';

import { MdAttachMoney } from 'react-icons/md';
import { AiFillFileText, AiFillWarning,AiOutlineArrowUp, AiOutlineArrowDown,AiOutlinePercentage } from 'react-icons/ai';
import { FaToolbox, FaExclamation, FaCheck } from 'react-icons/fa';
import { BsFillPersonFill, BsClock } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa';

export default function handleIcon({type, size, borderRadius }){
    switch(type){
        case 'ERRO': return (
                        <div className="mini-card" style={{background: '#F63030', borderRadius }}>
                                <AiFillWarning size={size} color='#fff'/>
                        </div>
                    )
        case 'FISCAL': return (
                        <div className="mini-card" style={{background: '#d279d2', borderRadius}}>
                                <AiOutlinePercentage size={size} color='#fff'/>
                        </div>
                        )
        case 'RECURSOS HUMANOS': return (
                        <div className="mini-card" style={{background: '#BCBCBC', borderRadius}}>
                                <BsFillPersonFill size={size} color='#fff'/>
                        </div>
                    )
        case 'ESPECIFICAÇÃO': return (
                        <div className="mini-card" >
                                <MdAttachMoney size={size} color='#fff' style={{ borderRadius }} />
                        </div>
                    )
        case 'ABONADO': return (
                        <div className="mini-card" style={{background: '#EE8524', borderRadius}}>
                                <BsClock size={size} color='#fff' />
                        </div>
                    )
        case 'INFRAESTRUTURA': return (
                        <div className="mini-card" style={{background: '#FAE637', borderRadius}}>
                                <FaToolbox size={size} color='#fff'  />
                        </div>
                    )
        case 'PROJETO': return (
                        <div className="mini-card"  style={{background: '#6FA6E7', borderRadius}}>
                                <AiFillFileText size={size} color='#fff'/>
                        </div>
                    )
         case 'up': return (
                        <div className="mini-card" style={{background: '#71E76F', borderRadius}}>
                                <AiOutlineArrowUp size={size} color='#fff'/>
                        </div>
                    )
        case 'down': return (
                        <div className="mini-card" style={{background: '#FF9587', borderRadius}}>
                                <AiOutlineArrowDown size={size} color='#fff'/>
                        </div>
                    )
        case 'patch': return (
                    <div className="mini-card" style={{background: '#6FA6E7', borderRadius}}>
                        <FaTag size={size} color='#fff' />
                    </div> 
                ) 
        case 'EXCLAMACAO': return (
                <div className="mini-card" style={{ borderRadius, background: '#FFF'}}>
                        <FaExclamation size={size} color='#F63030' />
                </div> 
                ) 
        case 'ANALISADO': return (
                <div className="mini-card" style={{ borderRadius, background: '#71E76F'}}>
                        <FaCheck size={size} color='#FFF' />
                </div> 
                ) 
        default: return null                        
    }
}