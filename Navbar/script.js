<<<<<<< HEAD
const mybutton = document.getElementById("backToTopBtn");  
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

=======
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
>>>>>>> a8c56f315d12658d326c9c0b0e653901b2082134
