// @ts-nocheck
// eslint-disable-next-line camelcase
import {combineReducers, compose, legacy_createStore} from 'redux';

import {serviceFormReducer} from './reducers/serviceFormReducer';
import {servicesReducer} from './reducers/servicesReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const rootReducer = combineReducers({
    services: servicesReducer,
    serviceForm: serviceFormReducer,
});

function configureStore() {
    return legacy_createStore(rootReducer, compose(ReactReduxDevTools));
}

export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

// export {store};
