const showBtn = document.querySelector('.show');
const passwdInput = document.querySelector('#passwd');

showBtn.addEventListener('click', () => {
    if (passwdInput.type === 'password') {
        passwdInput.type = 'text';
    } else if (passwdInput.type === 'text') {
        passwdInput.type = 'password';
    }
});