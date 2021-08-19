import React from 'react';
import './LandingPage.css';
import avatar from '../../img/avatar.jpg';
import cartoon from '../../img/Cartoonify.png';
import 'animate.css';


class LandingPage extends React.Component {

    render() {
        return(
            <section className='main-home'>
                <div className="content">
                    <h1 className='my-name animate__animated animate__bounceIn'>SAI NYI NYI TUN</h1>
                    <p>THE ODYSSEY OF A SOFTWARE AND FULL-STACK WEB DEVELOPER.</p>
                    
                    <div>
                        <img src={cartoon} alt="Avatar" class="avatar"/>
                    </div>
                    

                    <div className='btn-gp'>
                        <button className="btn m-1 m-btn" style={{backgroundColor:'#06111C',color:'#BB2020'}}> MORE </button>
                        <button className="btn m-1 m-btn" style={{backgroundColor:'#06111C',color:'#BB2020'}}>RESUME</button>
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