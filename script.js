document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.form-inner').classList.add('show-signup');
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.form-inner').classList.remove('show-signup');
});
