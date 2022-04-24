function troca(lista, analise, resposta){
    let itemAnalise = lista[analise]
    let itemTroca = lista[resposta]

    lista[analise] = itemTroca
    lista[resposta] = itemAnalise
}

module.exports = troca