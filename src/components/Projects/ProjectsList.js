import React from 'react';
import { web } from './constant';
import { connect } from 'react-redux';

function extraInfo(items) {
    return (
        <ul>
            {
                items.map((item) => {
                    return (
                        <li>
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    );

}

function ProjectsList(props) {

    const TXT =
        props.language === 'english' ? web.ENGLISH :
            props.language === 'myanmar' ? web.MYANMAR : web.JAPANESE;

    return (
        <>
            <div className='proj-title'>
                <h3>
                    {
                        props.language === 'english' || props.language === 'myanmar'
                            ? "WEB DEVELOPMENT" : "ＷＥＢ 開発"
                    }
                </h3>
            </div>
            <div className='proj-list-container'>
                {
                    TXT.map((project) => {
                        return (
                            <div className='project'>
                                <h4>{project.title}</h4>
                                <div className='project-content'>
                                    <img src={project.image} className='proj-image' />
                                    <div className='proj-info'>
                                        <p>{project.description}</p>
                                        {
                                            project.extra ?
                                                extraInfo(project.extra) : null
                                        }
                                        <div className='btn-holder'>
                                            <a target='_blank'  rel='noopener noreferrer' href={project.try_link} className='proj-btn'>TRY NOW</a>
                                            <a target='_blank'  rel='noopener noreferrer' href={project.source_link} className='proj-btn'>SOURCE CODE</a>
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

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

export default connect(mapStateToProps)(ProjectsList);