import {  notification } from 'antd';

export const openNotificationWithIconSuccess = (type) => {
  notification[type](  
    {
    style:{background:'rgba(0,0,100,0.4)',color:'white',borderRadius:'15px'},
    description:
      'Your e-mail is succefully to mgsainyinyitun.tumdy@gmail.com. Thankyou For Sent me E-mail.',
  });
};

export const openNotificationWithIconError = type => {
    notification[type](  
      {
      style:{background:'rgba(100,0,0,0.4)',color:'white',borderRadius:'15px'},
      description:
        'Somethings went wrong! Your e-mail is cannot send to mgsainyinyitun.tumdy@gmail.com. Please try again',
    });
  };
  


