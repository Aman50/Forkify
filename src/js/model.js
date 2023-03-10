import * as config from './config.js';
import * as helper from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    currentPage: 1
  },
  bookmarks: []
};


export const fetchRecipe = async function (recipeId) {
  try {
    const res = await helper.AJAXRequest(
      `${config.API_URL}${recipeId}?key=${config.KEY}`
    );
    const { recipe } = res.data;
   formatRecipe(recipe);

    state.recipe = recipe;
  } catch (error) {
    throw error;
  }
};

const formatRecipe = function(recipe) {
  if (Object.keys(recipe).includes("image_url")) {
    recipe.imageUrl = recipe.image_url;
    delete recipe.image_url;
  }
  if (Object.keys(recipe).includes("source_url")) {
    recipe.sourceUrl = recipe.source_url;
    delete recipe.source_url;
  }
  if (Object.keys(recipe).includes("cooking_time")) {
    recipe.cookingTime = recipe.cooking_time;
    delete recipe.cooking_time;
  }

  if (state.bookmarks.some(bookmark => bookmark.id === recipe.id)) {
    recipe.bookmarked = true;
  } else {
    recipe.bookmarked = false;
  }
}


export const fetchSearchResults = async function(query) {
  try {
    const res = await helper.AJAXRequest(`${config.API_URL}?search=${query}&key=${config.KEY}`);
    state.search.query = query;
    state.search.results = res.data.recipes.map(result => {
      const returnVal = result;
      if (Object.keys(returnVal).includes('image_url')) {
        returnVal.imageUrl = returnVal.image_url;
        delete returnVal.image_url;
      }
      return returnVal;
    });
  } catch(error) {
    throw error;
  }
};

export const getResultsForPage = function(page = state.search.currentPage) {
  state.search.currentPage = page;
  const start = (page - 1) * config.RESULTS_PER_PAGE;
  const end = page * config.RESULTS_PER_PAGE;

  return state.search.results.slice(start, end);
}

export const updateServings = function(newServingSize) {
  const multiplyFact = newServingSize / state.recipe.servings;

  state.recipe.ingredients.forEach(ingredient => {
    if (!ingredient.quantity) return;
    ingredient.quantity = ingredient.quantity * multiplyFact;
    });

    state.recipe.servings = newServingSize;
  }

  export const toggleBookmark = function(recipe) {
    if (recipe.id === state.recipe.id) {
      // Checking if it's already bookmarked
      if (recipe.bookmarked) {
        recipe.bookmarked = false;
        const index = state.bookmarks.findIndex(bookmark => bookmark.id === recipe.id);

        if (index === -1) return;

        state.bookmarks.splice(index, 1);
      } else {
        recipe.bookmarked = true;

        state.bookmarks.push(recipe);
      }
      saveBookmarks();
    }
  }

  const saveBookmarks = function() {
    localStorage.setItem('forkifyBookmarks', JSON.stringify(state.bookmarks));
  }

  const loadBookmarks = function() {
    const bookmarks = localStorage.getItem('forkifyBookmarks');

    // Guard clause
    if (!bookmarks) return;

    state.bookmarks = JSON.parse(bookmarks);
  }

  export const uploadRecipe = async function(data) {
    try {
      if (!data) return;

      const ingredients = createIngredientArr(data);

      const dataToBeSent = {
        title: data.title,
        image_url: data.image,
        servings: data.servings,
        source_url: data.sourceUrl,
        publisher: data.publisher,
        cooking_time: data.cookingTime,
        ingredients
      };

      const response = await helper.AJAXRequest(`${config.API_URL}?key=${config.KEY}`, dataToBeSent);

      const {recipe} = response.data;
      formatRecipe(recipe);
      
      state.recipe = recipe;

      toggleBookmark(state.recipe);
    } catch (error) {

    }
  }

  const createIngredientArr = function(recipe) {
    try {
      return Object.entries(recipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1].trim() !== '')
      .map(entry => {
        const ingredient = entry[1].trim().split(',');
        if (ingredient.length !== 3)  throw new Error('Please check the format of ingredients again');
        const [quantity, unit, description] = ingredient;
        return {
          quantity: +quantity,
          unit,
          description
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const init = function() {
    loadBookmarks();
  }

  init();