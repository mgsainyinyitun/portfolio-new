import React from 'react';
import Profile from '../../img/profile.jpg';

export default function UpperCard (){
    return(
        <div className='upper-card'>
            <div className='w-75'>
                <h2 className='about-me'>ABOUT ME</h2>
                <p className='quote'>Warmly welcome. Have a nice day</p>
            </div>
            <img src={Profile} className='profile' />
        </div>
    )
    
}