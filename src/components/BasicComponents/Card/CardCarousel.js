import React from "react";
import './CardCarousel.css';
import Slider from "react-slick";
import GlassCard from "./GlassCard";



class CardCarousel extends React.Component{

    render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
        };
        return (
        <div className='carousel-container'>
          <div className='carousel-holder'>
                <Slider {...settings}>
                <div>
                    <GlassCard/>
                </div>
                <div>
                    <h3><GlassCard/></h3>
                </div>
                <div>
                    <h3><GlassCard/></h3>
                </div>
                <div>
                    <h3><GlassCard/></h3>
                </div>
                <div>
                    <h3><GlassCard/></h3>
                </div>
                </Slider>
            </div>
          </div>
        );
      }

}
export default CardCarousel;



