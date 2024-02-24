const buttonBG = document.getElementById('buttonChangeBG');
buttonBG.addEventListener('click', function(){
  document.body.style.backgroundColor = 'yellow';
  //document.body.setAttribute('class', 'biru-muda');
  //document.body.classList.toggle('kuning');
});

const buttonRandomBG = document.createElement('button');
const textButton = document.createTextNode('Random BG Color'); 
buttonRandomBG.appendChild(textButton);
buttonRandomBG.setAttribute('type', 'button');
buttonBG.after(buttonRandomBG);
buttonRandomBG.addEventListener('click', function(){
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sliderMerah = document.querySelector('input[name=sMerah]');//carikan input yang memiliki nama sMerah
sliderMerah.addEventListener('input', function(){
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b +')';
});

const sliderHijau = document.querySelector('input[name=sHijau]');//carikan input yang memiliki nama sMerah
sliderHijau.addEventListener('input', function(){
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b +')';
});

const sliderBiru = document.querySelector('input[name=sBiru]');//carikan input yang memiliki nama sMerah
sliderBiru.addEventListener('input', function(){
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b +')';
});

//mau bikin tracking mouse
document.body.addEventListener('mousemove', function(event){
  //posisi mouse cari koordinat
  //event.clientX
  //event.clientY
  //ukuran browser
  //window.innerWidht => lebar dari document

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 90)';
});








