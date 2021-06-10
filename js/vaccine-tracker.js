function vaccineChart() {
    var ctx = document.getElementById('vaccine-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pfizer', 'Novavax', 'Moderna', 'Johnson & Johnson', 'Gamaleya', 'Sinovac', 'AstraZeneca'],
            datasets: [{
                label: 'Through COVAX Facility',
                data: [2393050, 0, 0, 0, 0, 0, 2556000],
                backgroundColor: '#3d5af1'
            }, {
                label: 'Donated',
                data: [0, 0, 0, 0, 0, 1000000, 0],
                backgroundColor: '#0e153a'
            }, {
                label: 'Procured',
                data: [0, 0, 0, 0, 80000, 6500000, 0],
                backgroundColor: '#e2f3f5'
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true,
                    stacked: true
                }
            }
        }
    });
}