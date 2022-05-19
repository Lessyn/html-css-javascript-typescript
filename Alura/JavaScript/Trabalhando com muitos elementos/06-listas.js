console.log(`Trabalhando com listas`);
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`;

//console.log(salvador, saoPaulo, rioDeJaneiro);

const listasDeDestino = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`);
listasDeDestino.push(`Belo Horizonte`); //Adicionando um item na listasDeDestino
console.log(`Destinos possíveis`);
//console.log(listasDeDestino);

listasDeDestino.splice(0,1);
console.log(listasDeDestino);