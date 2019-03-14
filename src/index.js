import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {Provider} from "unistore/react";
import {store} from "./store"
import AppRouter from "./AppRouter"
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

const rootEl = document.getElementById('root');
const render = Component =>
    ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Component/>
        </BrowserRouter>
    </Provider>,
    rootEl
    );
render(AppRouter);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
