import React from 'react';
import UpperCard from './UpperCard';
import './AboutMe.css';
import LowerCard from './LowerCard';
import {connect} from 'react-redux';
import { paragraphs } from './About';


class AboutMe extends React.Component{

    render(){

         var TXT = paragraphs.MYANMAR;
        if(this.props.language == 'english'){
             TXT = paragraphs.ENGLISH;
         }


        return(
            <div className='about'>
                <UpperCard language = {this.props.language}/>

                <LowerCard 
                    language = {this.props.language}
                    paragraphs = {TXT}
                />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        language:state.language,
    }
}

export default connect(mapStateToProps) (AboutMe);