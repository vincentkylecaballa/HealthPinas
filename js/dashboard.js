function casesChart() {
    new Chart(document.getElementById("cases-chart"), {
        type: 'line',
        data: {
            labels: ['14 Mar 2020', '16 Apr 2020', '21 May 2020', '15 Jun 2020', '19 Jul 2020',
                '14 Aug 2020', '17 Sep 2020', '23 Oct 2020', '24 Nov 2020', '13 Dec 2020', '6 Jan 2021',
                '21 Feb 2021', '22 Mar 2021', '15 Apr 2021', '10 May 2021', '11 Jun 2021'
            ],
            datasets: [{
                label: 'New Cases',
                data: [47, 207, 213, 490, 2152, 6134, 3355, 1911, 1108, 1069, 1044, 1881, 7998, 11405, 6836, 6662],
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