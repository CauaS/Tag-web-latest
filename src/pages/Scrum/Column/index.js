import React from 'react';
import './styles.css';

import HandleIcon from '../../Dashboard/HandleIcons/index';

export default function Card({ data }){
    return data.map((item, index) => (
        <div className="container-card" key={index}>
            <header className="header-card">
                <div className="icons-left">
                    <div className="first-icon">
                            <HandleIcon 
                                type={item.type} 
                                size={15} 
                                borderRadius={2}
                            />
                        </div>
                    <div className="second-icon">
                        <HandleIcon 
                            type={item.analysed == true ? 'ANALISADO' : null } 
                            size={15} 
                            borderRadius={2}
                        />
                    </div>
                </div>
                <span>{item.number}</span>
                <div className="icons-right">
                    <div className="third-icon">
                        <HandleIcon 
                            type={item.event_description != 'Liberado' ?'EXCLAMACAO' : null} 
                            size={15} 
                            borderRadius={2}
                        />
                    </div>
                </div>
            </header>
            <footer className="footer-card">
            <span>{item.request_date}</span>
            <span>{item.ocor_date}</span>
            <span>{item.consultant}</span>
            </footer>
        </div>
    )) 
}