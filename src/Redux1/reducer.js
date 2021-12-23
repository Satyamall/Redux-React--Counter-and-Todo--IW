// state, action

import { ADD_TODO } from "./actionTypes";

const initState = {
  todo:[]
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo,payload]
      };
    default:
      return state;
  }
};

export { reducer };
