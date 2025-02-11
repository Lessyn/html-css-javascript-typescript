var games = ['PS4', 'Xbox', 'Nitendo', '3DS'];

// for (var numero = 0; numero <= 10; numero++){

//     console.log(numero);
// }

// var i = 0;

// while (i < 10){
//     console.log(i);
//     i++;
// }

// for (i = 0; i < games.length; i++){
//     // console.log(games[i]);
//     if (games[i] === 'Nitendo'){
//         break;
//     }
//     console.log(games[i]);
// }

// games.forEach(function(item, index) {
//     console.log(item, index)

// })

// Exercícios.

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

brasilCampeao.forEach(function(ano){
    console.log(`O brasil ganhou a copa de ${ano}`)
})

var frutas = ['Banana', 'Maça', 'Pêra', 'Uva', 'Melância'];

for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if (frutas[i] === 'Pêra'){
        break;
        }        
}

var ultimaFruta = frutas[frutas.length - 1];