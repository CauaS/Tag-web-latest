import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import api from '../../services/api';
import kundenLogo from '../../assets/img/kundenLogo.png'
import FullRequest from '../FullRequest/index';
import empty_li from '../../assets/animations/empty_li.json';
import Animated from '../Animate/index';

import './styles.css';
import '../../global.css';


export default function Search() {

  const [request, setRequest] = useState('');
  const [tag, setTag] = useState('');
  const [requests,  setRequests] = useState([]);
  const [requestPressed,  setRequestPressed] = useState([]);

  async function handleRequestTag(){
     if(request === '' && tag !== ''){
      await api.post('tags/in', { tags: tag }).then(response => setRequests(response.data));
    }else if(request !== '' && tag === ''){
      await api.post('request/number', { number: request }).then(response => setRequests(response.data));
    }else if((request && tag ) === ''){
      await api.get('request').then(response => setRequests(response.data));
    }
  }
  
  return (
    <div className="search-container">
      <header className="header-search">
        <img src={kundenLogo} alt="logo kunden" width="150" height="65"/>        
        <div className="header-searching">          
          <input
            id="inputRequest" 
            type="number" 
            placeholder="Pedido..."
            value={request}
            onChange={e => setRequest(e.target.value)}
          />
          <input
            id="inputTag"  
            type="text" 
            placeholder="Tag..."
            value={tag}
            onChange={e => setTag(e.target.value)}
          />
        </div>
          <div 
            className="button-search"
            onClick={handleRequestTag}
          >
            <AiOutlineSearch size={32} color="#000" />
          </div>
      </header>
    <div className="container-info">
      <section className="section-request">
        <ul>
          {
            requests.length === 0
            ? <Animated name={empty_li} width={700} height={300}/>
            :requests.map(item => (
              <li 
                key={item.id}
                onClick={() => setRequestPressed(item)}
              >
                <div className="header-request">
                  <span className="request-number">{item.number}</span> 
                  <span className="request-type-description">{item.type}</span>                 
                  <span className="request-type" style={{ background: item.color}}/>
                </div>
                <div className="request-content">{item.description}</div>
                <div className="request-tags">
                  {
                    item.tags.split(',').map(tag =>(
                      <span>{tag.trim()}</span>
                    ))
                  }             
                </div>
                <div className="request-footer">
                  <span>{item.consultant}</span>
                  <span>{item.date}</span>
                </div>
              </li>
          ))}
        </ul>
      </section>
      <FullRequest data={requestPressed}/>
    </div>
    </div>
  );
}
