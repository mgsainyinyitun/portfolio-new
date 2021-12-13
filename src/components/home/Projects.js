import React from 'react';
import './Home.css';
import CardCarousel from '../BasicComponents/Card/CardCarousel';
import ProjectsCarousel from '../ProjectsCarousel/ProjectsCarousel';

class Projects extends React.Component{
    render(){
        return(
        <div className='projects-container'>
            <div className='underline mb-5'>
                <h2 className='heading-title' >PROJECTS SELECTION</h2>
            </div>
            <div className='quote-holder'>
                <p className='quote'>Every project is an opportunity to learn, to figure out problems and challenges, 
                    to invent and reinvent</p>
                <div className='quote-writer'><i>" David Rockwell " </i></div>  
            </div>
            <CardCarousel/>
            {/*<ProjectsCarousel/>*/}
        </div>  
        )
    }

}

export default Projects;