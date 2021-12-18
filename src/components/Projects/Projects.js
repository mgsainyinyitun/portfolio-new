

import React from 'react';
import TitleBar from './TitleBar';
import './Projects.css';
import ProjectsBar from './ProjectsBar';

import { connect } from 'react-redux';

     function Projects (props) {
        return(
            <div className='proj-container'>
                <TitleBar language = {props.language}/>
                <ProjectsBar/>
            </div>
        );

}
const mapStateToProps = state => {
    return {
        language:state.language,
    }
}

export default connect(mapStateToProps)(Projects);