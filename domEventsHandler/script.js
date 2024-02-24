// const p3 = document.querySelector('.p3');

// function changeColorP3(){
//   p3.style.backgroundColor = "lightpink";
// }

// function changeColorP2(){
//   p2.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = changeColorP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//   const ul = document.querySelector('section#b ul');
//   const li = document.createElement('li');
//   const textLi = document.createTextNode('item baru');
//   li.appendChild(textLi);
//   ul.appendChild(li);
// }); //(event, function)




// p3.onclick = function(){
//   p3.style.backgroundColor = 'lightblue';
// };

// p3.onclick = function(){
//   p3.style.color = 'lightgreen';
// }

const p3 = document.querySelector('.p3');
p3.addEventListener('click', function(){
  p3.style.backgroundColor = 'lightgreen';
});

p3.addEventListener('click', function(){
  p3.style.color = 'red';
});