import React, { useState }from 'react';
import { MdTimeline } from 'react-icons/md';

import empty from '../../assets/animations/empty.json';
import Animated from '../Animate/index';
import ChartRequest from '../Chart/index';

import './styles.css';

export default function FullRequest({ data }){
    const [showHistorical, setShowHistorical ] =  useState(false);

    return(
        <main>
            {
                data.length === 0
                ? <div className="animation-full-request">
                    <Animated name={empty} width={200} height={200}/>
                  </div>
                : <div className="full-request">
                    {
                        showHistorical
                        ? <ChartRequest  />
                        : <div>
                            <div className="header-request">
                                <span className="request-number">{data.number}</span>
                                <span className="request-type-description">{data.type}</span>  
                                <span className="request-type" style={{ background: data.color }}/>
                            </div>
                            <div className="request-content">{data.description}</div>
                            <div className="request-tags"> 
                                {   
                                    data.length === 0 
                                    ? <span>#</span>
                                    : data.tags.split(',').map((tag, index) =>(
                                        <span key={index}>{tag.trim()}</span>
                                    ))
                                }
                            </div>
                         </div>
                    }
                    
                    <div className="request-footer">
                        <span>{data.consultant}</span>
                        <span>{data.date}</span>
                        <button 
                            className="button-timeline"
                            onClick={() => setShowHistorical(!showHistorical)}
                        >
                            <MdTimeline size={28} color="#696969" />
                        </button>
                    </div>
                </div>
            }
        </main>
    )
}