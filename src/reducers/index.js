import { combineReducers } from 'redux';
import SomeXXXReducer from './SomeXXXReducer';

const reducers = combineReducers({
  notes: SomeXXXReducer,
});
export default reducers;
