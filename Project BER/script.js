document.addEventListener('DOMContentLoaded', function () {
  const buttonToConvert = document.getElementById('button-to-convert');
  const input = document.getElementById('texto');
  const results = document.getElementById('results');
  const contador = document.getElementById('contador');

  input.addEventListener('input', function () {
    const longitudTexto = input.value.length;
    const maxCaracteres = 1000;

    contador.textContent = `Máximo ${maxCaracteres - longitudTexto} caracteres restantes`;

    if (longitudTexto > maxCaracteres) {
      input.value = input.value.substring(0, maxCaracteres);
    }
  });

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