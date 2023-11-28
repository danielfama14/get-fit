import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

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
        type: 'category',
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ color: 'purple' }}>Workout Statistics</h2>
      <Bar data={data} options={options} />
      {/* Add more elements or customize the chart as needed */}
    </div>
  );
}

export default WorkoutStatistics;
