const ADD_BOOK = 'ADD_BOOK';
const REMOVED_BOOK = 'REMOVE_BOOK';

const initialState = [];

const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload,
  };
};

const removeBook = (payload) => {
  return {
    type: REMOVED_BOOK,
    payload,
  };
};

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
