import React from 'react';
import './styles.css';
import { MdAttachMoney } from 'react-icons/md';

export default function CardRequestInfo() {
    return (
       <div className="card">
            <div className="mini-card">
                <MdAttachMoney size={50} color='#fff'/>
            </div>
            <span className="type">Especificação</span>
            <span className="record">13</span>
       </div>
    )
}