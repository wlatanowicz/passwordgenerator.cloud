import { ADD_PASSWORD, REMOVE_ALL_PASSWORDS } from "../actionTypes";

const initialState = [];

const passwordsReducer = (state = initialState, action) => {
  if (action.type === ADD_PASSWORD) {
    state = [...state];
    state.push(action.payload);
  }
  if (action.type === REMOVE_ALL_PASSWORDS) {
    state = [];
  }
  return state;
};

export default passwordsReducer;
