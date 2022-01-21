'use strict'
const pieConfig = {
    chartValues: [
        ['Title', 'Value'],
        ['Perro', 8],
        ['Pahvo', 9],
        ['Pollo', 12],
        ['Cosa', 32],
        ['Algo', 20]

    ],
    // Puedes encontrar todas las opciones de configuración disponibles en:
    // https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options
    charOptions: {
        title: 'Chess opening moves',
        width: 900,
        legend: { position: 'none' },
        chart: { title: 'Chess opening moves',
                 subtitle: 'popularity by percentage' },
        bars: 'horizontal', // Required for Material Bar Charts.
        axes: {
          x: {
            0: { side: 'top', label: 'Percentage'} // Top x-axis.
          }
        },
        bar: { groupWidth: "90%" }
      },
    charType: (htmlElement) => new google.visualization.BarChart(htmlElement),
    
};