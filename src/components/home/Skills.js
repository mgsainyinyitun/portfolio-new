import React from 'react';
import SkillsProgressBar from '../BasicComponents/ProgressBar/SkillsProgressBar';
import {OTHERS, PROGRAMMING,WEB_DEVELOPMENT} from './SkillConstants';

class Skills extends React.Component{

render(){
    return(
        <div className='projects-container'>
            <div className='underline mb-5'>
                <h2 className='heading-title' >SKILLS</h2>
            </div>

            <div className='quote-holder'>
                <p className='quote'>Every skill you acquire doubles your odds of success</p>
                <div className='quote-writer'><i>" Scott Adams " </i></div>  
            </div>

            <div className='skills-container'>  
                <h3 className='sub-title'>PROGRAMMING</h3>
            </div>

            <SkillsProgressBar skills={PROGRAMMING}/>


            <div className='skills-container'>  
                <h3 className='sub-title'>WEB DEVELOPMENT</h3>
            </div>
            <SkillsProgressBar skills={WEB_DEVELOPMENT}/>


            <div className='skills-container'>  
                <h3 className='sub-title'>OTHERS</h3>
            </div>
            <SkillsProgressBar skills={OTHERS}/>
            
        </div>  
    );

    }
}

export default Skills;