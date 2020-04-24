import React from 'react';
import './styles.css';
import { MdAttachMoney } from 'react-icons/md';
import { AiFillFileText, AiFillWarning } from 'react-icons/ai';
import { FaToolbox } from 'react-icons/fa';
import { BsFillPersonFill, BsClock } from 'react-icons/bs';


export default function CardRequestInfo({ type, qtd }) {
    function handleIcon(){
        switch(type){
            case 'ERRO': return (
                            <div className="mini-card" style={{background: '#F63030'}}>
                                    <AiFillWarning size={50} color='#fff'/>
                            </div>
                        )
            case 'RECURSOS HUMANOS': return (
                            <div className="mini-card" style={{background: '#BCBCBC'}}>
                                    <BsFillPersonFill size={50} color='#fff'/>
                            </div>
                        )
            case 'ESPECIFICAÇÃO': return (
                            <div className="mini-card" >
                                    <MdAttachMoney size={50} color='#fff' />
                            </div>
                        )
            case 'ABONADO': return (
                            <div className="mini-card" style={{background: '#EE8524'}}>
                                    <BsClock size={50} color='#fff' />
                            </div>
                        )
            case 'INFRAESTRUTURA': return (
                            <div className="mini-card" style={{background: '#FAE637'}}>
                                    <FaToolbox size={50} color='#fff'  />
                            </div>
                        )
            case 'PROJETO': return (
                            <div className="mini-card"  style={{background: '#6FA6E7'}}>
                                    <AiFillFileText size={50} color='#fff'/>
                            </div>
                        )
            default: return null                        
        }
    }
    return (        
       <div className="card">           
            { handleIcon() }           
            <span className="type">{type.toLowerCase()}</span>
            <span className="record">{qtd}</span>
       </div>
    )
}