document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon-card');

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('h2').textContent}`);
        });
    });
});
