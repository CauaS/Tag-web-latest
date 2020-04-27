import React, { useEffect, useState } from 'react';
import './styles.css';

import CardRequestInfo from './CardRequestInfo/index';
import CardPatchInfo from './CardPatchInfo/index';

import api from '../../services/api';

import kundenLogo from '../../assets/img/kundenLogo.png';

export default function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        handleRequest();
    }, [])

    async function handleRequest(){
        await api.get('dashboard/month').then(response => setData(response.data));
    }

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