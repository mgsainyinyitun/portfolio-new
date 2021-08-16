import React from 'react';
import './Navigation.css';

import {faBars, faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                       <a href='#'><li>HOME</li></a>
                       <a href='#'><li>PROJECTS</li></a>
                       <a href='#'><li>ABOUT ME</li></a>
                       <a href='#'><li>RESUME</li></a>
                       <a href='#'><li>BLOGS</li></a>
                   </ul>
               </nav>
           </header>

        );
    }
}

export default Navigation;