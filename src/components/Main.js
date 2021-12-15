import React from 'react';
import { Switch,useLocation } from 'react-router-dom';
import { WebRoute } from '../Router/WebRoute';
import MailIcon from './BasicComponents/Mail/MailIcon';
import Footer from './Footer/Footer';
import DivideWave from './home/Wave/DivideWave';
import Navigation from './navigation/Navigation';
import {connect} from 'react-redux'
import { changeLanguage } from '../redux/action';

function Main(props) {
    let location = useLocation();
       
        return(
            <>
                <Navigation changeLanguage = {props.changeLanguage} />
                <DivideWave/>
                    <Switch>
                        {WebRoute}
                    </Switch>
                <MailIcon/>
                <Footer/>
            </>
        )

    }


export default connect(null,{
    changeLanguage,
})(Main) ;