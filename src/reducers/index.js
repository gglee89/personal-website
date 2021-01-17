import { combineReducers } from 'redux';

// REDUCERS
import { interfaceReducer } from './interfaceReducers';
import { marketingReducer } from './marketingReducers';

export default combineReducers({
  interface: interfaceReducer,
  marketing: marketingReducer,
});
