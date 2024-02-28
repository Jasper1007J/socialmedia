import { createStoreHook } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import { createStore } from 'redux';

// Check if Redux DevTools Extension is installed and enable it, otherwise use compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with rootReducer and apply middleware
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
