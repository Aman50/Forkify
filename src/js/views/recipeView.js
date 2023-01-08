import icons from "url:../../img/icons.svg";
import { Fraction } from 'fraction.js';
import eventStore from '../pubSub.js';

class RecipeView {
  #parentEl = document.querySelector(".recipe");
  #data;
  #error = 'An Error occurred while fetching the recipe.';
  #message = 'Start by searching for a recipe or an ingredient. Have fun!';

  constructor() {
      ['load', 'hashchange'].forEach(ev => window.addEventListener(ev, eventStore.publish.bind(eventStore, `recipeView.${ev}`)));
  }

  render(recipe) {
    this.#data = recipe;
    const recipeEl = this.#constructHTML();
    this.clear();
    this.#parentEl.insertAdjacentHTML("afterbegin", recipeEl);
  }

  clear() {
    this.#parentEl.innerHTML = "";
  }

  renderSpinner() {
    const spinnerEl = `
            <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
            </div>
        `;
    this.clear();
    this.#parentEl.insertAdjacentHTML("afterbegin", spinnerEl);
  }

  renderMessage(message = this.#message) {
    const messageEl = `
        <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
        `;

    this.clear();
    this.#parentEl.insertAdjacentHTML("afterbegin", messageEl);
  }

  renderError(error = this.#error) {
    const errorEl = `
      <div class="error">
        <div>
            <svg>
                <use href="${icons}#icon-alert-triangle"></use>
            </svg>
        </div>
        <p>${error.status === 400 ? 'Please check the recipe ID' : error}</p>
      </div>
    `;

    this.clear();
    this.#parentEl.insertAdjacentHTML("afterbegin", errorEl);
  }

  #constructHTML() {
    return `
          <figure class="recipe__fig">
            <img src="${this.#data.imageUrl}" alt=">${
      this.#data.title
    }" class="recipe__img">
            <h1 class="recipe__title">
                <span>${this.#data.title}</span>
            </h1>
          </figure>
      
          <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${icons}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">45</span>
                <span class="recipe__info-text">minutes</span>
              </div>
              <div class="recipe__info">
                <svg class="recipe__info-icon">
                  <use href="${icons}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${
                  this.#data.servings
                }</span>
                <span class="recipe__info-text">servings</span>
                <div class="recipe__info-buttons">
                  <button class="btn--tiny btn--decrease-servings">
                    <svg>
                      <use href="${icons}#icon-minus-circle"></use>
                    </svg>
                  </button>
                  <button class="btn--tiny btn--increase-servings">
                    <svg>
                      <use href="${icons}#icon-plus-circle"></use>
                    </svg>
                  </button>
                </div>
          </div>
          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
          </div>
          <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
              ${this.#data.ingredients.map(ingredient => this.#constructIngredientHTML(ingredient)).join("")}
            </ul>
          </div>
          <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
              This recipe was carefully designed and tested by
              <span class="recipe__publisher">${
                this.#data.publisher
              }</span>. Please check out
              directions at their website.
            </p>
            <a
              class="btn--small recipe__btn"
              href="${this.#data.sourceUrl}"
              target="_blank"
            >
              <span>Directions</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
        `;
  }

  #constructIngredientHTML(ingredient) {
    return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${ingredient.quantity ? Fraction(ingredient.quantity).toFraction() : ''}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ingredient.unit}</span>
            ${ingredient.description}
          </div>
        </li>
        `;
  }
}

export default new RecipeView();
