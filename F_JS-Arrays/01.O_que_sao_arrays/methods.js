var lista = [10, 5, 8, 9, 1, 12, 15];

let printar = lista.sort((a,b)=> a - b);

console.log('lista',lista)

//adicionar um dado na lista no final

lista.push(7)

console.log('lista',lista)

//retira o último dado da lista

lista.pop()

console.log('lista',lista)

//tamanho do array

let tamanho = lista.length
console.log('tamanho',tamanho)

//concatenar

let concatenado = lista.concat(lista)
console.log('concatenado', concatenado)


const methods = [
    'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
    'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
    'forEach', 'map', 'reduce', 'reduceRight', 'filter',
    'some', 'every', 'isArray'
]


//filter
function isBigEnough(value) {
    return value >= 10;
  }
  
var filtered = lista.filter(isBigEnough);
console.log('filtered', filtered)

//found
const found = lista.find(element => element > 10);

console.log('found', found);

//findIndex
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
console.log('findIndex -> é o index do primo: ', lista.findIndex(isPrime))

//indexOf
//Encontrar se um elemento existe ou não e atualizar o array
function atualizarColecaoVegetais (vegetais, vegetal) {
    if (vegetais.indexOf(vegetal) === -1) {
        vegetais.push(vegetal);
        console.log('Nova coleção de vegetais é : ' + vegetais);
    } else if (vegetais.indexOf(vegetal) > -1) {
        console.log(vegetal + ' já existe na coleção de vegetais.');
    }
}

var vegetais = ['batata', 'tomate', 'pimenta', 'pimentao'];

atualizarColecaoVegetais(vegetais, 'espinafre');
// Nova coleção de vegatais é : batata,tomate,pimenta,pimentao,espinafre
atualizarColecaoVegetais(vegetais, 'espinafre');
// espinafre já existe na coleção de vegetais.