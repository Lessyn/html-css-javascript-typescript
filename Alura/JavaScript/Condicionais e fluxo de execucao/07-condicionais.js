console.log(`Trabalhando com condicionais`);


const listasDeDestino = new Array(`Salvador`, ` São Paulo`, ` Rio de Janeiro`, ` Curitiba.`);
const idadeIdeal = 18;
const acompanhada = 17;
const idadeComprador = 17;

if (idadeComprador < idadeIdeal && acompanhada < idadeIdeal) {
    //listasDeDestino.splice(1, 1); //removendo um item de uma lista
    console.log("Não é possível vender passagens para menor de " + idadeIdeal + " anos!");
}
else {
    if
        (acompanhada == idadeIdeal && idadeComprador < idadeIdeal) {
        console.log("Acompanhada por uma pessoa maior de idade e destinos possíveis são: " + listasDeDestino);
    }

    else {
        console.log("Destinos possíveis são: " + listasDeDestino);
    }
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);