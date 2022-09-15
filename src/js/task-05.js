const inputRef = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};
inputRef.input.addEventListener('input', (event) => {
    let value = event.currentTarget.value.trim();
    if(value === "" ) {
        value = 'Anonymous'
    }
    inputRef.span.textContent = value;
});