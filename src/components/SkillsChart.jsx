import { useEffect, useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { portfolioData } from '../data';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsChart = () => {
  const config = portfolioData.radarChart;

  const chartData = {
    labels: config.labels,
    datasets: [
      {
        label: config.label,
        data: config.data,
        backgroundColor: config.colors.backgroundColor,
        borderColor: config.colors.borderColor,
        borderWidth: 2,
        pointBackgroundColor: config.colors.pointBackgroundColor,
        pointBorderColor: config.colors.pointBorderColor,
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#00ffcc',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 25,
        min: 0,
        ticks: {
          color: '#a1a1aa',
          font: {
            size: 12,
          },
        },
        pointLabels: {
          color: '#00ffcc',
          font: {
            size: 12,
            weight: 'bold',
          },
        },
        grid: {
          color: 'rgba(0, 255, 204, 0.2)',
        },
        angleLines: {
          color: 'rgba(0, 255, 204, 0.2)',
        },
      },
    },
  };

  return (
    <section className="skills_chart_section">
      <div className="chart_container">
        <h2>SKILLS FOCUS AREAS</h2>
        <div className="radar_chart_wrapper">
          <Radar data={chartData} options={chartOptions} />
        </div>
        <p className="chart_description">{config.description}</p>
      </div>
    </section>
  );
};

export default SkillsChart;


