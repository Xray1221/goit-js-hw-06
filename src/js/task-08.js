const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
event.preventDefault();
const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }

  console.log({email: email.value, password: password.value});
  event.currentTarget.reset();
}

