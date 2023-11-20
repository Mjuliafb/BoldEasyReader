document.addEventListener('DOMContentLoaded', function () {
  const buttonToConvert = document.getElementById('button-to-convert');
  const input = document.getElementById('texto');
  const results = document.getElementById('results');

  buttonToConvert.addEventListener('click', function () {
    const texto = input.value;
    const palabras = texto.split(' ');

    const textoFormateado = palabras
      .map(function (palabra) {
        return `<b>${palabra.slice(0, 2)}</b>${palabra.slice(2)}`;
      })
      .join(' ');

    results.innerHTML = textoFormateado;
  });
});
