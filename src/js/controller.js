import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import seatchResultsView from './views/searchResultsView.js';
import paginationView from './views/paginationView';

import * as model from './model.js';
import eventStore from './pubSub.js';

import "core-js/stable";
import "regenerator-runtime/runtime";

// HMR
if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async function() {
  try {
    recipeView.renderSpinner();
    
    const recipeId = window.location.hash.slice(1);
    
    // Guard clause
    if (!recipeId) {
      recipeView.renderMessage();
      return;
    };

    await model.fetchRecipe(recipeId);
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError(error);
  }
};

const controlSearch = async function() {
  try {
    const searchQuery = searchView.getQuery();

    if (!searchQuery) return searchResultsView.renderMessage();

    seatchResultsView.renderSpinner();

    await model.fetchSearchResults(searchQuery);
    seatchResultsView.render(model.getResultsForPage(1));
    paginationView.render(model.state);

  } catch(error) {
    seatchResultsView.renderError();
  }
}

const controlPaginationNewPage = function(newPageNum) {
  seatchResultsView.renderSpinner();
  seatchResultsView.render(model.getResultsForPage(newPageNum));
  paginationView.render(model.state);
}

const controlServings = function(newServingSize) {
  model.updateServings(newServingSize);

  recipeView.update(model.state.recipe);
}

const init = function() {
  ['recipeView.load', 'recipeView.hashchange'].forEach(event => eventStore.subscribe(event, controlRecipe));
  ['searchView.submit'].forEach(event => eventStore.subscribe(event, controlSearch));
  ['paginationView.click'].forEach(event => eventStore.subscribe(event, controlPaginationNewPage));
  ['servings.update'].forEach(event => eventStore.subscribe(event, controlServings));
}

init();