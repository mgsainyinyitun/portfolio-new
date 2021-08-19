import React from 'react';
import './GlassCard.css';
import cartoon from '../../../img/avatar.jpg';
import avatar from '../../../img/Cartoonify.png';
import dark from '../../../img/dark_.jpg';
class GlassCard extends React.Component{

constructor(props){
    super(props);
    this.state = {
        title:props.title || 'No Title',
        content:props.content || 'No Content',
        link:props.link || '#',
    };
}    


render(){
        return(
            <div className='c_container m-1'>
                <div className='c_card'>
                    <div className='title'>
                        <h2>{this.state.title}</h2>
                        <img src={dark} alt="Avatar" className="c-avatar "/>
                    </div>
                    
                    <div className='c_content'>
                            <p>{this.state.content}</p>
                        <a href={this.state.link}>MORE</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GlassCard;