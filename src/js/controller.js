import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import seatchResultsView from './views/searchResultsView.js';
import paginationView from './views/paginationView';
import BookmarksView from './views/bookmarksView.js';

import * as model from './model.js';
import eventStore from './pubSub.js';

import "core-js/stable";
import "regenerator-runtime/runtime";
import bookmarksView from './views/bookmarksView.js';

// HMR
// if (module.hot) {
//   module.hot.accept();
// }

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

    // If search results, then highlight the active one, else don't render anything
    seatchResultsView.update(model.getResultsForPage());

    //Updating active item in Bookmarks view
    bookmarksView.update(model.state.bookmarks);
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


const controlBookmark = function(recipe) {
  // 1) Toggling bookmark on the recipe
  model.toggleBookmark(recipe);

  // 2) Updating the recipe view
  recipeView.update(model.state.recipe);

  // 3) Updating the bookmarks view
  BookmarksView.render(model.state.bookmarks);
}

const init = function() {
  ['recipeView.load', 'recipeView.hashchange'].forEach(event => eventStore.subscribe(event, controlRecipe));
  ['searchView.submit'].forEach(event => eventStore.subscribe(event, controlSearch));
  ['paginationView.click'].forEach(event => eventStore.subscribe(event, controlPaginationNewPage));
  ['servings.update'].forEach(event => eventStore.subscribe(event, controlServings));
  ['bookmark.click'].forEach(event => eventStore.subscribe(event, controlBookmark));
}

init();