let accionCalcular = document.getElementById('calcular');
let accionLimpiar = document.getElementById('limpiar');
let inputNumero1 = document.getElementById('numero1');

accionLimpiar.addEventListener('click', function () {
  inputNumero1.value = '';
});

accionCalcular.addEventListener('click', function (e) {
  e.preventDefault();
  let tabla = document.querySelector('.tablas');
  let numero = Number(inputNumero1.value);
  for (let i = 1; i <= 10; i++) {
    let crearElemento = document.createElement('div');
    crearElemento.classList.add('fila');
    crearElemento.innerHTML = `${numero} x ${i} = ${numero * i}`;
    tabla.appendChild(crearElemento);
  }
});
