import React from 'react';
import './Navigation.css';

import {faBars, faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { ROUTE } from '../../Router/constant';

class Navigation extends React.Component {

    render(){
        return(
           <header className='sticky'>
               <figure className='brand'>
                   <FontAwesomeIcon icon={faHome} className='red home-icon'/>
               </figure>
               <nav className="menu">
                   <input type='checkbox' id='menuToggle'/>
                   <label htmlFor='menuToggle' className='menu-icon'><FontAwesomeIcon icon={faBars} className='red'/></label>
                    <ul>
                        <Link to={ROUTE.HOME}><li>HOME</li></Link>
                        <Link to={ROUTE.PROJECTS}><li>PROJECTS</li></Link>
                        <Link to={ROUTE.ABOUT_ME}><li>ABOUT ME</li></Link>
                        <Link to={ROUTE.RESUME}><li>RESUME</li></Link>
                        <Link to={ROUTE.BLOG}><li>BLOGS</li></Link>
                    </ul>
               </nav>
           </header>

        );
    }
}

export default Navigation;