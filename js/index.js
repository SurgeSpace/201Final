document.getElementById('button').style.display = 'none';

// on form submit, store data
function store(){
  var inputFirstName = document.getElementById('firstName');
  var inputLastName = document.getElementById('lastName');
  localStorage.setItem('firstName', inputFirstName.value);
  localStorage.setItem('lastName', inputLastName.value);
}

function hideEl() {
  document.getElementById('firstName').style.display = 'none';
  document.getElementById('lastName').style.display = 'none';
  document.getElementById('lText').style.display = 'none';
  document.getElementById('fText').style.display = 'none';
}

function showButton() {
  document.getElementById('button').style.display = 'inline';
}

function pageLoad() {
  if (localStorage.firstName) {
    document.getElementById('welcome').innerHTML = 'Welcome ' + localStorage.firstName + ' ' + localStorage.lastName;
    hideEl();
    showButton();
  }
}

pageLoad();