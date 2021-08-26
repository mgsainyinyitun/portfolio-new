import React from 'react';
import CardCarousel from '../BasicComponents/Card/CardCarousel';
import CardGroup from '../BasicComponents/Card/CardGroup';
import WavyBackground from '../BasicComponents/WavyBackground/WavyBackground';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import Contact from './Contact/Contact';
import Projects from './Projects';
import Skills from './Skills';


class Home extends React.Component {

render(){
    return(
        <>
            <LandingPage/>
            <Projects/>
            <Skills/>
            <Contact/>
        </>
    );
 }
}

export default Home;