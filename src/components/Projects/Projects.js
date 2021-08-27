

import React from 'react';
import TitleBar from './TitleBar';
import './Projects.css';
import ProjectsBar from './ProjectsBar';

    export default function Projects () {
        return(
            <div className='proj-container'>
                <TitleBar/>
                <ProjectsBar/>
            </div>
        );

}