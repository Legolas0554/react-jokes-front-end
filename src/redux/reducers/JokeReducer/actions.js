export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_JOKE = "SET_JOKE";
export const SELECT_CATEGORY = "SELECT_CATEGORY";

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
}

export function setJoke(joke) {
  return {
    type: SET_JOKE,
    payload: joke
  };
}

export function selectCategory(category) {
  console.log(category);
  return {
    type: SELECT_CATEGORY,
    payload: category
  };
}
