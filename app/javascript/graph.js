import Chart from 'chart.js';

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [50, 20, 30, 40, 50, 60],
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    options: {
        showLines: true, // disable for all datasets
    }
});



export { myChart };
