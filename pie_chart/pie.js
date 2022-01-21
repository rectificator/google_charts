'use strict'


google.charts.load('current', {'packages':['corechart']})
.then(() => {

  // Ésta es la función que se utilizará para construir el gráfico
  
  drawChart(pieConfig, 'piechart');
});

/* 
@function drawChart

  @object
  @pieConfig: Recibe el objeto de configuración
              que debe contener las siguientes propiedades:
              - chartValues: Como mínimo debe contener el dominio ( X )
                            y contradominio ( f(X) ) qpara construir la gráfico.
                            La primera fila son las etiquetas para X y f(X)
              - charOptions: Objeto que contiene 
                             las opciones de estilo del gráfico
              - charType: Función de callback que crea el objeto
                          que construirá el gráfico.
  @String
  @htmlContainerId: Id del objeto HTML que contendrá el gráfico.
  */
function drawChart(config, htmlContainerId) {

  const options = config.charOptions;
  const data = google.visualization.arrayToDataTable(config.chartValues);
  
  const chart = config.charType(document.getElementById(htmlContainerId));
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
