import React from 'react';
import sport1 from "../Images/shopbysports/sport1.png";
import sport2 from "../Images/shopbysports/sports2.png";
import sport3 from "../Images/shopbysports/sports3.png";
import sport4 from "../Images/shopbysports/sports4.png";
import sport5 from "../Images/shopbysports/sports5.png";
import sport6 from "../Images/shopbysports/sports6.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Sport/Shopbysport.css";
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className="slick-next2"
        style={{ }}
        onClick={onClick}
      >
        <button className='btn btn-circle'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>

      </div>

    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slick-prev2"
        style={{  }}
        onClick={onClick}>
            <button className='btn btn-circle'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
</button>

        </div>
    
    );
  }

const Shopbysport = () => {

    
    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }


    const sports = [
           {"id":1, "image":require("../Images/shopbysports/sport1.png"), "title": "Nike Basketball", "description": "Styles made for your game."},
           {"id":2, "image":require("../Images/shopbysports/sports2.png"), "title": "Bike Running", "description": "Everything you'll need for every mile."},
           {"id":3, "image":require("../Images/shopbysports/sports3.png"), "title": "Nike Golf", "description": "Conquer any course in style."},
           {"id":4, "image":require("../Images/shopbysports/sports4.png"), "title": "Nike Football", "description": "Command the field in game-ready gear."},
           {"id":5, "image":require("../Images/shopbysports/sports5.png"), "title": "Nike Baseball", "description": "Step up to the plate in style."},
           {"id":6, "image":require("../Images/shopbysports/sports6.png"), "title": "Nike Soccer", "description": "Bring mad style to the pitch with latest gear."},

    ];

    return (
        <div className=' max-w-[1440px] mx-auto'>
           <h1 className='mt-24 mb-10 text-left pl-20 text-2xl font-medium'>Shop by Sport</h1>
           <Slider {...settings} className=' grid grid-cols-3 w-full gap-4 '>
                    {
                        sports.map((sport) => (<div className="card card-compact w-96 mt-2">
                        <figure><img src={sport.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-medium">{sport.title}</h2>
                            <p className='text-left'>{sport.description}</p>
                            <div className="card-actions justify-start mt-6">
                            <Link className="border-b-2 border-black text-lg text-black ">Shop</Link>
                            </div>
                        </div>
                    </div>))
                    }
        
            </Slider>    
            

            

        </div>
    );
};

export default Shopbysport;