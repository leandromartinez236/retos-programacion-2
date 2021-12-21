const sueldo = parseInt(prompt('Ingrese su sueldo'))
const añosAnt = parseInt(prompt('Ingrese sus años de antigüedad'))



if(sueldo < 500 && añosAnt >= 10 ){
  alert(`Sueldo a pagar: ${((sueldo * 20) / 100) + sueldo}`)
}else if(sueldo < 500 && añosAnt < 10 ){
  alert(`Sueldo a pagar: ${((sueldo * 5) / 100) + sueldo}`)
}else if(sueldo >= 500){
  alert('Sin Cambios')
}

