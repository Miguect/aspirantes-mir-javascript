let input = document.querySelector('#texto');
let resultado = document.querySelector('#resultado');
let btn = document.querySelector('#btn');
let palindromo = document.querySelector('#palindromo');



btn.addEventListener('click', function(){
    let text = input.value.toUpperCase();
    resultado.textContent = text;
});

function validarPalindromo() {
  let palabra = document.querySelector('#texto').value;
  let palabraInvertida = invertirPalabra(palabra);

  if (palabra === palabraInvertida) {
    palindromo.textContent= `La palabra ${palabra} es palíndroma`;
  } else {
    palindromo.textContent= `La palabra ${palabra} no es palíndroma`;
  }
}

function invertirPalabra(palabra) {
  let palabraInvertida = '';
  for(let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida += palabra[i];
  }
  return palabraInvertida;
}

