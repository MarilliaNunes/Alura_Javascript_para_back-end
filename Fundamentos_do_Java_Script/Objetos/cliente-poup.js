class Cliente{
    constructor (nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super (nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const andre = new ClientePoupanca("Andre", "a@email.com", "12345678933", 1000, 2500)

console.log(andre)

andre.depositar(500)
andre.depositarPoup(600)