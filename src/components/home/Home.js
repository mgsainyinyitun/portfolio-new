import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Contact from './Contact/Contact';
import Projects from './Projects';
import Skills from './Skills';


class Home extends React.Component {

constructor(props){
    super(props);
    this.state = {
        language:props.language,
    }
}
componentDidUpdate(){
    console.log('update',this.state.language);
}


render(){
    console.log("current language is:",this.props.language);
    return(
        <>
            <LandingPage />
            <div className='bottom-margin-d'></div>
            <Projects/>
            <div className='bottom-margin-d'></div>
            <Skills/>
            <div className='bottom-margin-d'></div>
            <Contact/>
        </>
    );
 }
}


export default Home;



