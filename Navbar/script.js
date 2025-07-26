const container = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

const cardStyle = window.getComputedStyle(cards[0]);
const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight || 20);

next.addEventListener('click', () => {
  container.scrollLeft += cardWidth * 1; // scroll by 1 card
});

prev.addEventListener('click', () => {
  container.scrollLeft -= cardWidth * 1;
});