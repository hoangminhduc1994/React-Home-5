import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const PieChart = () => {
  useEffect(() => {
    const pieOptions = {
      series: [13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Balance', 'Expense', 'Credit Loan'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
    };

    const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieOptions);
    pieChart.render();

    return () => {
      pieChart.destroy();
    };
  }, []);

  return <div id="pie-chart"></div>;
};

export default PieChart;
