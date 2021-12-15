// import {configureStore} from '@reduxjs/toolkit';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

// export default configureStore({
//     reducer:{},
// })

// const store = createStore(rootReducer);
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;