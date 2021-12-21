const fecha = prompt('Ingrese el año, mes y dia')

const fechaconvertida = new Date(fecha);

if(fechaconvertida.getDate() === 24 && fechaconvertida.getMonth() === 11) {
  alert('Feliz Navidad!')
} else {
  alert('Triste')
}