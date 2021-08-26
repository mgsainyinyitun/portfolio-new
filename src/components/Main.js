import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { WebRoute } from '../Router/WebRoute';
import Footer from './Footer/Footer';
import Home from './home/Home';
import DivideWave from './home/Wave/DivideWave';
import Navigation from './navigation/Navigation';



class Main extends React.Component{

    render(){
        return(
            <>
                <Navigation/>
                <DivideWave/>
                <Switch>
                    {WebRoute}
                </Switch>
                <Footer/>
            </>

        )

    }
}

export default Main;