import React from 'react';
import './styles.css';

import { MdAttachMoney } from 'react-icons/md';
import { AiFillFileText, AiFillWarning,AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { FaToolbox } from 'react-icons/fa';
import { BsFillPersonFill, BsClock } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa';

export default function handleIcon({type}){
    switch(type){
        case 'ERRO': return (
                        <div className="mini-card" style={{background: '#F63030'}}>
                                <AiFillWarning size={38} color='#fff'/>
                        </div>
                    )
        case 'RECURSOS HUMANOS': return (
                        <div className="mini-card" style={{background: '#BCBCBC'}}>
                                <BsFillPersonFill size={38} color='#fff'/>
                        </div>
                    )
        case 'ESPECIFICAÇÃO': return (
                        <div className="mini-card" >
                                <MdAttachMoney size={38} color='#fff' />
                        </div>
                    )
        case 'ABONADO': return (
                        <div className="mini-card" style={{background: '#EE8524'}}>
                                <BsClock size={38} color='#fff' />
                        </div>
                    )
        case 'INFRAESTRUTURA': return (
                        <div className="mini-card" style={{background: '#FAE637'}}>
                                <FaToolbox size={38} color='#fff'  />
                        </div>
                    )
        case 'PROJETO': return (
                        <div className="mini-card"  style={{background: '#6FA6E7'}}>
                                <AiFillFileText size={38} color='#fff'/>
                        </div>
                    )
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
        default: return null                        
    }
}