import React from "react";
import Chart from "react-apexcharts";

const SalesAreaChart = () => {
  const chartOptions = {
    chart: {
      type: "area",
      
    },
    series: [
      {
        name: "Quote",
        data: [20, 50, 30, 60, 40, 50, 40],
        color: "#453B85",
      },
      {
        name: "Invoice",
        data: [40, 20, 60, 15, 50, 65, 20],
        color: "#FF3A6E",
      },
      {
        name: "Sales Order",
        data: [50, 65, 50, 40, 30, 45, 60],
        color: "#3EC9D6",
      },
    ],
    xaxis: {
      categories: [
        "9 June",
        "10 June",
        "11 June",
        "12 June",
        "13 June",
        "14 June",
        "15 June",
      ],
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height={260}
      />
    </div>
  );
};

export default SalesAreaChart;
