import React from 'react';
import './Navigation.css';
import { MENU } from './NAVNAME';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../Router/constant';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'

function NavigationFunction(props) {
    const location = useLocation();
    const curR = location.pathname;
    var MENU_TXT = MENU.ENGLISH;

    MENU_TXT =
        props.language === 'myanmar' ? MENU.MYANMAR :
            props.language === 'japanese' ? MENU.JAPANESE : MENU.ENGLISH;

    return (
        <header className='sticky'>
            <figure className='brand'>
                <Link to={ROUTE.HOME}>
                    <FontAwesomeIcon icon={faHome} className='red home-icon' />
                </Link>
            </figure>
            <nav className="menu">
                <input type='checkbox' id='menuToggle' />
                <label htmlFor='menuToggle' className='menu-icon'><FontAwesomeIcon icon={faBars} className='red' /></label>
                <ul>
                    <Link to={ROUTE.HOME}>
                        <li>
                            <span className={curR === ROUTE.HOME ? 'active' : null}>
                                {MENU_TXT.HOME}
                            </span>
                        </li>
                    </Link>

                    <Link to={ROUTE.PROJECTS}>
                        <li>
                            <span className={curR === ROUTE.PROJECTS ? "active" : null}>
                                {MENU_TXT.PROJECTS}
                            </span>
                        </li>
                    </Link>

                    <Link to={ROUTE.ABOUT_ME}>
                        <li>
                            <span className={curR === ROUTE.ABOUT_ME ? "active" : null}>
                                {MENU_TXT.ABOUTME}
                            </span>
                        </li>
                    </Link>
                    <Link to={ROUTE.RESUME}>
                        <li>
                            <span className={curR === ROUTE.RESUME ? "active" : null}>
                                {MENU_TXT.RESUEM}
                            </span>
                        </li>
                    </Link>

                    <li>
                        <select className='lang-select'
                            defaultValue={'english'}
                            onChange={
                                e => { props.changeLanguage(e.target.value) }
                            }
                        >
                            <option value="english">English</option>
                            <option value="myanmar">Myanmar</option>
                            <option value="japanese">Japanese</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
const mapStateToProps = state => {
    return {
        language: state.language
    }
}
export default connect(mapStateToProps)(NavigationFunction)
