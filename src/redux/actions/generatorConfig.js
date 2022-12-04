import { UPDATE_GENERATOR_CONFIG } from "../actionTypes";

export const updateGeneratorConfig = (property, value) => {
  return {
    type: UPDATE_GENERATOR_CONFIG,
    payload: {
      property,
      value,
    },
  };
};
