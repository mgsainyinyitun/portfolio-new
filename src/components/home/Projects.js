import React from 'react';
import './Home.css';
import { TEXT } from './ProjectConstant';
import CardCarousel from '../BasicComponents/Card/CardCarousel';
import { connect } from 'react-redux';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const TXT =
            this.props.language === 'english' ? TEXT.ENGLISH :
                this.props.language === 'myanmar' ? TEXT.MYANMAR : TEXT.JAPANESE;

        return (
            <div className='projects-container'>
                <div className='underline mb-5'>
                    <h2 className='heading-title' >{this.props.language === 'japanese' ? 'プロジェクト' : 'PROJECTS'}</h2>
                </div>
                <div className='quote-holder'>
                    <p className='quote'>
                        {TXT.P_QUOTE.MESSAGE}
                    </p>
                    <div className='quote-writer'><i>{TXT.P_QUOTE.AUTHER} </i></div>
                </div>
                <CardCarousel />
                {/*<ProjectsCarousel/>*/}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        language: state.language,
    }
}

export default connect(mapStateToProps)(Projects);