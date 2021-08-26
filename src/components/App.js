import React from 'react';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import {Switch} from 'react-router-dom';
import Main from './Main';

class App extends React.Component {
    render(){
        return( 
            <Main/>
        )
    }
}

export default App;