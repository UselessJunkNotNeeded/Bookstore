const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookStore/books/UPDATE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload
});

export const updateBook = (payload) => ({
  type: UPDATE_BOOK,
  payload
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }

    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    case UPDATE_BOOK: {
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return {
            ...book,
            progress: book.progress + action.payload.rand
          };
        }
        return book;
      });
    }
    default:
      return state;
  }
};

export default bookReducer;
