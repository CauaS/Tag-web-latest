import React, { useState }from 'react';
import { MdTimeline } from 'react-icons/md';
import { FaChartPie } from 'react-icons/fa'

import empty from '../../assets/animations/empty.json';
import Animated from '../Animate/index';
import ChartRequestTimeLine from '../Chart/TimeLine/index';
import ChartRequestPie from '../Chart/Pie/index';

import './styles.css';

export default function FullRequest({ data }){
    const [showHistoricalTL, setShowHistoricalTL ] =  useState(false);
    const [showHistoricalPie, setShowHistoricalPie ] =  useState(false);

    return(
        <main>
            {
                data.length === 0
                ? <div className="animation-full-request">
                    <Animated name={empty} width={200} height={200}/>
                  </div>
                : <div className="full-request">
                    {
                        showHistoricalTL || showHistoricalPie
                        ? showHistoricalTL ? <ChartRequestTimeLine /> : <ChartRequestPie />
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
                            onClick={() => { return setShowHistoricalTL(!showHistoricalTL), setShowHistoricalPie(false) }}
                        >
                            <MdTimeline size={28} color="#696969" />
                        </button>
                        <button 
                            className="button-timeline"
                            onClick={() => { return setShowHistoricalPie(!showHistoricalPie), setShowHistoricalTL(false) }}
                        >
                            <FaChartPie size={22} color="#696969" />
                        </button>
                    </div>
                </div>
            }
        </main>
    )
}