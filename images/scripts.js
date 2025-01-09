const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        alert(`You clicked on Project ${index + 1}`);
    });
});