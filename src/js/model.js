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
    const res = await helper.submitGetRequest(
      `${config.API_URL}${recipeId}`,
      10
    );
    const { recipe } = res.data;
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
    state.recipe = recipe;
  } catch (error) {
    throw error;
  }
};


export const fetchSearchResults = async function(query) {
  try {
    const res = await helper.submitGetRequest(`${config.API_URL}?search=${query}`);
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