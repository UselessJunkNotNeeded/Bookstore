const SET_CATEGORY = 'bookStore/categories/SET_CATEGORY';

const initialState = [];

export const setCategory = (payload) => ({
  type: SET_CATEGORY,
  payload,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      return 'Under Construction';
    }
    default:
      return state; // EsLint error if state is not returned.
  }
};

export default categoryReducer;
