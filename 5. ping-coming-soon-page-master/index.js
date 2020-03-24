
const form = document.querySelector('.newsletterForm');

// // console.log(errIcon);


// console.log(smallTag);

function error(field, state) {
  const input = form[field];

  const smallTag = form[field].parentNode.querySelector('small');




  if (state === 'add') {
    smallTag.innerText = 'Please provide a valid email address';
    input.classList.add('emailError');
    smallTag.style.marginBottom = "20px";
  }
  if (state === 'remove') {
    smallTag.innerText = ''
    input.classList.remove('emailError')
    smallTag.style.marginBottom = "0px";
  }

}


function createAcc(e) {
  e.preventDefault()
  const email = form['email'].value;


  if (email === '') {
    error('email', 'add');
  } else {
    error('email', 'remove');
  }

}


form.addEventListener('submit', createAcc)