// const card = document.querySelector('.card');
// const closeCard = document.querySelector('.close');
// const container = document.querySelector('.container');
// closeCard.addEventListener('click', function(){
//   container.removeChild(card);
// });


//DOM Transversal
// const closeCard = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// const container = document.querySelector('.container');
// for(let i = 0; i < closeCard.length; i++){
//   closeCard[i].addEventListener('click', function(e){
//     //container.removeChild(card[i]); //bukan cara transversal
//     //closeCard[i].parentElement.style.display = 'none'; //.parentElement itu dom transversal
//     e.target.parentElement.style.display = 'none'; //e punya info tentang event 
//   });
// }

// closeCard.forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.target.parentElement.style.display = 'none'; //model transversal .parentElement
//     e.preventDefault();//menghentikan aksi default
//     e.stopPropagation();//untuk menghentikan event bubbling yang ada
//   });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//   card.addEventListener('click', function(e){
//     alert('ok');
//   });
// });


const container = document.querySelector('.container');
container.addEventListener('click', function(e){
  if(e.target.className == 'close'){//e.target untuk mengetahui yang kita klik
    e.target.parentElement.style.display = 'node';
    e.preventDefault();
  }
});