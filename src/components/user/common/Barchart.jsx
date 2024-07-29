import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        name: 'Income',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Expense',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Transfer',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef} />;
};

export default BarChart;
