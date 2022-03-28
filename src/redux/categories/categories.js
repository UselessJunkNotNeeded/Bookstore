const SET_CATEGORY = 'SET_CATEGORY';

const initialState = [];

export const setCategory = (payload) => ({
  type: SET_CATEGORY,
  payload
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default categoryReducer;
