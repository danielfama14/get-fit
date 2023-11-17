// WorkoutStatistics.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Add this import to use the latest version of Chart.js

function WorkoutStatistics() {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Workout Duration (minutes)',
        data: [30, 45, 60, 20, 50, 40, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Use the 'category' scale for the X-axis
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Workout Statistics</h2>
      <Bar data={data} options={options} />
      {/* You can customize the chart based on your needs */}
    </div>
  );
}

export default WorkoutStatistics;
