import { faFacebook, faGithub, faLinkedin, faTwitter, faUps, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

class Footer extends React.Component{


    render(){
        return(
            <>
            <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='footer'>
        
                <a className='up-btn'>
                    <FontAwesomeIcon icon={faArrowCircleUp}
                            onClick={()=>window.scrollTo(0, 0)}
                        />
                </a>
                <div className='icon-link'>
                    <a href='https://www.github.com/mgsainyinyitun'>
                        <FontAwesomeIcon icon={faGithub} className='i-icon' />
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=100005919649109\&_rdc=1&_rdr">
                        <FontAwesomeIcon icon={faFacebook} className='i-icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/sai-nyi-13356517b'>
                        <FontAwesomeIcon icon={faLinkedin} className='i-icon' />
                    </a>
                    <a href='https://twitter.com/SaiNyi69795841'>
                        <FontAwesomeIcon icon={faTwitter} className='i-icon' />
                    </a>
                    <a href='https://www.youtube.com/channel/UCyIywrOstPOwpNWgwQ5AY0A'>
                        <FontAwesomeIcon icon={faYoutube} className='i-icon' />
                    </a>
                </div>
            
                <div className='cpy-sign'>
                     <p><span>&#169;</span> SAI NYI NYI TUN</p>
                </div>
            </div>
            </>
        );

    }
}

export default Footer;

