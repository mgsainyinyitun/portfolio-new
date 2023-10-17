import React from 'react';
import SkillsProgressBar from '../BasicComponents/ProgressBar/SkillsProgressBar';
import {TITLE,TEXT,OTHERS, PROGRAMMING,WEB_DEVELOPMENT} from './SkillConstants';
import {connect} from 'react-redux';

class Skills extends React.Component{

render(){
    const TXT = 
    this.props.language === 'english'?TEXT.ENGLISH:
    this.props.language === 'myanmar'?TEXT.MYANMAR:TEXT.JAPANESE;

    const TLT = 
    this.props.language === 'english'?TITLE.ENGLISH:
    this.props.language === 'myanmar'?TITLE.MYANMAR:TITLE.JAPANESE;

    
    return(
        <div className='projects-container'>
            <div className='underline mb-5'>
                <h2 className='heading-title' >{this.props.language==='japanese'?'スキル':'SKILLS'}</h2>
            </div>

            <div className='quote-holder'>
                <p className='quote qs'>{TXT.S_QUOTE.MESSAGE}</p>
                <div className='quote-writer'><i>{TXT.S_QUOTE.AUTHER} </i></div>  
            </div>

            <div className='skills-container'>  
                <h3 className='sub-title'>{TLT.PROGRAMMING}</h3>
            </div>

            <SkillsProgressBar skills={PROGRAMMING}/>


            <div className='skills-container'>  
                <h3 className='sub-title'>{TLT.WEB_DEV}</h3>
            </div>
            <SkillsProgressBar skills={WEB_DEVELOPMENT}/>


            <div className='skills-container'>  
                <h3 className='sub-title'>{TLT.OTHERS}</h3>
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