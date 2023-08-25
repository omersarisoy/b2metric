"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  SubTitle,
  Tooltip,
  Filler,
} from "chart.js";
import faker from "faker";
import { Line } from "react-chartjs-2";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler,SubTitle);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align:'end',
      labels: {
        padding:10,
        boxHeight:1,
        font: {
          size: 12
        },
      }
    },
    title: {
      display: true,
      text: "Today's trends",
      position:'top',
      align: 'start',
      font: {
        size: 19,
        weight: 'bold'
      }
    },
    subtitle: {
      display: true,
      text: 'as of 25 May 2019, 09:41 PM',
      position:'top',
      align: 'start',
      font: {
        size: 12
      },
      padding: {
        bottom: 12
      }
    }
  },
  scales: {
    y: {
      display: true,
      position: 'right',
      ticks: {
        beginAtZero: true
      }
  }},
};

const labels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

export const data = {
  type: 'line',
  labels,
  datasets: [
    {
      label: "Today",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      borderColor: '#3751FF',
      fill: true,
      backgroundColor: ({chart: {ctx}}) => {
        const bg = ctx.createLinearGradient(209, 222, 249, 100);
        bg.addColorStop(0, "#c3d2f0");
        bg.addColorStop(1, "#ffff");
        return bg;
      },      
      tension: 0.5,
      pointStyle:false,
      borderWidth:2
    },
      {
      label: "Yesterday",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      fill: true,
      borderColor: '#DFE0EB',
      fill: true,
      backgroundColor: ({chart: {ctx}}) => {
        const bg = ctx.createLinearGradient(255, 255, 255, 0.00);
        bg.addColorStop(0, "#f1f2f4");
        bg.addColorStop(1, "#ffff");
        return bg;
      },      
      tension: 0.5,
      pointStyle:false,
      borderWidth:2
    },
  ],
};

export function LineCharts() {
  return <Line options={options} data={data}/>;
}
