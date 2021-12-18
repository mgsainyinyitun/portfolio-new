import React from 'react';
import {web} from './constant';
import {connect} from 'react-redux';
import Item from 'antd/lib/list/Item';


function extraInfo (items) {
    console.log(items);
    return(
        <ul>
            {
                items.map((item) => {
                    return(
                        <li>
                        {item}
                        </li>
                    )
                })
            }  
        </ul>
    );

}

 function ProjectsList (props){

    const TXT =  props.language === 'english'? web.ENGLISH:web.MYANMAR;

    return(
        <>
            <div className='proj-title'>
                <h3>WEB DEVELOPMENT</h3>
            </div>
            <div className='proj-list-container'>
                {
                    TXT.map((project)=>{
                        return(
                            <div className='project'>
                                <h4>{project.title}</h4>
                                <div className='project-content'>
                                    <img src={project.image} className='proj-image'/>
                                    <div className='proj-info'>
                                        <p>{project.description}</p>
                                        {
                                            project.extra?
                                            extraInfo(project.extra):null
                              
                                        }
                                        <div className='btn-holder'>
                                            <a href={project.try_link} className='proj-btn'>TRY NOW</a>
                                            <a href={project.source_link} className='proj-btn'>SOURCE CODE</a>
                                        </div>
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

const mapStateToProps = state =>{
    return {
        language:state.language
    } 
}

export default connect(mapStateToProps)(ProjectsList);