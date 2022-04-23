const clientes = [
    {
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
        }]
    },
    {
        nome: 'Raissa Soudes',
        idade: 25,
        cpf: '12365479811',
        email: 'raissa@email.com',
        fones: [ '55982353265', '55985612021' ],
        dependentes:[
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }]
    }
]
// operador de espalhamento ... 
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)

