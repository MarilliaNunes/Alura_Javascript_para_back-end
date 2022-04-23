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

const andre = new Cliente("André", "andre@rmail.com", "12345678911", 1000)

console.log(andre)

andre.depositar(500)

andre.exibirSaldo()
andre.exibirSaldo()