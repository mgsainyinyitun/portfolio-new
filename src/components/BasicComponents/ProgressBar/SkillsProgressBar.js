import React from 'react';
import BasicProgressBar from './BasicProgressBar';
import './BasicProgressBar.css';


class SkillsProgressBar extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='all-container'>
                {
                   this.props.skills.map((value,index)=>{
                       return (
                        <div className='skills-progress-holder'>
                            <BasicProgressBar
                            name = {value.skill}
                            percent = {value.percent}
                            />
                        </div>
                       );
                   })
                }
            </div>
        );
        }
    }

export default SkillsProgressBar;