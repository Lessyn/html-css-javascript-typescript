// const imgs = document.querySelectorAll('img')
// console.log(imgs);

// let i=0;

// imgs.forEach(function(item, index, array){
//     console.log(item, index, array);
// })

// const imgs = document.querySelectorAll('img');
//  imgs.forEach((item)=>{
//     console.log(item);
//  })

//  const titulos = document.getElementsByClassName('titulo');
 
//  const titulosArray = Array.from(titulos);

//  titulosArray.forEach((item, index, array)=>{
//    console.log(item, index, array);
//  })

// Exercícios xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);

paragrafo.forEach((item)=>{
   console.log(item);
})

paragrafo.forEach((item)=>{
   console.log(item.innerText);
})

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
   console.log(item, index);
});

let i = 0;

imgs.forEach( ()=> {
   console.log(i++);
});

imgs.forEach(()=> i++);
console.log(i);