const passwordInput = document.getElementById('passwordInput');
const infectionLink = document.getElementById('infectionLink');

passwordInput.addEventListener('input', function() {
    if (passwordInput.value.toLowerCase() === 'library') {
        infectionLink.style.display = 'inline';
    } else {
        infectionLink.style.display = 'none';
    }
});