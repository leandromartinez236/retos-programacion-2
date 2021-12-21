const x = parseInt(prompt('Ingrese la coordenada x'))
const y = parseInt(prompt('Ingrese la coordenada y'))

if(x > 0 && y > 0){
  alert('1 Cuadrante')
}else if(x < 0 && y > 0){
  alert('2 Cuadrante')
}else if(x < 0 && y < 0){
  alert('3 Cuadrante')
}else if(x > 0 && y < 0){
  alert('4 Cuadrante')
}