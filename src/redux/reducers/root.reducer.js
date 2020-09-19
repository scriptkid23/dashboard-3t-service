import {combineReducers} from 'redux';
import {nestedCombineReducers} from 'nested-combine-reducers';

const rootReducer = nestedCombineReducers({
   store : {}
},combineReducers);

export default rootReducer;

