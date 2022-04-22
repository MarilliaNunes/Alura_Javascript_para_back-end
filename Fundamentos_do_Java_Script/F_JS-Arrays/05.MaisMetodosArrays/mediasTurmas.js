const salaJS = [7,8,5,4,9,8,7,9,8,7,10]
const salaJava = [8,7,9,8,6.5] 
const salaPython = [9,8,7,5,9,8.7,9.6]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum,actual)=> actual + acum,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum,atual)=>atual+acum,0)/notas.length
console.log(media)