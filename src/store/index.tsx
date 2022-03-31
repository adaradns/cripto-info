import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import rootReducer from './reducers/index';


export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;