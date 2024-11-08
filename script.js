if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}
const toggleThemeButton = document.getElementById('mudar-tema');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark'); 
    } else {
        localStorage.setItem('theme', 'light'); 
    }
});
