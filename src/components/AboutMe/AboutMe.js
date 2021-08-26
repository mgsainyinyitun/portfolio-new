import React from 'react';
import UpperCard from './UpperCard';
import './AboutMe.css';
import LowerCard from './LowerCard';

class AboutMe extends React.Component{

    render(){
        return(
            <div className='about'>
                <UpperCard/>
                <LowerCard/>
            </div>
        )
    }
}

export default AboutMe;