import React from 'react';

import empty from '../../assets/animations/empty.json';
import Animated from '../Animate/index';

import './styles.css';

export default function FullRequest({ data }){
    return(
        <main>
            {
                data.length == 0
                ? <div className="animation-full-request">
                    <Animated name={empty} width={200} height={200}/>
                  </div>
                : <div className="full-request">
                    <div className="header-request">
                        <span className="request-number">{data.number}</span>
                        <span className="request-type" style={{ background: data.color }}/>
                    </div>
                    <div className="request-content">{data.description}</div>
                    <div className="request-tags"> 
                        {   
                            data.length == 0 
                            ? <span>#</span>
                            : data.tags.split(',').map(tag =>(
                                <span>{tag.trim()}</span>
                            ))
                        }
                    </div>
                    <div className="request-footer">
                        <span>{data.consultant}</span>
                        <span>{data.date}</span>
                    </div>
                </div>
            }
        </main>
    )
}