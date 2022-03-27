import createElement from "../../assets/lib/create-element.js";
import ProductCard from "./slide.js";

export default class Carousel {
  elem = null;
  #slides = null;
  #bLeft = null;
  #bRight = null;
  #carouselInner = null;
  #px = 0;

  constructor(slides) {
    this.elem = createElement(this.#templateCarousel());
    this.#carouselInner = this.elem.querySelector(".carousel__inner");

    slides.forEach((slide) => {
      let productSlide = new ProductCard(slide);
      this.#carouselInner.appendChild(productSlide.elem);
    });
    this.#initCarouselButtons();
  }

  #initCarouselButtons() {
    
    this.#slides = this.elem.querySelectorAll(".carousel__slide");
    this.#bLeft = this.elem.querySelector(".carousel__arrow_left");
    this.#bRight = this.elem.querySelector(".carousel__arrow_right");
    
    //if (carousel) {
    // init visibility of buttons
    this.#bLeft.style.display = "none";
    if (this.#slides.length <= 1) {
      this.#bRight.style.display = "none";
      return;
    }
    // init onClick behaviour
    this.#bLeft.addEventListener("click", () => {
      move("+", this);
    });
    this.#bRight.addEventListener("click", () => {
      move("-", this);
    });
    //}

    function move(direction, classLnk) {
      console.log(classLnk.#px);
      if (classLnk.#slides) {
        const carouselWidth = classLnk.#slides[0].offsetWidth;
        
        console.log(classLnk.elem);
        classLnk.#px = eval(`${classLnk.#px}${direction}${carouselWidth}`);
        classLnk.#carouselInner.style.transform = `translateX(${classLnk.#px}px)`;
        classLnk.#bLeft.style.display = classLnk.#px === 0 ? "none" : "";
        classLnk.#bRight.style.display =
          classLnk.#px === -(classLnk.#slides.length - 1) * carouselWidth
            ? "none"
            : "";
      }
      console.log(classLnk.#px);
    }
  }

  #templateCarousel() {
    return `<!--Корневой элемент карусели-->
    <div class="carousel">
      <!--Кнопки переключения-->
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner"/>
    </div>`;
  }
}
