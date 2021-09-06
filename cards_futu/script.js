const allCards = document.querySelectorAll('.card');
const professor = document.querySelector('.professor');
const body = document.querySelector('body');

function removeActive(){
    allCards.forEach(card => {
        card.classList.remove('active')
    });
};

function removeZoid(){
    allCards.forEach(card => {
        body.classList.remove('zoid')
    });
};

allCards.forEach(card => {
    card.addEventListener('click', () => {
        removeActive()
        removeZoid()
        card.classList.add('active')
    });
});

professor.addEventListener('click', () => {
    body.classList.add('zoid');
});