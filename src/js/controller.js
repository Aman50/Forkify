import icons from 'url:../img/icons.svg';
import "core-js/stable";
import "regenerator-runtime/runtime";


const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const submitGetRequest = async function(url, timeoutDuration) {
  try {
    const res = await Promise.race([fetch(url), timeout(timeoutDuration)]);
    
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }


    return data;
  } catch (error) {
    throw error;
  }
}
const renderSpinner = function(parentEl) {
  const spinnerEl = `
    <div class="spinner">
      <svg>
          <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', spinnerEl);
}

const renderRecipe = function(recipeObject) {
  const recipeEl = 
  `
    <figure class="recipe__fig">
      <img src="${recipeObject.imageUrl}" alt=">${recipeObject.title}" class="recipe__img">
      <h1 class="recipe__title">
          <span>${recipeObject.title}</span>
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
          <span class="recipe__info-data recipe__info-data--people">${recipeObject.servings}</span>
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
        ${
          recipeObject.ingredients.map(ingredient => {
            if (ingredient.quantity == undefined) return '';
            const ingredientEl = 
            `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ingredient.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ingredient.unit}</span>
                ${ingredient.description}
              </div>
            </li>
            `
            return ingredientEl;
          }).join('')
        }
      </ul>
    </div>
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipeObject.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipeObject.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `;

  recipeContainer.innerHTML = '';
  recipeContainer.insertAdjacentHTML('afterbegin', recipeEl);
}

const getRecipeData = async function(recipeId) {
  try {
    renderSpinner(recipeContainer);
    const res = await submitGetRequest(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`, 2);
    let {recipe} = res.data;

    if (Object.keys(recipe).includes('image_url')) {
      recipe.imageUrl = recipe.image_url;
      delete recipe.image_url;
    }

    if (Object.keys(recipe).includes('source_url')) {
      recipe.sourceUrl = recipe.source_url;
      delete recipe.source_url;
    }

    if (Object.keys(recipe).includes('cooking_time')) {
      recipe.cookingTime = recipe.cooking_time;
      delete recipe.cooking_time;
    }

    renderRecipe(recipe);
    console.log(recipe);
  } catch (error) {
    alert(error);
  }
}

getRecipeData('5ed6604591c37cdc054bc886');