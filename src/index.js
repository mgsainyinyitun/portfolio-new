import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {Router} from 'react-router-dom';
import history from "./history";

ReactDom.render(
    <Router history={history}>
        <App/>
    </Router>
    ,
    document.getElementById('root')
)
