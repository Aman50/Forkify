import recipeView from './views/recipeView.js';
import * as model from './model.js';

import "core-js/stable";
import "regenerator-runtime/runtime";


const controlRecipe = async function() {
  try {
    recipeView.renderSpinner();
    
    const recipeId = window.location.hash.slice(1);
    
    // Guard clause
    if (!recipeId) {
      recipeView.renderDefaultMessage();
      return;
    };

    await model.fetchRecipe(recipeId);
    recipeView.render(model.model.recipe);
  } catch (error) {
    console.log(error);
    recipeView.renderError();
  }
};



['load', 'hashchange'].forEach(ev => window.addEventListener(ev, controlRecipe));