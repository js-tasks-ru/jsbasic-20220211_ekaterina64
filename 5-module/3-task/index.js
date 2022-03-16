function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel__slide");
  const bLeft = document.querySelector(".carousel__arrow_left");
  const bRight = document.querySelector(".carousel__arrow_right");
  let px = 0;  

  if (carousel) {
    // init visibility of buttons
    bLeft.style.display = "none";
    if (slides.length <= 1) {
      bRight.style.display = "none";
      return;
    }
    // init onClick behaviour
    bLeft.addEventListener("click", () => {
      move("+");
    });
    bRight.addEventListener("click", () => {
      move("-");
    });
  }

  function move(direction) {
    if (slides) {
      const carouselInner = document.querySelector(".carousel__inner");
      const carouselWidth = slides[0].offsetWidth;
      px = eval(`${px}${direction}${carouselWidth}`);
      carouselInner.style.transform = `translateX(${px}px)`;
      bLeft.style.display = px === 0 ? "none" : "";
      bRight.style.display =
        px === -(slides.length - 1) * carouselWidth ? "none" : "";
    }
  }
}


