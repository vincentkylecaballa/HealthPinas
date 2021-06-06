function casesChart() {
    new Chart(document.getElementById("cases-chart"), {
        type: 'line',
        data: {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                borderColor: "#3e95cd",

            }]
        },
        options: {
            title: {
                display: true,
                text: 'Total Daily COVID-19 Cases in the Philippines'
            }
        }
    });
}