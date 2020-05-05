import React, { useEffect, useState } from 'react';
import './styles.css';

import CardRequestInfo from './CardRequestInfo/index';
import CardPatchInfo from './CardPatchInfo/index';

import api from '../../services/api';

import kundenLogo from '../../assets/img/kundenLogo.png';

export default function Dashboard() {
    const date = new Date();
	const DAY = date.getDate() < 10 ? `0${date.getDate()}`: date.getDate() ;
	const MONTH = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
	const PREV_MONTH = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const YEAR = date.getFullYear();
    
    const [data, setData] = useState([]);
    const [dataPatch, setDataPatch] = useState([]);

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
            <span className="date-rage">01/{PREV_MONTH}/{YEAR} - {DAY}/{MONTH}/{YEAR}</span>
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
                        <CardPatchInfo rate={item.rate} qtd={item.qtd} type={item.type}/>           
                    ))
                }
            </div>
        </div>
    )
}