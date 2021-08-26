import React from 'react';
import './BasicProgressBar.css';
import {Progress} from 'antd';

class BasicProgressBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='p-contain'>
                <div className='p-h-s'><p className='percent'>{this.props.name}</p></div>
                <Progress percent={this.props.percent} status="active" 
                    strokeColor={{'0%': '#108ee9',
                                  '100%': '#BB2020',}}
                    showInfo={false}
                />
                <div className='p-h'><p className='percent'>{this.props.percent}%</p></div>
            </div>
        );

    }
}
export default BasicProgressBar;