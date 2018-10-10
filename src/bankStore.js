import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bankReducer from './bankReducer';

const logger = (store) => (next) => (action) => {
    console.log("Dispatching:", action);
    return next(action);
}

const bankStore = createStore(bankReducer, applyMiddleware(thunk, logger));
export default bankStore;