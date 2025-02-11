// const img = document.querySelector('img');
// console.log(img);

// function callback(){
//    console.log('Clicou');
// }
// img.addEventListener('click', callback);

// function callback(event){
//    console.log( event.key)
// }

// window.addEventListener('keydown', callback)

// Exercícios-----------------------------------------------------------

const linksInternos = document.querySelectorAll('a[href^="#"]')
console.log(linksInternos)

function addclass(event){
   event.preventDefault();
   linksInternos.forEach((links)=>{
      links.classList.remove('ativo');
   })
   event.currentTarget.classList.add('ativo')
   console.log(event);
}

linksInternos.forEach((link)=>{
link.addEventListener('click', addclass)
})

const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event){
//    console.log(event.currentTarget);
//    event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) =>{
//    elemento.addEventListener('click', handleElemento);
// })

function handleClick(event){
   console.log(event.key);
   if (event.key === 't'){
      document.documentElement.classList.toggle('aumentarFonte')
      console.log('Clicou T');
   }
}

window.addEventListener('keydown', handleClick);

