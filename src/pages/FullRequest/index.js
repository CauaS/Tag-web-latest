import React, { useState,l, useEffect }from 'react';

import { MdTimeline } from 'react-icons/md';
import { FaChartPie, FaRegFilePdf, FaFileDownload } from 'react-icons/fa';
import { PDFDownloadLink } from "@react-pdf/renderer";


import empty from '../../assets/animations/empty.json';
import Animated from '../Animate/index';
import ChartRequestTimeLine from '../Chart/TimeLine/index';
//import ChartRequestPie from '../Chart/Pie/index';
import ChartRequestPie from '../Chart/PieChart/index';
import PdfDocument from '../Pdf/index';

import './styles.css';

export default function FullRequest({ data }){
    const [showHistoricalTL, setShowHistoricalTL ] =  useState(false);
    const [showHistoricalPie, setShowHistoricalPie ] =  useState(false);
    const [showPDF, setShowPDF ] =  useState(false);

    useEffect(()=>{
        setShowHistoricalTL(false);
        setShowHistoricalPie(false);
        setShowPDF(false);
    }, [data])

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
                        ? showHistoricalTL ? <ChartRequestTimeLine request={data.number} /> : <ChartRequestPie request={data.number} />
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
                            <FaChartPie size={21} color="#696969" />
                        </button>
                        <button 
                            className="button-timeline"
                            onClick={() => setShowPDF(!showPDF)}
                        >
                        {
                            showPDF ? (
                                <PDFDownloadLink
                                    document={ <PdfDocument data={data}/>}
                                    fileName={`pedido_${data.number}.pdf`}
                                >
                                {({ blob, url, loading, error }) =>
                                  loading ? "Loading..." : <FaFileDownload size={21} color="#696969" />
                                }
                              </PDFDownloadLink>
                            ) : <FaRegFilePdf size={21} color="#696969" />
                        }
                        </button>
                    </div>
                </div>
            }            
        </main>
    )
}