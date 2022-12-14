import { UPDATE_GENERATOR_CONFIG } from "../actionTypes";

const initialState = {
  count: 4,
  length: 16,
  useLowerCaseLetters: true,
  useUpperCaseLetters: true,
  useDigits: true,
  useSpecials: false,
};

const generatorConfigReducer = (state = initialState, action) => {
  if (action.type === UPDATE_GENERATOR_CONFIG) {
    state = { ...state };
    state[action.payload.property] = action.payload.value;
  }
  return state;
};

export default generatorConfigReducer;
