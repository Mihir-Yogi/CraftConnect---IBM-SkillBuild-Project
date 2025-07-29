const mybutton = document.getElementById("backToTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

function topFunction() {
  const start = window.scrollY;
  const duration = 600; // 0.6s
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 to 1

    // Ease-out effect (slows down at the end)
    const easeOut = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - easeOut));

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}
