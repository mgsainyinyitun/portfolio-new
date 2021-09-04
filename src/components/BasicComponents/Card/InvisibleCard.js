import React from "react";
import './InvisibleCard.css';

class InvisibleCard extends React.Component{

    constructor(props){
        super(props);
    }

    diplayContent(contents){
        if(Array.isArray(contents)){
            return (
            <ul className='list-items'>
                {
                    contents.map(content => {
                        return(
                            <li key={content}>{content}</li>
                        )
                    })
                }
                
            </ul>
            )
        }else
        return(
            <>{contents}</>
        )

    }

    render(){
        return(
            <div className='i-container'>
                <div className='i-header'>
                    <h3>{this.props.header || ''}</h3>
                </div>
                <hr/>
                <div className='i-body'>
                    {this.diplayContent(this.props.content)}
                </div>
            </div>
        )
    }
}

export default InvisibleCard;