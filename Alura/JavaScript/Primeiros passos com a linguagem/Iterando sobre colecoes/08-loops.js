console.log("\n Trabalhando com condicionais");

const listasDeDestino = new Array("Salvador ", "São Paulo ", "Rio de Janeiro ", "Curitiba.");

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "BH ";

console.log("\n Destinos possíveis:");
console.log(listasDeDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let cont = 0;
let destinoExiste = false;
while (cont < 4) {

    if (listasDeDestino[cont] == destino) {
        destinoExiste = true;
        break;
    }
    cont += 1;
}
console.log("Destino existe: " + destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!")
}
else {
    console.log("Infelizmente não será possível realizar a compra.")
}

for (let i = 0; i < 4; i++) {
    if (listasDeDestino[i] == destino) {
        destinoExiste = true;
        break;
    }
}