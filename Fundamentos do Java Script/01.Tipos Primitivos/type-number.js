// tipo number

var lista = [10, 1, 5, 8, 9, 12, 15];

const printar = lista.sort((a,b)=> a - b);

//console.log(printar)

// Formatando números no JS

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return Math.round(salarioHora);
  
}

// formatando com ajuda do toFixed()
function ganhoPorHora2(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const total = salarioHora.toFixed(2);
  
    return total;
  
  };
// formatando o resultado pra Real

function ganhoPorHora3(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
  }

console.log(ganhoPorHora3(3007,176))

//arredondar pra cima
console.log(Math.ceil(11.25))
//arredondar pra Baixo 
console.log(Math.floor(11.25))
//newcomment

