import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteAlice = new ContaCorrente();
console.log(cliente2.nome +", seu saldo é de: R$" +contaCorrenteAlice._saldo);
contaCorrenteAlice.cliente = cliente2;
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.depositar(50);
console.log(cliente2.nome +", seu novo saldo é de: R$" +contaCorrenteAlice._saldo);

const contaCorrenteRicardo = new ContaCorrente();
console.log(cliente1.nome +", seu saldo é: "+contaCorrenteRicardo._saldo)
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
console.log(cliente1.nome +", seu novo saldo é de: R$" +contaCorrenteRicardo._saldo);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(cliente1.nome +", seu novo saldo é de: R$" +contaCorrenteRicardo._saldo);
console.log(cliente2.nome +", seu novo saldo é de: R$" +contaCorrenteAlice._saldo);