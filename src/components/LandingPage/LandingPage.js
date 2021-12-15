import React from 'react';
import './LandingPage.css';
import cartoon from '../../img/profile-transparent.png';
import { ROUTE } from '../../Router/constant';
import 'animate.css';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { TEXT } from './LandingPageTxT';





class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            language:props.language,
        }
    }


    render() {
        var TXT = TEXT.MYANMAR;
        if(this.props.language == 'english'){
            TXT = TEXT.ENGLISH;
        }


        return(
            <section className='main-home'>
                <div className="content">
                    <h1 className='my-name animate__animated animate__bounceIn'>{TXT.NAME}</h1>
                    <p className='short'>{TXT.SHORT}</p>
                    
                    <div>
                        <img src={cartoon} alt="Avatar" class="avatar"/>
                    </div>
                    

                    <div className='btn-gp'>
                        <Link to={ROUTE.ABOUT_ME} className="btn m-1 m-btn q-btn" style={{backgroundColor:'#06111C',color:'#BB2020'}}> MORE </Link>
                        <a 
                            className="btn m-1 m-btn q-btn" 
                            style={{backgroundColor:'#06111C',color:'#BB2020'}}
                            href="#contact"
                        >CONTACT</a>
                    </div>

                    <div className='intro-txt'>
                        <p>
                            {TXT.MESSAGE.P1}
                        </p>
                        <p>
                            {TXT.MESSAGE.P2}
                        </p>
                        <p>
                            {TXT.MESSAGE.P3}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps (state) {
    return {
        language:state.language,
    }
}

export default connect(mapStateToProps)(LandingPage);