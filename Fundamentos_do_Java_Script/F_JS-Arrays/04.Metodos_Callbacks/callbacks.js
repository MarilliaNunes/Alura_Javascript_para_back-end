const nomes = ['Ana', 'Ju', 'Leo', 'Paula']

nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
    if(nomes.includes(nome)){
        console.log(nome.toUpperCase())
    }
}
