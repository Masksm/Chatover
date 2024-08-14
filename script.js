document.addEventListener('DOMContentLoaded', function() {
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const formInner = document.getElementById('form-inner');

    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        formInner.classList.add('show-signup');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        formInner.classList.remove('show-signup');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');
    
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const formInner = document.getElementById('form-inner');

    console.log('Elements found:', showSignup, showLogin, formInner);

    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Showing signup form');
        formInner.classList.add('show-signup');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Showing login form');
        formInner.classList.remove('show-signup');
    });
});
