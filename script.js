const display = document.getElementById('display');
const buttons = document.querySelectorAll('button')

buttons.fotEach(btn => {
  btn.addEventListener('click', () => handleInput(btn.innerText));
});

function handleInput(value) {
    if (value === 'C')
