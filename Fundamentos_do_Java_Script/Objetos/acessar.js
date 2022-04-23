const cliente = {
    nome: "André",
    idade: 36,
    cpf: "12345679811",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])
console.log(cliente["idade"])

chaves.forEach(info => console.log(cliente[info]))