const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const UPDATE_BOOK = 'bookStore/books/UPDATE_BOOK';

// const key = 'f1qf6g1CtRUPD00k0LWv';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/f1qf6g1CtRUPD00k0LWv/books`;

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload
});

export const fetchData = () => async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  Object.keys(data).forEach((key) => {
    dispatch(
      addBook({
        id: key,
        ...data[key][0],
        progress: 0
      })
    );
  });
};

export const updateBook = (payload) => ({
  type: UPDATE_BOOK,
  payload
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      console.log(action.payload);
      return [...state, action.payload];
    }

    case REMOVE_BOOK: {
      fetch(`${url}/${action.payload}`, {
        method: 'DELETE'
      });
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
