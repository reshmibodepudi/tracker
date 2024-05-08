// JavaScript code for drawing the progress chart
const ctx = document.getElementById('progress-chart').getContext('2d');

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Stress Level',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#36a2eb',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 2
    },
    {
      label: 'Sleep Quality',
      data: [45, 67, 72, 68, 78, 80, 75],
      borderColor: '#ff6384',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2
    },
    {
      label: 'Activity Level',
      data: [20, 30, 40, 35, 45, 50, 55],
      borderColor: '#ffcd56',
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderWidth: 2
    },
  ],
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontColor: '#555',
      },
      gridLines: {
        color: '#ddd',
      }
    }],
    xAxes: [{
      ticks: {
        fontColor: '#555',
      },
      gridLines: {
        color: '#ddd',
      }
    }]
  }
};

const progressChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});