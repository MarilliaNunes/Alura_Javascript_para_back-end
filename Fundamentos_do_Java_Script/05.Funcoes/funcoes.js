// três formas de escrever funções

//Declaração de Função
function funcao(parametros = 'valor padrão'){ //podemos definir um valor padrão para o parâmetro
    const resposta = `Esses são os ${parametros}`
    return resposta
}

console.log(funcao('resposta'))