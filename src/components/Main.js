import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WebRoute } from '../Router/WebRoute';
import MailIcon from './BasicComponents/Mail/MailIcon';
import Footer from './Footer/Footer';
import DivideWave from './home/Wave/DivideWave';
import Navigation from './navigation/Navigation';
import { connect } from 'react-redux'
import { changeLanguage } from '../redux/action';
import { ROUTE } from "../Router/constant";
import Home from './home/Home';
import NavigationFunction from './navigation/NavigationFunction';

function Main(props) {
    return (
        <>
            {/* <Navigation changeLanguage={props.changeLanguage} /> */}
            <NavigationFunction changeLanguage={props.changeLanguage} />

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