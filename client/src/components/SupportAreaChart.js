import React from 'react';
import Chart from 'react-apexcharts';

const SupportAreaChart = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 350,
    },
    series: [
      {
        name: 'Tickets',
        data: [40, 20, 60, 20,30, 66, 20, 40, 20, 60, 15, 50],
      },
    ],
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#FFBA56'],
  };

  return (
    <div>
      <Chart options={chartOptions} series={chartOptions.series} type="area" height={160} />
    </div>
  );
};

export default SupportAreaChart;
