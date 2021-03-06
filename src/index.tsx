import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { reducer as formReducer } from "redux-form";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import App from './App';
import * as reducers from './ducks';
import * as serviceWorker from './serviceWorker';
import services from "./services";

const store = createStore(combineReducers({
    ...reducers,
    form: formReducer,
}), applyMiddleware( thunk.withExtraArgument( services ) ));

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App history={history}/>
        </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
