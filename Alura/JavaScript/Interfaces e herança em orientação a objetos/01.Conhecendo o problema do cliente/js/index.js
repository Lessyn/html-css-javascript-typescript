import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

console.log(cliente2.cpf);

const contaCorrenteAlice = new ContaCorrente(1002, cliente2);
console.log(cliente2.nome +", seu saldo é de: R$" +contaCorrenteAlice._saldo);
contaCorrenteAlice.depositar(50);
console.log(cliente2.nome +", seu novo saldo é de: R$" +contaCorrenteAlice._saldo);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
console.log(cliente1.nome +", seu saldo é: "+contaCorrenteRicardo._saldo)


contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
console.log(cliente1.nome +", seu novo saldo é de: R$" +contaCorrenteRicardo._saldo);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);

console.log(cliente1.nome +", seu novo saldo é de: R$" +contaCorrenteRicardo._saldo);
console.log(cliente2.nome +", seu novo saldo é de: R$" +contaCorrenteAlice._saldo);

console.log("A quantidade de contas correntes são: "+ContaCorrente.numeroDeContas);