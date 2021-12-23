// action creator
// it is a function
// which returns an object
// that defines the action
// an action is an object with a key called type,
// to define what type of action it is

import { ADD_TODO} from "./actionTypes";

// payload, etc
const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};

export { addTodo};
