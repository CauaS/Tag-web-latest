import React,  { useState, useEffect } from 'react';
import './styles.css';

import api from '../../../services/api';

export default function ChartRequestTimeLine({request}){
    const [occurrence, setOccurrence] = useState([]);

    useEffect(() => {
        handleOccurrence();
    }, []);

    async function handleOccurrence(){
        await api.post('occurrence/request', { number: request }).then(response => setOccurrence(response.data));
    }
    return (
        <div className="container">
           <div className="timeline">
               {
                    occurrence.map((item, index) => {
                        return (index%2)
                            ?  <div className="item left" key={index}>
                                    <div className="content">
                                        <h3>{item.event_description}</h3>
                                        <p>{item.comment}</p>
                                        <div className="date">
                                            <span>{item.ocor_date}</span>
                                        </div>
                                    </div>
                                </div>
                            : <div className="item right" key={index}>
                                    <div className="content">
                                        <h3>{item.event_description}</h3>
                                        <p>{item.comment}</p>
                                        <div className="date">
                                            <span>{item.ocor_date}</span>
                                        </div>
                                    </div>
                                </div>
                   })
               }
            </div>
        </div>
    );
}