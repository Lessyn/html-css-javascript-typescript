import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js"; 
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
console.log(cliente1.nome +", seu saldo é: "+contaCorrenteRicardo._saldo)    

console.log(cliente1.nome +", seu novo saldo é de: R$" +contaCorrenteRicardo._saldo);

console.log("A quantidade de contas correntes são: "+Conta.numeroDeContas);
const contaPoupanca = new ContaPoupanca(1001, cliente1, 50);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);