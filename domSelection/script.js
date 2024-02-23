// //DOM Selection 
// //document.getElementById() -> carikan id kesekian yang ada di document
// const title = document.getElementById('judul'); //return element
// title.style.color = "red";
// title.style.backgroundColor = "green";
// title.innerHTML = "Belajar DOM";

// //document.getElementByTagName()
// const p = document.getElementsByTagName('p'); //return HTMLCollection
// //p[0].style.backgroundColor = "lightblue"; 
// for(let i = 0; i < p.length; i++){
//   p[i].style.backgroundColor = "lightpink";
// }

// //document.getElementByClassName()
// const p1 = document.getElementsByClassName('p1'); //return HTMLCollection
// p1[0].style.fontFamily = "roboto";
// p1[0].style.fontSize = "100px";

//querySelector() 
// const p4 = document.querySelector('#b p');//return elemen
// p4.style.color = "red";
// p4.style.backgroundColor = "yellow";

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.backgroundColor = "grey";

// // const p = document.querySelector('p');
// // p.innerHTML = "This is querySelector()";


// //document.querySelectorAll();
// const p = document.querySelectorAll('p');//return nodelist
// for(let i = 0; i < p.length; i++){
//   p[i].innerHTML = "This is querySelector()";
// }

// const p4 = document.getElementsByTagName('p');
// p4[3].style.color = "lightpink";

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.color = "lightpink"; 