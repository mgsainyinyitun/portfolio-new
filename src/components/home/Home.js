import React from 'react';
import CardCarousel from '../BasicComponents/Card/CardCarousel';
import CardGroup from '../BasicComponents/Card/CardGroup';
import WavyBackground from '../BasicComponents/WavyBackground/WavyBackground';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import Navigation from '../navigation/Navigation';
import Contact from './Contact/Contact';
import Projects from './Projects';
import Skills from './Skills';
import DivideWave from './Wave/DivideWave';
import InnerWave from './Wave/InnerWave';

import SVG1 from '../../img/Wave.svg';
import SVG2 from '../../img/Wave2.svg';
import SVG3 from '../../img/Wave3.svg';

class Home extends React.Component {

render(){
    return(
        <>
            <Navigation/>
            <DivideWave />
            <LandingPage/>
            <InnerWave cpt={SVG1}/>
            <Projects/>
            <InnerWave cpt={SVG2}/>
            <Skills/>
            <InnerWave cpt={SVG3}/>
            <Contact/>
            <Footer/>
        </>
    );
 }
}

export default Home;