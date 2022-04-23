const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12345679811',
    email: 'andre@email.com',
    fones: [ '55987453265', '55985621021' ],
    dependentes: [{ 
        nome: 'Sarah Silva', 
        parentesco: 'filha', 
        dataNasc: '20/03/2011' }]
  }

  cliente.dependentes.push({
      nome: "Samia Maria",
      parentesco: "filha",
      dataNasc: "04/01/2014"
  })

  console.log(cliente)

  const filhaNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

  console.log(filhaNova[0].nome)