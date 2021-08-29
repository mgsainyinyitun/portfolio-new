import React from "react";
import './CardCarousel.css';
import Slider from "react-slick";
import GlassCard from "./GlassCard";
import Chat from '../../../img/projects/chatwithfriend.png';
import HelpDesk from '../../../img/projects/helpdesk.gif';
import snake from '../../../img/projects/snake_game.gif';
import tictoe from '../../../img/projects/tic-tak-tok.gif';
import Web from '../../../img/projects/basicweb.gif';


class CardCarousel extends React.Component{

    render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
        };
        return (
        
          <div className='carousel-holder'>
                <Slider {...settings}>
                <div>
                    <GlassCard 
                        title = 'CHAT WITH FRIEND'
                        image={Chat}
                        content= 'Online chat web application, using React JS and Firebase'
                        link='https://web-messenger-sainyi-068390.web.app/'
                    />
                </div>
                <div>
                    <GlassCard 
                            title = 'HELP DESK SYSTEM'
                            image={HelpDesk}
                            content= 'Help desk system developed  using python django framework'
                            link='http://sainyinyitun.pythonanywhere.com/'
                    />
                </div>
                <div>
                <GlassCard 
                    title = 'SNAKE GAME'
                    image={snake}
                    content= 'Snake Game developed  using React JS Javascript Framework'
                    link='https://sai-nyi-snake-game.netlify.app/'
                />
                </div>
                </Slider>
            </div>
          
        );
      }

}
export default CardCarousel;



