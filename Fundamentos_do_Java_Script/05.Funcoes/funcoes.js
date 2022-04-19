// três formas de escrever funções

//Declaração de Função
function funcao(parametros = 'valor padrão'){ //podemos definir um valor padrão para o parâmetro
    const resposta = `Esses são os ${parametros}`
    return resposta
}

//Expressão de Função

const soma = function (num1, num2){return num1+num2} //funções anônimas

// Diferença entre Declaração e Expressão de função
// --> A expressão de função tem que ser declarada antes de ser chamada, pois ela se comporta com uma variavel
// --> funções declaradas e var são listadas antes da execução do arquivo

//Arrow Function
// Facilidade para tratar com objetos
// Hoisting: arrow function se comporta como expressão

const apresentarArrow = nome => `meu nome é ${nome}`

const sum = (num1,num2) => num1+num2

console.log(sum(2,4))