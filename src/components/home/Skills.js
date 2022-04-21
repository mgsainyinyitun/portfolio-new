import React from 'react';
import SkillsProgressBar from '../BasicComponents/ProgressBar/SkillsProgressBar';
import {TEXT,OTHERS, PROGRAMMING,WEB_DEVELOPMENT,WEB_FRAMEWORK} from './SkillConstants';
import {connect} from 'react-redux';

class Skills extends React.Component{

render(){
    const TXT = this.props.language === 'english'?TEXT.ENGLISH:TEXT.MYANMAR;

    return(
        <div className='projects-container'>
            <div className='underline mb-5'>
                <h2 className='heading-title' >SKILLS</h2>
            </div>

            <div className='quote-holder'>
                <p className='quote qs'>{TXT.S_QUOTE.MESSAGE}</p>
                <div className='quote-writer'><i>{TXT.S_QUOTE.AUTHER} </i></div>  
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
                <h3 className='sub-title'>WEB FRAMEWORK</h3>
            </div>
            <SkillsProgressBar skills={WEB_FRAMEWORK}/>


            <div className='skills-container'>  
                <h3 className='sub-title'>OTHERS</h3>
            </div>
            <SkillsProgressBar skills={OTHERS}/>
            
        </div>  
    );

    }
}

function mapStateToProps (state) {
    return {
        language:state.language,
    }
}

export default connect(mapStateToProps)(Skills) ;