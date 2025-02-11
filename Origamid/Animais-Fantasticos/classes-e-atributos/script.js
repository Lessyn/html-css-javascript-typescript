// const menu = document.querySelector('.menu');
// console.log(menu);

// menu.classList.add('ativo');
// menu.classList.remove('azul');
// menu.classList.toggle('azul');

// Exercíciosxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item)=>{
   item.classList.add('ativo');
})

itensMenu.forEach((item)=>{
   item.classList.remove('ativo');
})

itensMenu[0].classList.add('ativo');

const imgs = document.querySelectorAll('img');

imgs.forEach((img)=>{
   const possuiAtributo = img.hasAttribute('alt');
   console.log(possuiAtributo);
})

const link = document.querySelector('a[href^="http"]');

link.setAttribute('href','https://www.google.com.br/?hl=pt-BR')

console.log(link);





