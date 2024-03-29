import { useState } from "react";
import React from "react";
import { connect } from 'react-redux';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from './EMAILJS';
import emailjs from 'emailjs-com';
import { openNotificationWithIconSuccess, openNotificationWithIconError } from './Noti';

const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = () => {
        if (name && isValidEmail && email && message && subject) {
            // TO-Do: Sent Email
            const serviceId = EMAILJS_SERVICE_ID;
            const userId = EMAILJS_USER_ID;
            const templateId = EMAILJS_TEMPLATE_ID;

            const templateParams = {
                to_name: 'Mg Sai Nyi Nyi Tun',
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
                    if (response) {
                        openNotificationWithIconSuccess('success')
                    }
                })
                .then((error) => {
                    if (error) {
                        openNotificationWithIconError('error')
                    }
                });

            // -----------------
            setName('');
            setEmail('');
            setMessage('');
            setSubject('');

        } else {
            alert("Please Fill in All  Fields");
        }
    }


    return (
        <div className='glass-form'>
            <input type="text" name='name' placeholder=
                {
                    props.language === 'japanese' ? '名前' : "NAME"
                }
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input type='email' name='email' placeholder=
                {
                    props.language === 'japanese' ? 'Eメール' : "'E-MAIL"
                }
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input type='text' name='subject' placeholder=
                {
                    props.language === 'japanese' ? '件名' : "SUBJECT"
                }
                value={subject}
                onChange={e => setSubject(e.target.value)}
            />
            <textarea rows="4" cols="50" name='message' placeholder=
                {
                    props.language === 'japanese' ? 'メッセージ' : "MESSAGE"
                }
                value={message}
                onChange={e => setMessage(e.target.value)}
            >
            </textarea>
            <div>
                <button className='submit-btn' onClick={submit}>
                    {
                        props.language === 'japanese' ? '実行' : "SUBMIT"
                    }
                </button>
            </div>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        language: state.language
    }
}
export default connect(mapStateToProps)(ContactForm);