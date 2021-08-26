import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';


class Contact extends React.Component{
    render(){
        return(
            <div className='contact-container'>
                <div className='inner-container'>
                    <div className='underline mb-5'>
                        <h2 className='heading-title' >CONTACT</h2>
                    </div>
                    <div className='form-container mb-3'>
                        <div className='glass-contact mb-2'>
                            <div className='info-container mb-3'>
                                <FontAwesomeIcon icon={faEnvelope} className='aw-icon mr-3'/>
                                <a href="mailto:mgsainyinyitun.tumdy@gmail.com">
                                <p>mgsainyinyitun.tumdy@gmail.com</p>
                                </a>
                            </div>
                            
                            <div className='info-container'>
                                <FontAwesomeIcon icon={faPhone} className='aw-icon'/>
                                <a href="tel:+959 4400 9573">
                                    <p>+959 4400 9573</p>
                                </a>
                            </div>
                        </div>

                        <div className='glass-form'>
                            <input type="text" name = 'name' placeholder="NAME"/>
                            <input type='email' name='email' placeholder='E-MAIL'/>
                            <input type='text' name='subject' placeholder='SUBJECT'/>
                            <textarea rows="4" cols="50" name='message' placeholder="MESSAGE">
                            </textarea>
                            <div>
                                <button className='submit-btn'>
                                    SUBMIT
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;