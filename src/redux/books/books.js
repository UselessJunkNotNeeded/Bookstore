const ADD_BOOK = 'ADD_BOOK';
const REMOVED_BOOK = 'REMOVE_BOOK';

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
