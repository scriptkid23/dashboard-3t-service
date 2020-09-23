import {combineReducers} from 'redux';
import authReducer from './auth.reducer'
import {nestedCombineReducers} from 'nested-combine-reducers';

const rootReducer = nestedCombineReducers({
   auth : authReducer
},combineReducers);

export default rootReducer;

