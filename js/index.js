// document.getElementById('button').style.display = 'none';

// on form submit, store data
function store(){
  if (!localStorage.firstName) {
    var inputFirstName = document.getElementById('firstName');
    localStorage.setItem('firstName', inputFirstName.value);
   
  }
}

function hideEl() {
  document.getElementById('firstName').style.display = 'none';
  document.getElementById('fText').style.display = 'none';
}

function pageLoad() {
  if (localStorage.firstName) {
    document.getElementById('welcome').innerHTML = 'Welcome ' + localStorage.firstName;
    hideEl();
  }
}

pageLoad();
