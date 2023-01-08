fetch("https://my.api.mockaroo.com/cars.json?key=fd4d4030").then((data) => {
    return data.json();
}).then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td>${values.id}</td>
        <td>${values.car_make}</td>
        <td>${values.car_model}</td>
        <td>${values.year}</td>
        <td>${values.country}</td>
        <td>${values.amount_sold}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
});


fetch('https://my.api.mockaroo.com/cars.json?key=fd4d4030')
    .then(response => response.json())
    .then(data => {
        const labels = data.map(car => car.car_make);
        const values = data.map(car => car.amount_sold);

        const ctx = document.getElementById('barChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Units Sold',
                    data: values,
                    backgroundColor: '#3e95cd',
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'white'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: 'white'
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });
    });



fetch('https://my.api.mockaroo.com/cars.json?key=fd4d4030')
    .then(response => response.json())
    .then(data => {
        const labels = data.slice(0, 5).map(car => car.country);
        const values = data.slice(0, 5).map(car => car.amount_sold);

        const ctx = document.getElementById('pieChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: [
                        '#3e95cd',
                        '#8e5ea2',
                        '#3cba9f',
                        '#e8c3b9',
                        '#c45850'
                    ]
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });
    });


fetch('https://my.api.mockaroo.com/cars.json?key=fd4d4030')
    .then(response => response.json())
    .then(data => {
        const labels = data.map(car => car.year);
        const values = data.map(car => car.amount_sold);

        const ctx = document.getElementById('lineChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Price',
                    data: values,
                    borderColor: '#3e95cd',
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: 'white'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: 'white'
                        }
                    }]
                },
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                }
            }
        });
    });