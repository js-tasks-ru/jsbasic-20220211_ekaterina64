import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  #product = null;
  elem;

  constructor(product) {
    this.#product = product;
    this.elem = createElement(this.#slideTemplate());
    const buttonAdd = this.elem.querySelector(".carousel__button");
    buttonAdd.addEventListener("click", (event) => {
      const eve = new CustomEvent("product-add", {
        detail: this.#product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true, // это событие всплывает
      });
      console.log(eve);
      event.target.dispatchEvent(eve);
    });
  }

  #slideTemplate() {
    return `<div class="carousel__slide" data-id="${this.#product.id}">
    <img src="/assets/images/carousel/${
      this.#product.image
    }" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${this.#product.price.toFixed(2)}</span>
      <div class="carousel__title">${this.#product.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>`;
  }
}
