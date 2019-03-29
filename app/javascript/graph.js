import Chart from 'chart.js';

const money = [4, 8, 4, 5, 6]
var gente = gon.persons;
console.log(gente);
console.log(gente[0].name);

let peopleNames = gente.map(x => x.name);
console.log(peopleNames);

let peopleMoney = gente.map(x => x.money);
console.log(peopleMoney);

var data = {
  labels: peopleNames,
  datasets: [{
    label: "People's Money",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: peopleMoney,
  }]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
});


export { myChart };
