//DOM Manipulation 
//add new element 
//1. minta si js untuk bikin node baru
//2. minta si js untuk mengisi node baru tersebut dengan permintaan kita
//3. minta si js untuk menggabungkan node tersebut dengan isi yang sudah diinginkan
//document.createElement();
const newParagraph = document.createElement('p');
//document.createTextNode();
const textParagraph = document.createTextNode('belajar membuat elemen baru dengan createTextNode');
//mau merangkai elemen dengan isinya
//newParagraph.append();
newParagraph.appendChild(textParagraph);
//simpan newParagraph diakhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(newParagraph);


const newList = document.createElement('li');//buat elemen baru
const textList = document.createTextNode('item baru');//isi dari elemen
newList.appendChild(textList);//menggabungkan elemen baru dengan isinya
const ul = document.querySelector('section#b ul');//mengambil element ul yang ada di section b
const li = ul.querySelector('li:nth-child(2)');//mengambil posisi elemen berikutnya setelah di insert elemen baru

ul.insertBefore(newList, li);//newList akan dimasukkan kedalam element ul sebelum elemen li

//parentNode.removeChild();
//const sectionA = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link)

//parentNode.replaceChild();
//tangkap parent dulu
const sectionB = document.getElementById('b');
//tangkap element yang mau di replace
const p4 = sectionB.querySelector('p');
const h2new = document.createElement('h2');
const text = document.createTextNode('judul baru');
h2new.appendChild(text);
sectionB.replaceChild(h2new, p4); //(elemenbaru, elemenlama)