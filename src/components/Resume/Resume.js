import React from "react";
import { connect } from 'react-redux';
import './Resume.css';
import Profile from '../../img/Sai_Nyi_Nyi_Tun.png';
import InvisibleCard from "../BasicComponents/Card/InvisibleCard";
import { RESUME } from "./TEXT";
// const TEXT = null;
// const BODY = null;
class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.TEXT = RESUME.ENGLISH;
        this.BODY = [
            {
                title: props.language==='japanese'?'Summary':'Summary',
                data: this.TEXT.SUMMARY.DATA
            },
            {
                title: props.language==='japanese'?'Education':'Education',
                data: this.TEXT.EDUCATION.DATA
            },
            {
                
                title: 'IT Skills',
                data: this.TEXT.SKILLS.DATA
            },
            {
                title: 'Language Skills',
                data: this.TEXT.LANGUAGE.DATA
            },
            {
                title: 'Experiences',
                data: this.TEXT.EXPERIENCE.DATA
            },
            // {
            //     title: 'Volunteering Activities',
            //     data: this.TEXT.VOLUNTEER.DATA
            // },
            {
                title: 'Certificates',
                data: this.TEXT.CERTIFICATE.DATA
            },
            {
                title: 'Hobbies and Interests',
                data: this.TEXT.HOBBIES.DATA
            },
        ];
    }

    render() {
        return (
            <div className='resume-container'>
                <div className='holder'>
                    <div className='header'>
                        <div className='h-info'>
                            <div>
                                <h1> {this.props.language === 'japanese' ? 'サインニーニートウン' : 'SAI NYI NYI TUN'} </h1>
                                {/* <p>54 x 55 Aun San , Mandalay </p> */}

                                <a href='mailto:mgsainyinyitun.tumdy@gmail.com'>
                                    <p> mgsainyinyitun.tumdy@gmail.com</p>
                                </a>

                                <a href='tel:+959 4400 9573'>
                                    <p>+959 4400 96573 </p>
                                </a>
                                <a className='dwl-btn' href='https://drive.google.com/file/d/1sFSlBgWvVlQVpfS-JFkpGlShM4Z5-NCO/view?usp=sharing'>
                                    {this.props.language === 'japanese' ? 'ダウンロード' : 'DOWNLOAD'}
                                </a>
                            </div>
                        </div>
                        <div className='h-right'>
                            <img src={Profile} alt="Profile picture" className='h-photo' />
                            <p className='nrc'> 13/NAKHANA (N) 068390 </p>
                        </div>

                    </div>
                    {/*  Body Sections */}
                    {
                        this.BODY.map((item) => {
                            return (
                                <InvisibleCard
                                    key={item.title}
                                    header={item.title}
                                    content={item.data}
                                />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.language
    }
}
export default connect(mapStateToProps)(Resume);