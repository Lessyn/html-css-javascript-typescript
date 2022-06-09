class cliente {
    nome;
    CPF;
}

class  contaCorrente {
    agencia;
    _saldo = 500;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log("O saque de R$"+valor+ ", foi realizado com sucesso.");
            return valor;
        }
        else {
            console.log("Saldo indisponível para saque.");
        }
    }
    depositar(valor){
        if (valor <= 0 ){
            this._saldo += valor;
            console.log("Deposito realizado com sucesso. Seu novo saldo é de: R$"+this._saldo);
        }
        else{
            console.log("Por favor, deposite um valor válido!");
        }
        return(valor);
    }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.CPF = 11122233309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.CPF = 88822233309;

const contacorrente = new contaCorrente();
contacorrente.agencia = 1001;
contacorrente.depositar(500,00);
const valorSacado = contacorrente.sacar(100,00); 
//console.log("O valor sacado foi de: R$" +valorSacado);
console.log(cliente1.nome +", seu novo saldo é de: R$" +contacorrente._saldo);