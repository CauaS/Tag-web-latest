import React from 'react';
import './styles.css';

import Chart from 'react-google-charts';

export default function ChartRequestPie(){
    return (
        <div className="container_chart">
           <Chart
                width={'100%'}
                height={'100%'}
                chartType="PieChart"
                loader={<div>Carregando gr`fico...</div>}
                data={[
                    ['Ocorrencia', 'Vezes'],
                    ['Desvalidado Analista', 3],
                    ['Desvalidado Desenvolvimento', 3],
                    ['Impedimento', 1],
                    ['Desvalidado Consultoria', 1],
                ]}
                options={{
                    title: 'Histórico de ocorrências do pedido',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
}