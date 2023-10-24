import React from 'react';
import Profile from '../../img/profile.jpg';
import { greeting } from './About';

export default function UpperCard(props) {
    var TXT = props.language === 'english' ? greeting.ENGLISH :
        props.language === 'myanmar' ? greeting.MYANMAR : greeting.JAPANESE;
    return (
        <div className='upper-card'>
            <div className='w-75'>
                <h2 className='about-me'>{TXT.aboutme}</h2>
                <p className='quote'>{TXT.greet}</p>
            </div>
            <img src={Profile} className='profile goup-ani' />
        </div>
    )

}