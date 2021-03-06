import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// to enable asynchronous actions on redux store, need to apply redux-thunk middleware
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    // compose is used whenever we want to pass multiple store enhancers to the store.
    // Store enhancers are higher order functions that add some extra functionality to the store. 
    compose(
        applyMiddleware(...middleware)
    )
)

// console.log to check states in the store
// store.subscribe(() => {
//     console.log('store', store.getState());
// });
