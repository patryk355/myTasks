const inputs = document.querySelectorAll('input');
// const placeholders = document.querySelectorAll('input').placeholder;

inputs.forEach(input => input.addEventListener('focus', (e) => {
    // e.target.style.backgroundColor = 'red';
    // const email = document.querySelector('#email').placeholder;
    // email.style.color = 'white';
    // placeholders.forEach(placeholder => placeholders.style.color = 'white');
    e.target.classList.add('focused');
}));

inputs.forEach(input => input.addEventListener('blur', (e) => {
    //     e.target.style.backgroundColor = '';
    e.target.classList.remove('focused');
}));

