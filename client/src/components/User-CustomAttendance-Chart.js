import React from "react";
import Chart from "react-apexcharts";
import { format } from "date-fns";

const LineChart = ({data}) => {
  const chartData = {
    options: {
      xaxis: {
        categories: data.map((item) =>
          format(new Date(item.Date), "dd/mm/yyyy")
        ),
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "Daily Hours",
        },
      },
    },
    series: [
      {
        name: "Hours",
        data: data.map((item) => item.Hours),
      },
    ],
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={300}
    />
  );
};

export default LineChart;
