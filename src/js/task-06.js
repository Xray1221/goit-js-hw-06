document.getElementById("validation-input").addEventListener('blur', (event) =>{
    const validlength = +event.target.dataset['length'];
    if(event.target.value.length === validlength) {
        event.target.classList.add('valid')
        event.target.classList.remove('invalid')
    }else {
        event.target.classList.remove('valid')
        event.target.classList.add('invalid')
    }
  })