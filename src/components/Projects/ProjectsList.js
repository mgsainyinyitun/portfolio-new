import React from 'react';
import {web} from './constant';
import Image from'../../img/avatar.jpg';

export default function ProjectsList (){
    return(
        <>
            <div className='proj-title'>
                <h3>WEB DEVELOPMENT</h3>
            </div>
            <div className='proj-list-container'>
                {
                    web.map((project)=>{
                        return(
                            <div className='project-content'>
                                <img src={project.image} className='proj-image'/>
                                <div className='proj-info'>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <div className='btn-holder'>
                                        <a href={project.try_link} className='proj-btn'>TRY NOW</a>
                                        <a href={project.source_link} className='proj-btn'>SOURCE CODE</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}