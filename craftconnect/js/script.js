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
  const duration = 600;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const easeOut = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - easeOut));

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}


//pagination 

document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 8;
    const products = Array.from(document.querySelectorAll(".card-container .card-link"));
    const pagination = document.getElementById("pagination");
    const productCount = document.getElementById("product-count");
    let currentPage = 1;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    function updateProductCount(start, end) {
        const showing = products.slice(start, end).filter(p => p.style.display !== "none").length;
        productCount.textContent = `Showing ${showing} Product${showing !== 1 ? 's' : ''}`;
    }

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        products.forEach((product, index) => {
            product.style.display = (index >= start && index < end) ? "block" : "none";
        });

        updateProductCount(start, end);
        updatePagination(page);
    }

    function updatePagination(page) {
        pagination.innerHTML = "";

        const prev = document.createElement("li");
        prev.className = `page-item ${page === 1 ? "disabled" : ""}`;
        prev.innerHTML = `<a class="page-link" href="#">« Prev</a>`;
        prev.addEventListener("click", (e) => {
            e.preventDefault();
            if (page > 1) showPage(page - 1);
        });
        pagination.appendChild(prev);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.className = `page-item ${i === page ? "active" : ""}`;
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener("click", (e) => {
                e.preventDefault();
                showPage(i);
            });
            pagination.appendChild(li);
        }

        const next = document.createElement("li");
        next.className = `page-item ${page === totalPages ? "disabled" : ""}`;
        next.innerHTML = `<a class="page-link" href="#">Next »</a>`;
        next.addEventListener("click", (e) => {
            e.preventDefault();
            if (page < totalPages) showPage(page + 1);
        });
        pagination.appendChild(next);
    }

    showPage(currentPage);
});
