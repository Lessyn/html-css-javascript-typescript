<<<<<<< HEAD
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(agencia, cliente, saldoInicial){ 
        super(agencia, cliente, saldoInicial);             
=======
export class ContaPoupanca{
    constructor(agencia, cliente, saldoInicial){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;       
        
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

>>>>>>> parent of cf7f472 (01.Conhecendo o problema do cliente)
    }
}