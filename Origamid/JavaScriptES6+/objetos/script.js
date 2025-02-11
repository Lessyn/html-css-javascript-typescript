var pessoa = {
    nome: 'Rodrigo',
    idade: 42,
    cidade: 'Divinópolis', 
}

console.log(pessoa)

var quadrado = {
    lados: 4,
    area(lado){
        return lado * lado;
    },
    perimetro(lado){

        return this.lados * lado
    }
}

console.log(quadrado.perimetro(5))

console.log(quadrado.area(5))

var dadosPessoais = {
    nome: 'Rodrigo',
    sobrenome: 'Lessyn',
    idade: 45 ,
    cidade: 'Divinópolis'
}

dadosPessoais.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

console.log(dadosPessoais);
console.log(dadosPessoais.nome, dadosPessoais.sobrenome);


var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000;

var cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem'){
            return 'Latir'
        }
        else{
            return 'Nada'
        }

    }
}