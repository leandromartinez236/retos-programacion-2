const num1 = parseInt(prompt('Ingrese la primera nota'))
const num2 = parseInt(prompt('Ingrese la segunda nota'))
const num3 = parseInt(prompt('Ingrese la tercer nota'))

const resultado = (num1 + num2 + num3) / 3

if(resultado >= 7) {
  alert('Promocionado')
}