// REDUX SETUP
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const initialState = {};
const middleware = [reduxThunk];

export default createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
