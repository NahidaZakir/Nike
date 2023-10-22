import React from 'react';
import iconic1 from "../Images/iconic/iconic1.png";
import iconic2 from "../Images/iconic/iconic2.png";
import iconic3 from "../Images/iconic/iconic3.png";
import iconic4 from "../Images/iconic/iconic4.png";
import iconic5 from "../Images/iconic/iconic5.png";
import iconic6 from "../Images/iconic/iconic6.png";
import iconic7 from "../Images/iconic/iconic7.png";
import iconic8 from "../Images/iconic/iconic8.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Home/iconic.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className="slick-next"
        style={{ ...style, display: "block" ,margin:"-180px 0px 0px 0px"}}
        onClick={onClick}
      >

      </div>

    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",margin:"-180px 0px 0px 0px" }}
        onClick={onClick}>
        </div>
    
    );
  }

const Iconic = () => {



        const settings = {
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows:true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
    return (
        <div className='max-w-[1440px] mx-auto'>
        <h2 className='mt-10 mb-10 text-left pl-10 text-2xl font-medium'>Always Iconic</h2>
        <Slider {...settings}>
          <div className='mr-3 w-1/3 h-1/3'>
            <img src={iconic1} ></img>
          </div>
          <div>
          <img src={iconic2} className='mr-3'></img>
          </div>
          <div>
          <img src={iconic3} className='mr-3'></img>
          </div>
          <div>
          <img src={iconic4} className='mr-3'></img>
          </div>
          <div>
          <img src={iconic5} className='mr-3'></img>
          </div>
          <div>
          <img src={iconic6} className='mr-3'></img>
          </div>
          <div>
          <img src={iconic7} className='mr-3'></img>
          </div>
          <div>
          <img src={iconic8} className='mr-3'></img>
          </div>
        </Slider>
      </div>
    );
};

export default Iconic;