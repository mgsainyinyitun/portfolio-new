import React from 'react';
import './LandingPage.css';
import cartoon from '../../img/profile-transparent.png';
import { ROUTE } from '../../Router/constant';
import 'animate.css';
import { Link } from 'react-router-dom';


class LandingPage extends React.Component {

    render() {
        return(
            <section className='main-home'>
                <div className="content">
                    <h1 className='my-name animate__animated animate__bounceIn'>SAI NYI NYI TUN</h1>
                    <p className='short'>THE ODYSSEY OF A SOFTWARE AND FULL-STACK WEB DEVELOPER.</p>
                    
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
                            Welcome to my portfolio
                        </p>
                        <p>
                            I am graduated from Technological University Mandalay
                            with Electronics background. I am now doing software 
                            development and also web development.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default LandingPage;