var ask = true;
while(ask){
  //menangkap inputan dari user
  var p = prompt('pilih : gajah, semut, orang');
  //menangkap inputan dari komputer (random pick)
  var computer = Math.random();
  if(computer < 0.34){
    comp = 'gajah';
  }else if(computer >= 0.34 && computer < 0.67){
    comp = 'orang';
  }else{
    comp = 'semut';
  }
  //menentukan rules
  var result = "";
  if(p == comp){
    result = 'DRAW!';
  }else if(p == 'gajah'){
    if(comp == 'orang'){
      result = 'WIN!';
    }else{
      result = 'LOSE!';
    }
  }else if(p == 'orang'){
    if(comp == 'gajah'){
      result = 'LOSE!';
    }else{
      result = 'WIN!';
    }
  }else if(p == 'semut'){
    if(comp == 'gajah'){
      result = 'WIN!';
    }else{
      result = 'LOSE!';
    }
  }else{
    result = 'WRONG INPUT!';
  }
  //tampilan hasil
  alert('You Choose : ' + p + ' and Computer choose : ' + comp + '\nResult: You ' + result);
  ask = confirm('play again?');
}
alert('Thankyou for playing.');