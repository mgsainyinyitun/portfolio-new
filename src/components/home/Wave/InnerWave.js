import React from 'react';
import './Wave.css';
import SVG from '../../../img/Wave.svg';
import WaveLine from './WaveComponent';

// install svgr
// install rimraf

class InnerWave extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='wave-container'>
              {/*<WaveLine width={'100%'} height={'50px'}/>*/}
              <img src={this.props.cpt} className='d-wave'/>
            </div>
        );
    }
}

export default InnerWave;