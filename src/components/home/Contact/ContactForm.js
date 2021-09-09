
import { useState } from "react";
import React from "react"
import {EMAILJS_SERVICE_ID,EMAILJS_TEMPLATE_ID,EMAILJS_USER_ID} from './EMAILJS';
import emailjs from 'emailjs-com';
import {openNotificationWithIconSuccess,openNotificationWithIconError} from './Noti';

 const ContactForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [subject,setSubject] = useState('');
    const [emailSent,setEmailSent] = useState(false);

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };


    const submit = () => {
        if(name && isValidEmail && email &&  message && subject){
            // TO-Do: Sent Email
            const serviceId = EMAILJS_SERVICE_ID;
            const userId = EMAILJS_USER_ID;
            const templateId =EMAILJS_TEMPLATE_ID;

            const templateParams = {
                to_name:'Mg Sai Nyi Nyi Tun',
                name,
                email,
                message,
                subject,
            };

            emailjs.send(
                serviceId,
                templateId,
                templateParams,
                userId,
            )
            .then((response) => {
                if(response){
                    openNotificationWithIconSuccess('success')
                }
            })
            .then((error) => {
                if(error){
                    openNotificationWithIconError('error')
                }
            });

            // -----------------
            setName('');
            setEmail('');
            setMessage('');
            setSubject('');
            setEmailSent(true);
        }else{
            alert("Please Fill in All  Fields");
        }
    }


    return(
        <div className='glass-form'>
            <input type="text" name = 'name' placeholder="NAME"
                value={name}
                onChange= {e=>setName(e.target.value)}
            />
            <input type='email' name='email' placeholder='E-MAIL'
                value={email}
                onChange = {e => setEmail(e.target.value)}
            />
            <input type='text' name='subject' placeholder='SUBJECT'
                value={subject}
                onChange = {e => setSubject(e.target.value)}
            />
            <textarea rows="4" cols="50" name='message' placeholder="MESSAGE"
                value={message}
                onChange={ e => setMessage(e.target.value)}
            >
            </textarea>
            <div>
                <button className='submit-btn' onClick={submit}>
                    SUBMIT
                </button>
            </div>
        </div>
    )
};

export default ContactForm;