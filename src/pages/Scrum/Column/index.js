import React from 'react';
import './styles.css';

import HandleIcon from '../../Dashboard/HandleIcons/index';

export default function Card(){
    return (
        <div className="container-card">
            <header className="header-card">
                <div className="icons-left">
                    <div className="first-icon">
                            <HandleIcon 
                                type={'ERRO'} 
                                size={15} 
                                borderRadius={2}
                            />
                        </div>
                    <div className="second-icon">
                        <HandleIcon 
                            type={'ANALISADO'} 
                            size={15} 
                            borderRadius={2}
                        />
                    </div>
                </div>
                <span>225549</span>
                <div className="icons-right">
                    <div className="third-icon">
                        <HandleIcon 
                            type={'EXCLAMACAO'} 
                            size={15} 
                            borderRadius={2}
                        />
                    </div>
                </div>
            </header>
            <footer className="footer-card">
                <span>22/04/2020</span>
                <span>28/04/2020</span>
                <span>Roberto</span>
            </footer>
        </div>
    )
}