import React from 'react';
import {Carousel} from 'antd';
import Chat from '../../img/projects/chatwithfriend.png'

import './ProjectsCarousel.css';
import GlassCard from '../BasicComponents/Card/GlassCard';

const contentStyle = {
    
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

class ProjectsCarousel extends React.Component{

    render(){
        return(
            <div className='pjt-container'>
                <Carousel autoplay>
                    <div>
                        <GlassCard
                            title = 'CHAT WITH FRIEND'
                            image={Chat}
                            content= 'Online chat web application, using React JS and Firebase'
                            link='https://web-messenger-sainyi-068390.web.app/'
                        />
                    </div>
                    <div>
                        <h3>1 2 3 4 5 6</h3>
                    </div>
                    <div>
                        <h3>1 2 3 4 5 6</h3>
                    </div>
                    <div>
                        <h3>1 2 3 4 5 6</h3>
                    </div>
                </Carousel>

            </div>
        )
    }

}   
export default ProjectsCarousel;