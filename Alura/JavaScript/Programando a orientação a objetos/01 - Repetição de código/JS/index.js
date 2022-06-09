class cliente{
    nome;
    CPF;
    agencia;
    saldo;
}

const cliente1 =  new cliente();
const cliente2 = new cliente();

cliente1.nome = "Ricardo";
cliente1.CPF = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.CPF = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);

