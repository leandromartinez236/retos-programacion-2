const num1 = parseInt(prompt('Ingresa un numero'))
const num2 = parseInt(prompt('Ingresa un numero'))
const num3 = parseInt(prompt('Ingresa un numero'))

if(num1 === num2 && num1 === num3 && num2 === num1){
  alert((num1 + num2) * num3)
}