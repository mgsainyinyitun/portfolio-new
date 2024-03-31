import React from 'react';
import { Routes } from 'react-router-dom';
import { WebRoute } from '../Router/WebRoute';
import MailIcon from './BasicComponents/Mail/MailIcon';
import Footer from './Footer/Footer';
import DivideWave from './home/Wave/DivideWave';
import { connect } from 'react-redux'
import { changeLanguage } from '../redux/action';
import NavigationFunction from './navigation/NavigationFunction';
import IpGeolocation from './IpGeolocation';

function Main(props) {
    return (
        <>
            {/* <Navigation changeLanguage={props.changeLanguage} /> */}
            {/* <NavigationFunction changeLanguage={props.changeLanguage} /> */}
            <IpGeolocation changeLanguage={props.changeLanguage}/>
            <DivideWave />
            <Routes>
                {WebRoute}
            </Routes>
            <MailIcon />
            <Footer />
        </>
    )

}


export default connect(null, {
    changeLanguage,
})(Main);