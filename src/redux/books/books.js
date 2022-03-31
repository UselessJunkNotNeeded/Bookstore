const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookStore/books/UPDATE_BOOK';

const key = 'f1qf6g1CtRUPD00k0LWv';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/:${key}/books`;

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
  console.log(action.payload);
  switch (action.type) {
    case ADD_BOOK: {
      // fetch(url, {
      //   method: 'POST',
      //   headers: { 'Content-type': 'application/json; charset=UTF-8' },
      //   body: JSON.stringify({
      //     item_id: action.payload.id,
      //     title: action.payload.title,
      //     author: action.payload.author,
      //     category: action.payload.category
      //   })
      // });
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
