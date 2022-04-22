const nomes = ["Luan","Pedro","Caio", "Mariana", "Lígia", "Rafaela", "Andrei Coelho","João", "Maria", 'Pedro', 'Ana', "Isabela", "Marillia", "Bruno", "Mel"]

console.log(nomes.length)
const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)