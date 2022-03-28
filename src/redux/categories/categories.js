const SET_CATEGORY = 'SET_CATEGORY';

const initialState = [];

export const setCategory = (payload) => {
  return {
    type: SET_CATEGORY,
    payload,
  };
};
