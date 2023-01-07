export const model = {
  recipe: {}
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const submitGetRequest = async function (url, timeoutDuration) {
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
};

export const fetchRecipe = async function (recipeId) {
  try {
    const res = await submitGetRequest(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`,
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
