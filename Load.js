const links = document.querySelectorAll('.link');
const loadingScreen = document.getElementById('loading-screen');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = event.target.dataset.href;
        loadingScreen.style.opacity = '1';
        setTimeout(() => {
            window.location.href = href;
        }, 8000);
    });
});