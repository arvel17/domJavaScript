function getPilihanComputer(){
  const computer = Math.random();
  if(computer < 0.34) return 'gajah';
  if(computer >= 0.34 && computer < 0.67) return 'orang';
  return 'semut';
}

function getResult(comp, player){
  if(player == comp) return 'DRAW!';
  if(player == 'gajah') return (comp == 'orang') ? 'WIN!' : 'LOSE!';
  if(player == 'orang') return (comp == 'semut') ? 'WIN!' : 'LOSE!';
  if(player == 'semut') return (comp == 'gajah') ? 'WIN!' : 'LOSE!';
}

function rollPicture(){
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const startTime = new Date().getTime();
  setInterval(function(){
    if(new Date().getTime() - startTime > 1000){
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if(i == gambar.length){
      i = 0;
    }
  }, 100);
}

let playerScore = 0;
let computerScore = 0;

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(option){
  option.addEventListener('click', function(){
      const pilihanComputer = getPilihanComputer();
      const pilihanPlayer = option.className;
      const result = getResult(pilihanComputer, pilihanPlayer); 
        
      if(result === 'WIN!'){
        playerScore++;
      }else if (result === 'LOSE!') {
        computerScore++;
      }

      rollPicture();

      setTimeout(function(){
        const imageComputer = document.querySelector('.img-komputer');
        imageComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
      
        const info = document.querySelector('.info');
        info.innerHTML = result;

        const skorPlayer = document.querySelector('.player-score');
        const skorComputer = document.querySelector('.computer-score');
        skorPlayer.textContent = playerScore;
        skorComputer.textContent = computerScore;
        
      }, 1000);
      
  });
});
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const result = getResult(pilihanComputer, pilihanPlayer); 
  
//   const imageComputer = document.querySelector('.img-komputer');
//   imageComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = result;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const result = getResult(pilihanComputer, pilihanPlayer); 
  
//   const imageComputer = document.querySelector('.img-komputer');
//   imageComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = result;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const result = getResult(pilihanComputer, pilihanPlayer); 
  
//   const imageComputer = document.querySelector('.img-komputer');
//   imageComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = result;
// });