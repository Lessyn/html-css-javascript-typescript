// // function nomeRodrigo() {
// //     console.log('Rodrigo')
// // }

// // addEventListener('click', nomeRodrigo);


// // function imc2(peso, altura){
// //     const imc = peso/ (altura ** 2);
// //     console.log(imc)
// // }

// // imc2(20, 1.8);

// var profissao = 'Developer';

// function dados() {
//     var nome = 'Rodrigo';
//     var idade = 45;
//     function outrosDados(){
//         var endereco = 'Divinópolis';
//         // var idade = 44;
//         return `${nome}, ${idade}, ${endereco}, ${profissao}`;
//     }

//     return outrosDados();
// }

// console.log(dados());

function istrue(dado){
    return !!dado;

}

function perimetroQuadrado(lado){
    return lado * 4;
}

function nomeSobrenome(nome, sobrenome){
    // return nome + ' ' + sobrenome;
    return `${nome} ${sobrenome}`
}

function numeroPar(numero){
    if (numero % 2 ===0){
        return `O número ${numero} é par`;
    }
    else{
        return `O número ${numero} é impar`;
    }    
}

function tipoDado(dado){
    return typeof dado;
}

addEventListener('click', function(){
    console.log('Rodrigo Lessyn')
} )