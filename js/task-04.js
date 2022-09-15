const ButtonRef = {
increaseValue: document.querySelector('[data-action = increment]'),
decreaseValue: document.querySelector('[data-action = decrement]'),
span: document.querySelector('#value'),
}
let counterValue = 0;

ButtonRef.increaseValue.addEventListener('click', ()=> {
  counterValue +=1
  ButtonRef.span.textContent = counterValue;
})
ButtonRef.decreaseValue.addEventListener('click', ()=> {
  counterValue -=1
  ButtonRef.span.textContent = counterValue;
})


