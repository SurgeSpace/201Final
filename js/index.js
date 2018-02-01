var audio = new Audio('media/pop.mp3');

function store(){
  if (!localStorage.firstName) {
    var inputFirstName = document.getElementById('firstName');
    localStorage.setItem('firstName', inputFirstName.value);
  }
}

function pageLoad() {
  if (localStorage.firstName) {
    document.getElementById('welcome').innerHTML = 'Welcome ' + localStorage.firstName;
    hideEl();
  }
}

function hideEl() {
  document.getElementById('firstName').style.display = 'none';
  document.getElementById('fText').style.display = 'none';
  document.getElementById('button').style.display = 'none';
  document.getElementById('button2').style.visibility = 'visible';
}

setTimeout('audio.play()', 1700);
pageLoad();
