import React from "react";
import './Resume.css';
import Profile from '../../img/Sai_Nyi_Nyi_Tun.png';
import InvisibleCard from "../BasicComponents/Card/InvisibleCard";
import { RESUME } from "./TEXT";

const BODY = [
    {
        title:'Summary',
        data:RESUME.SUMMARY.DATA
    },
    {
        title:'Education',
        data:RESUME.EDUCATION.DATA
    },
    {
        title:'IT Skills',
        data:RESUME.SKILLS.DATA
    },
    {
        title:'Language Skills',
        data:RESUME.LANGUAGE.DATA
    },
    {
        title:'Experiences',
        data:RESUME.EXPERIENCE.DATA
    },
    {
        title:'Volunteering Activities',
        data:RESUME.VOLUNTEER.DATA
    },
    {
        title:'Certificates',
        data:RESUME.CERTIFICATE.DATA
    },
    {
        title:'Hobbies and Interests',
        data:RESUME.HOBBIES.DATA
    },
]



class Resume extends React.Component{

            render(){
            return(
                <div className='resume-container'>
                    <div className='holder'>

                        <div className='header'>

                            <div className='h-info'>
                                <div>
                                    <h1>MG SAI NYI NYI TUN</h1>
                                    <p>54 x 55 Aun San , Mandalay </p>

                                    <a href='mailto:mgsainyinyitun.tumdy@gmail.com'>
                                       <p> mgsainyinyitun.tumdy@gmail.com</p>
                                    </a>
                                    
                                    <a href='tel:+959 4400 9573'>
                                    <p>+959 4400 96573 </p>
                                    </a>
                                    <a className='dwl-btn' href='https://drive.google.com/file/d/1sFSlBgWvVlQVpfS-JFkpGlShM4Z5-NCO/view?usp=sharing'>DOWNLOAD</a>
                                </div>
                            </div>

                           
                           <div className='h-right'>
                                <img src={Profile} className='h-photo'/>
                                <p className='nrc'> 13/NAKHANA (N) 068390 </p>
                           </div>
                            
                        </div>

                        {/*  Body Sections */}

                        {
                            BODY.map((item) => {
                                return(
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

export default Resume;