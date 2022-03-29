import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoryReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
