const notas = [10,9,8,7,6]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

//for each apenas executa o que está dentro do bloco, não retorna nada
// map retorna algo além de executar o que está dentro do bloco


console.log(notasAtualizadas)