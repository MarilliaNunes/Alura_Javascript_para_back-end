const {editoraFolha, editoraGalho} = require('./listaLivros')

function JuntaListas(lista1, lista2){
    let listaFinal = []
    let atualL1 = 0
    let atualL2 = 0
    let atualFinal = 0
    while(atualL1 < lista1.length && atualL2 < lista2.length){
        let produtoAtualL1 = lista1[atualL1]
        let produtoAtualL2 = lista2[atualL2]

        if(produtoAtualL1.preco < produtoAtualL2.preco){
            listaFinal[atualFinal] = produtoAtualL1
            atualL1++
        }else{
            listaFinal[atualFinal] = produtoAtualL2
            atualL2++
        }
        atualFinal++
    }

    while(atualL1 < lista1.length){
        listaFinal[atualFinal] = lista1[atualL1]
        atualL1++
        atualFinal++
    }
    while(atualL2 < lista2.length){
        listaFinal[atualFinal] = lista2[atualL2]
        atualL2++
        atualFinal++
    }

    return listaFinal
}

console.log(JuntaListas(editoraFolha, editoraGalho))