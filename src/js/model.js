import * as config from './config.js';
import * as helper from './helpers.js';

export const model = {
  recipe: {},
  search: [],
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
    model.recipe = recipe;
  } catch (error) {
    throw error;
  }
};
