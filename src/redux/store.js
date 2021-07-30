import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const rootReducer = combineReducers({ reducer });
const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
