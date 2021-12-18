import pCartoon from '../../img/info/Coding.svg';
import React from 'react';


const TITLE = {
    ENGLISH:"I believe the best and efficient  way to learning programming is by doing projects.",
    MYANMAR:"Programming လေ့လာဖို့ အကောင်းဆုံးနဲ့ အထိရောက်ဆုံး နည်းလမ်းက တော့ မိမိကိုယ်တိုင် Projects တွေကို ဖန်တီး ခြင်းဘဲ ဖြစ်တယ်။"
}



export default function TitleBar(props){

var TXT = TITLE.MYANMAR;
if(props.language === 'english'){
    TXT = TITLE.ENGLISH;
}

 return (
     <>
        <div class="lower-curve">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
        <div className='title-bar'>
         <div>
                <h1>PROJECTS</h1>
                <p>{TXT}</p>
            </div>
            <img src={pCartoon} className='p-cartoon' />
         </div>
     </>
 );
}