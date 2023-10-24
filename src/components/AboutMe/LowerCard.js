import React from 'react';

export default function LowerCard(props) {
    return (
        <div className='lower-card'>
            {
                props.language === 'english' ?
                    <h1>HI,</h1> :
                    props.language === 'myanmmar' ?
                        <h1>မင်္ဂလာပါ</h1> :
                        <h1>こんにちは</h1>
            }
            {
                props.paragraphs.map(paragraph => {
                    return (
                        <>
                            <div className='gph-part'>
                                {
                                    paragraph.graphic.map((g) => {
                                        return (
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