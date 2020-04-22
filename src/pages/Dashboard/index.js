import React from 'react';
import './styles.css';

import CardRequestInfo from './CardRequestInfo/index';

import kundenLogo from '../../assets/img/kundenLogo.png';

export default function Dashboard() {
    return (
        <div className="container-dashboard">
            <header>
                <h1>Dashboard</h1>
                <img src={kundenLogo} alt="kunden logo" />
            </header>
            <div className="line-request-infos">
                <CardRequestInfo />
                <CardRequestInfo />
                <CardRequestInfo />
                <CardRequestInfo />
                <CardRequestInfo />
                <CardRequestInfo />
            </div>
        </div>
    )
}