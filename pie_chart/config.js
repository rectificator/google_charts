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
    // https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options
    charOptions: {
            // Opciones de las acotaciones
            legend: {
                // Alineación 'start', 'center', 'end', 'automatic'
                alignment: 'start',
                // posición 'bottom','labeled', 'left', 'none', 'right', 'top'
                position: 'top',
                // Maximo de líneas de las acotaciones *#
                maxLines: 3,
                // Estilo del texto
                textStyle: {
                    // Color de fuente
                    color: 'blue',
                    // Tipo de fuente
                    fontName: 'Arial',
                    // Tamaño de fuente
                    fontSize: 16,
                    bold: true,
                    italic: true
                }
            },
            // Título general del gráfico
            title:'My Big Pie Chart',
            titleTextStyle: {
                color: '#FF0fAF',
                fontName: 'Courier',
                fontSize: 28,
                bold: true,
                italic: false
                    },
            // Modo 3D
            is3D: false,
            // Orificio en el centro *
            pieHole: 0.4,
            // Anchura total
            width:900,
            // Altura total
            height:500,
            // Colores del gráfico
            colors: ['#e0440e', '#11113f', '#aaee00', '#ff0055', '#f6c7b6'],
            // Estilo del texto de la rebanada
            pieSliceTextStyle: {
                // Color de fuente
                color: 'white',
                // Tipo de fuente
                fontName: 'Arial',
                // Tamaño de fuente
                fontSize: 18,
                bold: true,
                italic: true
              },
            // Rotación del gráfico **
            pieStartAngle: 100,
            // Tipó de estiqueta del slice ***
            pieSliceText: 'label',
            // Tipo de mensaje emergente de la rebanada
            tooltip: {
                ignoreBounds: true,
                isHtml: false,
                textStyle: {
                    // Color de fuente
                    color: 'green',
                    // Tipo de fuente
                    fontName: 'Arial',
                    // Tamaño de fuente
                    fontSize: 18,
                    bold: true,
                    italic: true
                  },
                // Indica la interacción que el usuario
                // debe realizar para activar los tooltips *##
                trigger: 'focus',
            },
            // Propiedades de las reabandas
            slices: {
                0: { 
                    // Color de la rebanada
                    color: 'yellow',
                    // Separa las rebanadas del centro
                    offset: 0.1,
                    // Estilio del texto en la rebanada
                    // Sobre escribe el pieSliceTextStyle global
                    textStyle: {
                        // Color de fuente
                        color: 'blue',
                        // Tipo de fuente
                        fontName: 'Arial',
                        // Tamaño de fuente
                        fontSize: 20,
                        bold: true,
                        italic: false
                    }

                },
                // Transparent se utiliza para esconder rebanadas
                1: { color: 'transparent' }
            },
            // Color de los bordes de las rebanadas
            pieSliceBorderColor: '#DDDD18',
            // Umbral de visibilidad de la rebanada ****
            sliceVisibilityThreshold: 0.1,
            // Color de la rebanada creada al aplicar un umbral de visibilidad
            pieResidueSliceColor: "blue",
            // Etiqueta de la rebanada creada al aplicar un umbral de visibilidad
            pieResidueSliceLabel: 'Otros',
            // Color del area principal del gráfico
            backgroundColor: {
                // Color interior
                fill: '#03C0CC',
                // Color de borde
                stroke: '#D0D0D0',
                // Anchura del borde
                strokeWidth: 6
            },
            // Área de la gráfica
            chartArea: {
                // Color del area de la gráfica *****
                backgroundColor: {
                    // Color de borde
                    stroke: '#06AF30',
                    // Anchura del borde
                    strokeWidth: 3
                },
                // Alineación de la gráfica
                left: '20%',
                top: '15%',
                // Ancho y alto de la gráfica
                width: '50%',
                height: '70%',
            },
            // Enciende y apaga la interacción con el gráfico
            interactivity: true,
            // Muestra las categorias en el sentido contrario al del reloj
            reverseCategories: true
            

            // * NO funciona si está activado el Modo 3D
            // ** Rota la línea recta inicial del
            //    primer elemento gráfico que por default apunta hacia arriba
            // *** puede tomar los valores:
            /* 
                'percentage' - El porcentaje del tamaño total que ocupa en la gráfica.
                'value' - El valor cuantitativo de la reabanda.
                'label' - El nombre de la rebanada.
                'none' - Ningún texto.
            */
            // **** CUalquier rebanada más pequeña que el valor del umbral
            // será combinada en una única rebanada con el nombre de "Other",
            // y tendrá el valor combinado de todas las rebanadas por debajo del umbral
            // Se considera partiendo que 1 es
            // el tamaño completo del gráfico, así
            // 0.2 es el 20% del tamaño completo del gráfico
            // si se utiliza se perderán las configuraciones de
            // posicionamiento individual de las rebanadas
            // ***** Se puede utilizar un color hexadecimal o en texto en inglés,
            // o un objeto con las propiedades stroke: #hex y strokeWidth: Number
            // *# Solo funciona cuando el atributo position tiene el valor de 'top'
            /* *##  'focus' - The tooltip will be displayed when the user hovers over the element.
                    'none' - The tooltip will not be displayed.
                    'selection' - The tooltip will be displayed when the user selects the element. */
          },
    charType: (htmlElement) => new google.visualization.PieChart(htmlElement),
    
};