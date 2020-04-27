import React from 'react';
import './styles.css';

import CardRequestInfo from './CardRequestInfo/index';
import CardPatchInfo from './CardPatchInfo/index';

import kundenLogo from '../../assets/img/kundenLogo.png';

export default function Dashboard() {
    const data = [
        { type:'ESPECIFICAÇÃO', qtd: 15, },
        { type:'PROJETO', qtd: 15,},
        { type:'INFRAESTRUTURA', qtd: 15,},
        { type:'RECURSOS HUMANOS', qtd: 15, },
        { type:'ERRO', qtd: 15,  },
        { type:'ABONADO', qtd: 15, },
    ];

    const dataPatch =[
        { type: 'patch' },
        { type: 'up' },
        { type: 'down' },
    ]
    return (
        <div className="container-dashboard">
            <header>
                <h1>Dashboard</h1>
                <img src={kundenLogo} alt="kunden logo" />
            </header>
            <div className="line-infos-request">
                {
                    data.map(item => (
                        <CardRequestInfo type={item.type} qtd={item.qtd}/>           
                    ))
                }
            </div>
            <div className="line-infos-patch">
                {   
                    dataPatch.map(item => (
                        <CardPatchInfo type={item.type}/>           
                    ))
                }
            </div>
        </div>
    )
}