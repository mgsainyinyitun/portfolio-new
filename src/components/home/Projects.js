import React from 'react';
import './Home.css';
import CardCarousel from '../BasicComponents/Card/CardCarousel';

class Projects extends React.Component{
    render(){
        return(
        <div className='projects-container'>
            <div className='underline'>
                <h2 className='heading-title' >PROJECTS SELECTION</h2>
            </div>
            <CardCarousel/>
        </div>  
        )
    }

}

export default Projects;