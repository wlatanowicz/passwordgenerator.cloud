import { ADD_PASSWORD, REMOVE_ALL_PASSWORDS } from "../actionTypes";

export const addPassword = (password) => {
  return {
    type: ADD_PASSWORD,
    payload: password,
  };
};

export const removeAllPasswords = () => {
  return {
    type: REMOVE_ALL_PASSWORDS,
  };
};
