export class Conta {
    constructor(agencia, cliente, saldoInicial) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get saldo() {
        return this._saldo;
    }

    get cliente() {
        return this._cliente;
    }
    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log("O saque de R$" + valorSacado + ", foi realizado com sucesso.");
            return valorSacado;
        }
        else {
            console.log("Saldo indisponível para saque.");
            return 0;
        }
    }

    depositar(valor) {
        if (valor <= 0) {

            console.log("Por favor, deposite um valor válido!");
        }
        else {
            this._saldo += valor;
            console.log("Deposito realizado com sucesso! Seu novo saldo é de: R$" + this._saldo);
        }

    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log("Transferência de " + valorSacado + " é realizado com sucesso");
    }
}