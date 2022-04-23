const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12345679811',
    email: 'andre@email.com',
    fones: [ '55987453265', '55985621021' ],
    dependentes: [
      {
        nome: 'Sarah Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
      },
      {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '04/01/2014'
      }
    ],
    saldo : 100,
    depositar:function(valor){
        this.saldo += valor
    },
    retirar:function(valor){
        this.saldo -= valor
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de serguro de vida para ${obj.nome}`)
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)