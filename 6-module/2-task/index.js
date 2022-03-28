import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  #product = null;
  elem;

  constructor(product) {
    this.#product = product;
    this.elem = createElement(this.#cardTemplate());
    const buttonAdd = this.elem.querySelector(".card__button");
    buttonAdd.addEventListener("click", (event) => {
      const eve = new CustomEvent("product-add", {
        detail: this.#product.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true, // это событие всплывает - это понадобится в дальнейшем
      });
      console.log(eve);
      event.target.dispatchEvent(eve);
    });
  }

  #cardTemplate() {
    return `
    <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${
          this.#product.image
        }" class="card__image" alt="product">
        <span class="card__price">€${this.#product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.#product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>
`;
  }
}
