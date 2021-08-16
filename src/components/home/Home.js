import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Navigation from '../navigation/Navigation';

class Home extends React.Component {

render(){
    return(
        <>
            <Navigation/>
            <LandingPage/>
        </>
    );
 }
}

export default Home;