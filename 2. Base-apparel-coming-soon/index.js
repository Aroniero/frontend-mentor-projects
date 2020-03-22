
const form = document.querySelector('.newsletter');
const email = document.querySelector('.newsletterInput')
const btn = document.querySelector('.newsletterBtn')

function addEmail(e) {


  e.preventDefault()
  console.log(email.value);
}

form.addEventListener('submit', addEmail);