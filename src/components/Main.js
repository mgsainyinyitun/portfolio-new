import React from 'react';
import { Switch,useLocation } from 'react-router-dom';
import { WebRoute } from '../Router/WebRoute';
import Footer from './Footer/Footer';
import DivideWave from './home/Wave/DivideWave';
import Navigation from './navigation/Navigation';

function Main() {
    let location = useLocation();
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


export default Main;