import { createStore } from "redux";

import reducer from "./reducers/JokeReducer/index";

export default function setupStore(initialState) {
  const store = createStore(reducer, initialState);

  return store;
}
