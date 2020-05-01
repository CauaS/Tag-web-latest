import React, { useEffect, useState } from 'react';
import './styles.css';

import CardRequestInfo from './CardRequestInfo/index';
import CardPatchInfo from './CardPatchInfo/index';

import api from '../../services/api';

import kundenLogo from '../../assets/img/kundenLogo.png';

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [dataPatch, setDataPatch] = useState([]);
    const [dataPatchFinal, setDataPatchFinal] = useState([]);

    useEffect(()=>{
        handleRequest();
        handlePatch();
    }, [])

    async function handleRequest(){
        await api.get('dashboard/month').then(response => setData(response.data));
    }
    
    async function handlePatch(){
        await api.get('dashboard/patch').then(response => setDataPatch(response.data));

    }
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
                        <CardPatchInfo type={item.type} qtd={item.qtd}/>           
                    ))
                }
            </div>
        </div>
    )
}