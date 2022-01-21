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
    // https://developers.google.com/chart/interactive/docs/gallery/scatterchart#configuration-options
    charOptions: {
      width: 800,
      height: 500,
      chart: {
        title: 'Students\' Final Grades',
        subtitle: 'based on hours studied'
      },
      hAxis: {title: 'Hours Studied'},
      vAxis: {title: 'Grade'}
    },
    charType: (htmlElement) => new google.visualization.ScatterChart(htmlElement),
    
};