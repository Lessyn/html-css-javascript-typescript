import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;
    constructor(agencia, cliente) {
        super(agencia, cliente, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
<<<<<<< HEAD
}
=======
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
        console.log("Transferência de "+valorSacado+" é realizado com sucesso");
    }
}
>>>>>>> parent of cf7f472 (01.Conhecendo o problema do cliente)
