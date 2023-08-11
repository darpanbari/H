import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const [series, setSeries] = useState([20, 45, 35]);
  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    colors: ['#3CBF23', '#E73080', '#3324D5'], 
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    labels: ['New Installation', 'Support', 'Bug'],
  });

  return (
    <div id="chart" className='d-flex justify-content-center' style={{ width: '100%', height: '100%' }}>
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default PieChart;
