import React from 'react';
import './styles.css';

import { Doughnut  } from 'react-chartjs-2';

export default function ChartRequestPie(){
    const data = {
        labels: ['Desvalidado Analista', 'Desvalidado Desenvolvimento', 'Impedimento', 'Desvalidado Consultoria', 'Validado Consultoria'],
        datasets: [
          {
            label: 'Ocorrência do pedido',
            backgroundColor: ['#FF5733', '#BD391C', '#000000', '#EEBF38', 'rgba(75,192,192,1)'],
            borderColor: 'white',
            borderDash: 10,
            borderCapStyle: 'butt',
            borderDash: [],
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
            data: [3,3,1,1, 1]
          }
        ]
      };

    return (
        <div className="container_chart">
           <Doughnut  data={data} />
        </div>
    );
}