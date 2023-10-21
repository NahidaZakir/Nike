import React from 'react';
import trendings1 from "../Images/trendings1.png";
import trendings2 from "../Images/trendings2.png";
import trendings3 from "../Images/trendings3.png";
import trendings4 from "../Images/trendings4.png";


const Trending = () => {
    return (
        <div className='mb-14 max-w-[1440px] mx-auto'>
<div className="carousel w-full ">

  <div id="item1" className="carousel-item w-1/3 mr-3">
    <img src={trendings1} className="w-full"></img>
  </div> 
  <div id="item2" className="carousel-item w-1/3  mr-3">
    <img src={trendings2} className="w-full"></img>
  </div> 
  <div id="item3" className="carousel-item w-1/3 mr-3">
    <img src={trendings3} className="w-full"></img>
  </div> 
  <div id="item4" className="carousel-item w-1/3  mr-3">
    <img src={trendings4} className="w-full"></img>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Trending;