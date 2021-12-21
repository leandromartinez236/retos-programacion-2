const preguntas = parseInt(prompt('Cantidad de preguntas'))
const rtacorrectas = parseInt (prompt('Preguntas acertadas'))
const resultado = (rtacorrectas * 100) / preguntas

if(resultado >= 90) alert('Nivel Maximo')

if(resultado >= 75 && resultado < 90) alert('Nivel Medio')

if(resultado >= 50 && resultado < 75) alert('Nivel Regular')

if(resultado < 50) alert('Fuera de nivel')



