import React from 'react';
import {paragraphs} from './About';


export default function LowerCard(){
    return(
        <div className='lower-card'>
            {
                paragraphs.map(paragraph => {
                    return(
                        <>
                        <p className='p-me'>{paragraph}</p>
                        <hr className='p-break'/>
                        </>
                    );
                })

            }
        </div>
    )
}