import { Cliente } from "./Cliente.js";

export class ContaCorrente {

   static numeroDeContas = 0;   
   
    get saldo(){
        return this._saldo;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }        
    }

    get cliente(){
        return this._cliente;
    }

    constructor(cliente, agencia){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log("O saque de R$" + valor + ", foi realizado com sucesso.");
            return valor;
        }
        else {
            console.log("Saldo indisponível para saque.");
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
        console.log("Transferência de "+valorSacado+" é realizado com sucesso");
    }
}