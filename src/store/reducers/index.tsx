import { combineReducers } from 'redux';

import { exchangeInfoReducer } from './exchangeinfo';

export default combineReducers({
    exchangeInfo : exchangeInfoReducer,
});

