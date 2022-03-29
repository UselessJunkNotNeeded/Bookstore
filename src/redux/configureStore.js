import { createStore, combineReducer } from 'react-redux';

import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducer({
  bookReducer,
  categoryReducer
});

const store = createStore(reducer);

export default store;
