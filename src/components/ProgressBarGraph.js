import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ data }) => {
  const chartData = {
    series: [{
      data: data.map(item => item.value),
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map(item => item.label),
      },
    },
  };

  return (
    <div id="chart w-full">
      <ReactApexChart className="" options={chartData.options} series={chartData.series} type="bar" height={350} width={640} />
    </div>
  );
};

export default ApexChart;
