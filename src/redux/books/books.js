const ADD_BOOK = 'ADD_BOOK';
const REMOVED_BOOK = 'REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload
});

export const removeBook = (payload) => ({
  type: REMOVED_BOOK,
  payload
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }

    case REMOVED_BOOK: {
      return state.filter((book) => book.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default bookReducer;
