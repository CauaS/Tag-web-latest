import React,  { useState, useEffect } from 'react';
import './styles.css';

import api from '../../../services/api';

import { Doughnut  } from 'react-chartjs-2';

export default function ChartRequestPie({ request }){

  const [occurrence, setOccurrence] = useState([]);

    useEffect(() => {
        handleOccurrence();
    }, []);

    async function handleOccurrence(){
        await api.post('occurrence/request', { number: request }).then(response => setOccurrence(response.data));      
    }

    const events = occurrence.map(item => item.event_description);

    if(events.length > 0){
      
      var counting = events.reduce(function(obj, item) {
        //if there's no property named == item, so it is created and applied value 1
        if(!obj[item]){
          obj[item] = 1
        }else{
        // if the property already exist, so it's value is incremented
          obj[item]++;
        }
        
        return obj;

      }, {});
      
      // taking only the property's values
      var values = Object.values(counting);
    }

    const data = {
        labels: occurrence.map(item => item.event_description),
        datasets: [
          {
            label: 'Ocorrência do pedido',
            backgroundColor: ['#FF5733', '#BD391C', '#000000', '#EEBF38', 'rgba(75,192,192,1)','gray'],
            borderColor: 'white',
            borderDash: 10,
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            //borderJoinStyle: 'miter',
            //fill: false,
            //lineTension: 0.1,
            //pointBorderColor: 'rgba(75,192,192,1)',
            //pointBackgroundColor: 'red',
            //pointBorderWidth: 10,
            //pointHoverRadius: 5,
            //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            //pointHoverBorderColor: 'rgba(220,220,220,1)',
            //pointHoverBorderWidth: 2,
            //pointRadius: 1,
            //pointHitRadius: 10,
            data: values
          }
        ]
      };

    return (
        <div className="container_chart">
           <Doughnut  data={data} />
        </div>
    );
}