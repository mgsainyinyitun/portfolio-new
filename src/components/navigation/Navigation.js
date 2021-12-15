import React from 'react';
import './Navigation.css';
import {connect} from 'react-redux';


import {faBars, faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { ROUTE } from '../../Router/constant';


class Navigation extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const curR = window.location.pathname;
        return(
           <header className='sticky'>
               <figure className='brand'>
                   <Link to={ROUTE.HOME}>
                    <FontAwesomeIcon icon={faHome} className='red home-icon'/>
                   </Link>
               </figure>
               <nav className="menu">
                   <input type='checkbox' id='menuToggle'/>
                   <label htmlFor='menuToggle' className='menu-icon'><FontAwesomeIcon icon={faBars} className='red'/></label>
                    <ul>
                        <Link to={ROUTE.HOME}>
                            <li>
                                <span className={curR===ROUTE.HOME?'active':null}>
                                    HOME
                                </span>
                            </li>
                        </Link>

                        <Link to={ROUTE.PROJECTS}>
                            <li>
                                <span className={curR===ROUTE.PROJECTS?"active":null}>
                                    PROJECTS
                                </span>
                            </li>
                        </Link>

                        <Link to={ROUTE.ABOUT_ME}>
                            <li>
                                <span className={curR===ROUTE.ABOUT_ME?"active":null}>
                                
                                        ABOUT ME
                                    
                                </span>
                            </li>
                        </Link>
                        <Link to={ROUTE.RESUME}>
                            <li>
                                <span className={curR===ROUTE.RESUME?"active":null}>
                                        RESUME
                                </span>
                            </li>
                        </Link>
                        
                        
                            <li>
                                <select className='lang-select'
                                    defaultValue={'english'}
                                    onChange={
                                        e => this.props.changeLanguage(e.target.value) 
                                    }
                                >
                                    <option value="english">English</option>
                                    <option value="myanmar">Myanmar</option>

                                </select>
                            </li>
                        
                        
        
                        
                        {/* 
                        <Link to={ROUTE.BLOG}>
                        <li>
                            <span className={curR===ROUTE.BLOG?"active":null}>
                                BLOGS
                            </span>
                        </li>
                        </Link>
                        */
                        }
                    </ul>
               </nav>
           </header>

        );
    }
}

const mapStateToProps = state =>{
    return {
        language:state.language
    } 
}

export default Navigation ;