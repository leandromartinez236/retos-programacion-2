const num = prompt('Ingrese un numero')

switch (num.length) {
  case 1:
    alert('Es de un digito')
    break;
  case 2:
    alert('Es de dos digitos')
    break;
  case 3:
    alert('Es de tres digitos')
    break;
  default:
    alert('Error en el ingreso')
}

