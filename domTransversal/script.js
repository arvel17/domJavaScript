// const card = document.querySelector('.card');
// const closeCard = document.querySelector('.close');
// const container = document.querySelector('.container');
// closeCard.addEventListener('click', function(){
//   container.removeChild(card);
// });


//DOM Transversal
const closeCard = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');
const container = document.querySelector('.container');
// for(let i = 0; i < closeCard.length; i++){
//   closeCard[i].addEventListener('click', function(e){
//     //container.removeChild(card[i]); //bukan cara transversal
//     //closeCard[i].parentElement.style.display = 'none'; //.parentElement itu dom transversal
//     e.target.parentElement.style.display = 'none'; //e punya info tentang event 
//   });
// }

closeCard.forEach(function(el){
  el.addEventListener('click', function(e){
    e.target.parentElement.style.display = 'none';
  });
});