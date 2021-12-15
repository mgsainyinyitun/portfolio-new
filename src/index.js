import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {Router} from 'react-router-dom';
import history from "./history";
import store from './redux/store';
import {Provider} from 'react-redux';


window.store = store;

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
)
