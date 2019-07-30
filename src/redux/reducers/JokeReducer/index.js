import { combineReducers } from "redux";

import { SET_CATEGORIES, SET_JOKE, SELECT_CATEGORY } from "./actions";

function jokes(state = {}, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case SET_JOKE:
      return {
        ...state,
        joke: action.payload
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload
      };

    default:
      return state;
  }
}

export default combineReducers({
  jokes
});
