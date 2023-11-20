document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm'); // Agrega el ID al formulario
  const buttonToConvert = document.getElementById('button-to-convert');
  const buttonToClear = document.getElementById('button-to-clear'); // Agrega el ID al botón de limpieza
  const input = document.getElementById('texto');
  const results = document.getElementById('results');

  buttonToConvert.addEventListener('click', function () {
    const texto = input.value;
    const lineas = texto.split('\n'); // Dividir el texto en líneas
    const resultadoLineas = [];
  
    // Iterar sobre cada línea y aplicar el formato a las palabras
    lineas.forEach(function (linea) {
      const palabras = linea.split(' ');
      const textoFormateado = palabras
        .map(function (palabra) {
          // Marcar en negrita las dos primeras letras de cada palabra
          const palabraFormateada = `<b>${palabra.slice(0, 2)}</b>${palabra.slice(2)}`;
          return palabraFormateada;
        })
        .join(' '); // Unir las palabras formateadas de nuevo
  
      resultadoLineas.push(textoFormateado);
    });
  
    // Unir las líneas formateadas y mantener los saltos de línea
    const textoConSaltos = resultadoLineas.join('<br>');
  
    // Mostrar solo el texto formateado, manteniendo los saltos de línea
    results.innerHTML = textoConSaltos;
  });

  // Agrega un controlador de eventos para prevenir el envío del formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  // Manejar el evento de clic en el botón de limpieza
  buttonToClear.addEventListener('click', function () {
    results.innerHTML = ''; // Limpiar el contenido del contenedor
  });
});


