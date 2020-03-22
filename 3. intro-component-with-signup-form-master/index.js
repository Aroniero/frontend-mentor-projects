
const form = document.querySelector('.box');
// const name = document.querySelector()


// console.log(errIcon);


function error(field, state) {
  const input = form[field]

  const smallTag = form[field].parentNode.querySelector('small');
  const errIcon = form[field].parentNode.querySelector('.errIcon');


  if (state === 'add') {
    input.classList.add('error')
    smallTag.style.opacity = 1;
    errIcon.style.opacity = 1;
  }
  if (state === 'remove') {
    input.classList.remove('error')
    smallTag.style.opacity = 0;
    errIcon.style.opacity = 0;
  }

}


function createAcc(e) {
  e.preventDefault()
  const name = form['firstname'].value;
  const lastname = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;


  if (name === '') {
    error('firstname', 'add');
  } else {
    error('firstname', 'remove')
  }

  if (lastname === '') {
    error('lastname', 'add');
  } else {
    error('lastname', 'remove')
  }
  if (password === '') {
    error('password', 'add');
  } else {
    error('password', 'remove');
  }
  if (email === '') {
    error('email', 'add');
  } else {
    error('email', 'remove');
  }


  console.log(name, lastname, email, password);
}


form.addEventListener('submit', createAcc)