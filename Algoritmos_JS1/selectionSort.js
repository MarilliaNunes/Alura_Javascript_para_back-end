const livros = require('./listaLivros')
const menorValor = require('./menorValor')
const troca = require('./troca')

function selectionSort(lista){
    for(let atual = 0; atual < lista.length; atual++){
        let menor = menorValor(lista, atual)

        troca(lista, atual, menor)
    }
    return lista
}
console.log(selectionSort(livros))

//utilizando ForEach

// livros.forEach((livro, indice) => {
//     let menor = menorValor(livros, indice)

//     let livroAtual = livros[indice]
//     let livroMenorPreco = livros[menor]

//     livros[indice] = livroMenorPreco
//     livros[menor] = livroAtual
// })

// console.log(livros)

//utilizando forOf

// for(let livroAtual of livros){
//     let menor = menorValor(livros, livros.indexOf(livroAtual))
    
//     let livroMenorPreco = livros[menor]
    
//     livros[livros.indexOf(livroAtual)] = livroMenorPreco
//     livros[menor] = livroAtual
// }
// console.log(livros)