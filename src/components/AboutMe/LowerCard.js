import React from 'react';
import {paragraphs} from './About';


export default function LowerCard(){
    return(
        <div className='lower-card'>
            <h1>Hi </h1>

            {
                paragraphs.map(paragraph => {
                    return(
                        <>
                        <div className='gph-part'>
                        {
                            paragraph.graphic.map((g)=>{
                                return(
                                    <img src={g} className='gph-element goup-ani' />
                                )
                            })
                        }
                        </div>
                        <p className='p-me'>{paragraph.text}</p>
                        </>
                    );
                })

            }
        </div>
    )
}