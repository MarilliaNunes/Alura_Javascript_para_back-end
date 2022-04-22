const notas = [10,4.5,8,7,4]

const nomes = ["Luan","Pedro","Caio", "Mariana", "Lígia", "Rafaela"]

const reprovados = nomes.filter( (aluno, indice) => notas[indice]<5)


console.log( `Reprovados: ${reprovados}`)