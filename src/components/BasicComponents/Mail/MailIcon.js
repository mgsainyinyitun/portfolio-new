import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Mail.css';
const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

class MailIcon extends React.Component{
    render(){
        return(
            <a href='mailto:mgsainyinyitun.tumdy@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} className='mail-icon' />
            </a>
        )
    }
}

export default MailIcon;

