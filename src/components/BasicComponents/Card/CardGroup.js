import React from 'react';
import GlassCard from './GlassCard';
import './CardGroup.css';

class CardGroup extends React.Component{
    render(){
        return(
            <div className='w-100 gp-card'>
                    <GlassCard
                        title='Chess Application with Web-app'
                        content='Nostrud culpa consequat pariatur anim esse anim veniam anim ipsum exercitation laborum amet. 
                        Labore commodo irure aute aliquip. Nulla incididunt in eiusmod ea officia cillum '
                        link='some link'
                    />
            </div>
        )
    }
}
export default CardGroup;