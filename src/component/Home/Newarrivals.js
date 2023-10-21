import React from 'react';

import arrivals1 from "../Images/newarrivals1.png";
import arrivals2 from "../Images/newarrivals2.png";
import arrivals3 from "../Images/newarrivals3.png";
import { Link } from 'react-router-dom';

const Newarrivals = () => {
    return (
        <div className='my-12'>
            <div className="carousel ">
                <div className="carousel-item w-1/3">
                    <img src={arrivals1} alt="Burger" />
                </div> 
                <div className="carousel-item w-1/3">
                    <img src={arrivals2} alt="Burger" />
                </div> 
                <div className="carousel-item w-1/3">
                    <img src={arrivals3} alt="Burger" />
                </div> 
        </div>

<div className='mt-12'>
    <h1 className='text-7xl font-extrabold tracking-tighter mb-8'>NEW ARRIVALS</h1>
    <p className=' text-lg mb-5'>Featuring the Air Force 1 Pro Tech.</p>
    <button className="btn  w-24 h-5 m-0 p-0 bg-black hover:bg-gray-500 rounded-full text-white"><Link>Shop</Link></button>
  </div>
        </div>
    );
};

export default Newarrivals;