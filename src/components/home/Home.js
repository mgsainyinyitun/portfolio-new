import React from 'react';
import CardCarousel from '../BasicComponents/Card/CardCarousel';
import CardGroup from '../BasicComponents/Card/CardGroup';
import WavyBackground from '../BasicComponents/WavyBackground/WavyBackground';
import LandingPage from '../LandingPage/LandingPage';
import Navigation from '../navigation/Navigation';

class Home extends React.Component {

render(){
    return(
        <>
            <Navigation/>
            <LandingPage/>
            <CardCarousel/>
            <WavyBackground/>
        </>
    );
 }
}

export default Home;