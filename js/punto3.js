const num1 = parseInt(prompt('Ingrese un numero de 1 al 99'))

if(num1 <= 9) {
  alert('Es de un digito')
} else if(num1 > 9 && num1 <= 99) {
  alert('Es de dos digitos')
}