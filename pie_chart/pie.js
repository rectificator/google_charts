'use strict'


google.charts.load('current', {'packages':['corechart']})
.then(() => {
  drawChart(pieConfig);
});

function drawChart(config) {

  const options = config.charOptions;
  const data = google.visualization.arrayToDataTable(config.chartValues);
  
  const chart = config.charType(document.getElementById('piechart'));
  chart.draw(data, options);

  // Al Presionar el slice presionado
  google.visualization.events.addListener(chart, 'click', clickHandler);

  
  // El select handler. Llama al método getSelection() de la gráfica
  /* function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var value = data.getValue(selectedItem.row, selectedItem.column);
      alert('The user selected ' + value);
    }
  } */

  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      var value = data.getValue(selectedItem.row, 1);
      alert('The user selected ' + topping + ' with value ' + value);
    }
  }

  // Escuchando el evento 'select', 
  google.visualization.events.addListener(chart, 'select', selectHandler);
  
}

function clickHandler(e) {
  //alert('The user is navigating to page ' + e['targetID']);
}
